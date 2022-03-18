<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <div v-if="provider">
          <div v-if="Boolean(isConnected)">
            <v-row
              align="center"
              :class="`my-5 ${
                !$vuetify.breakpoint.smAndDown
                  ? 'space-x-6'
                  : 'mx-2 grid grid-cols-1 gap-y-5 space-x-0'
              }`"
              justify="center"
            >
              <v-tooltip bottom content-class="text-xs">
                <template #activator="{ on, attrs }">
                  <span
                    v-ripple="{ center: true }"
                    v-bind="attrs"
                    class="p-3 my-auto text-center text-gray-100 border-2 border-transparent border-solid rounded-md shadow-xl cursor-pointer app-title border-gradient-br-blue-green-gray-900"
                    v-on="on"
                    @click="copyText(address)"
                  >
                    Address:
                    {{ formatAddressToDisplay(address) }}
                  </span>
                </template>
                <span>
                  {{ address }}
                </span>
              </v-tooltip>
              <span
                class="p-3 my-auto text-center text-gray-100 border-2 border-transparent border-solid rounded-md app-title border-gradient-br-blue-green-gray-900"
              >
                Balance: {{ formatBalanceToDisplay(balance) }}
              </span>
            </v-row>
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <v-row>
                <ValidationProvider
                  v-slot="{ errors }"
                  class="flex justify-center"
                  name="amount"
                  :rules="{
                    required: true,
                    decimal: true,
                    min: 1,
                    max: 8,
                    min_value: 0.000001,
                    max_value: formatBalanceToDisplay(balance),
                  }"
                >
                  <v-text-field
                    v-model="amount"
                    class="max-w-sm mx-4 mt-4"
                    :counter="8"
                    dense
                    :error-messages="errors"
                    :hint="!Boolean(amount) ? 'For example, `0.01`' : ''"
                    label="Amount"
                    name="amount"
                    outlined
                    placeholder="Your amount"
                    :prepend-inner-icon="mdiCurrencyUsdOff"
                    rounded
                    shaped
                    :success="
                      !Boolean(Object.keys(errors).length) && Boolean(amount)
                    "
                  ></v-text-field>
                </ValidationProvider>
              </v-row>
              <v-row
                align="center"
                :class="`${
                  !$vuetify.breakpoint.smAndDown
                    ? 'space-x-6'
                    : 'my-4 grid grid-cols-1 gap-y-2 space-x-0 space-y-1 px-5'
                }`"
                justify="center"
              >
                <v-btn
                  :class="`${!$vuetify.breakpoint.smAndDown ? '' : 'w-full'}`"
                  :disabled="invalid || Boolean(spinner)"
                  @click="send"
                  ><svg
                    v-if="spinner"
                    class="w-5 h-5 mr-3 text-white animate-spin"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Send</span>
                </v-btn>
                <v-btn @click="disconnectWeb3">Disconnect to Metamask</v-btn>
              </v-row>
            </ValidationObserver>
            <div class="mt-5 text-sm text-center">
              Note: All chains are supported. (Including Testnets for testing
              this feature.)
            </div>
            <div
              class="flex flex-col items-center mt-5 space-y-1 text-sm text-center"
            >
              <div v-if="txHash" class="break-words">
                Transaction Hash: {{ txHash }}
              </div>
              <div v-if="txStatus">Status: {{ txStatus }}</div>
              <div v-if="confirmationCount">
                Confirmation Progress:
                {{ confirmationCount }}/{{ totalConfirmationCount }}
              </div>
            </div>
          </div>
          <div v-else class="flex items-center justify-center">
            <v-btn @click="connectWeb3">Connect to Metamask</v-btn>
          </div>
        </div>
        <div v-else class="flex items-center justify-center">
          <v-btn
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            target="_blank"
          >
            Install Metamask
          </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
  import {
    defineComponent,
    getCurrentInstance,
    onMounted,
    ref,
    useContext,
    useMeta,
  } from '@nuxtjs/composition-api'

  import Web3 from 'web3'
  import detectEthereumProvider from '@metamask/detect-provider'
  import { mdiCurrencyUsdOff } from '@mdi/js'
  import { ValidationObserver, ValidationProvider } from 'vee-validate'

  export default defineComponent({
    // components
    components: {
      ValidationProvider,
      ValidationObserver,
    },

    // setup
    setup() {
      // meta
      useMeta({
        title: 'Coffee With Crypto | ',
      })

      // context
      const { $config } = useContext()

      // root variables
      const $vToastify = getCurrentInstance().proxy.$vToastify

      // refs
      const observer = ref(null)

      // constants
      const ownerAddress = $config.ownerAddress.toLowerCase()
      let web3 = null
      const provider = ref(null)
      const isConnected = ref(false)
      const address = ref(null)
      const balance = ref(0)
      const amount = ref('')
      const txStatus = ref('')
      const confirmationCount = ref(0)
      const totalConfirmationCount = ref(0)
      const txHash = ref('')
      const spinner = ref(false)

      // hooks
      onMounted(async () => {
        await setProvider()

        if (provider.value) {
          web3 = new Web3(provider.value)
        }
      })

      // methods
      const connectWeb3 = async () => {
        // if No web3 provider
        if (!provider.value) {
          $vToastify.error('No web3 provider detected.')

          return
        }

        try {
          // Ask to connect
          await web3.eth.requestAccounts()

          // get address, balance etc.
          await updateUserInfo()

          // Check connecting
          isConnected.value = await web3.eth.net.isListening()

          // started eth events
          startEthEvents()

          $vToastify.success('Connected.')
        } catch (error) {
          // User denied account access
          $vToastify.error(String(error.message))
        }
      }

      const send = async () => {
        try {
          // validate
          const validate = await observer.value.validate()

          if (!validate) {
            throw new Error('Validation Error.')
          }

          // set total confirmation count
          web3.eth.transactionConfirmationBlocks = 5
          totalConfirmationCount.value = web3.eth.transactionConfirmationBlocks

          // send tx
          await web3.eth
            .sendTransaction({
              from: address.value,
              to: ownerAddress,
              value: web3.utils.toWei(amount.value, 'ether'),
            })
            .once('transactionHash', handleTransactionHash)
            .once('receipt', handleTransactionReceipt)
            .on('confirmation', handleTransactionConfirmation)
            .on('error', handleTransactionError)
        } catch (error) {
          if (error) {
            $vToastify.error(String(error?.message))
          }
        }
      }

      const disconnectWeb3 = () => {
        $vToastify.success('Disconnected.')

        // Disconnect
        isConnected.value = false

        // reset user info
        address.value = null
        balance.value = null

        // inputs
        resetInputs()

        // reset tx details
        resetTxDetails()

        // reset events
        stopEthEvents()

        // reload to
        location.reload()
      }

      const updateUserInfo = async (_address = null) => {
        // Get user address and balance
        if (!_address) {
          address.value = (await web3.eth.getAccounts())[0].toLowerCase()
        } else {
          address.value = _address
        }

        balance.value = web3.utils.fromWei(
          await web3.eth.getBalance(address.value),
          'ether'
        )
      }

      const startEthEvents = () => {
        // Start eth events
        provider.value.on('chainChanged', handleChainChanged)
        provider.value.on('accountsChanged', handleAccountsChanged)
        provider.value.on('disconnect', handleDisconnect)
      }

      const stopEthEvents = () => {
        // Stop eth events
        provider.value.removeListener('chainChanged', handleChainChanged)
        provider.value.removeListener('accountsChanged', handleAccountsChanged)
      }

      const handleTransactionHash = (_txHash) => {
        // tx created event
        txHash.value = _txHash
        txStatus.value = 'Awaiting transaction confirmation.'
        $vToastify.info(
          'Transaction Status: Awaiting transaction confirmation.'
        )
        spinner.value = true
        resetInputs()
      }

      const handleTransactionReceipt = async () => {
        // tx created successfully event
        await updateUserInfo()
        txStatus.value = 'Awaiting block confirmation.'
        $vToastify.success('Transaction Status: Awaiting block confirmation.')
        $vToastify.info('Thank You For Your Support! - @emretepedev')
      }

      const handleTransactionConfirmation = (_confirmationCount) => {
        // tx confirmation event
        if (
          _confirmationCount > 0 &&
          _confirmationCount <= totalConfirmationCount.value
        ) {
          confirmationCount.value = _confirmationCount
          $vToastify.info('Confirmation Status: New block found.')
        }

        if (_confirmationCount >= totalConfirmationCount.value) {
          txStatus.value = 'Confirmed.'
          resetTxDetails()
          $vToastify.success('Transaction Status: Confirmed.')
        }
      }

      const handleTransactionError = () => {
        // tx error event
        txStatus.value = 'Failed.'
        resetTxDetails()
        $vToastify.error('Transaction Status: Failed.')
      }

      const handleAccountsChanged = async (accounts) => {
        // eth change account event
        if (accounts.length > 0) {
          const address = accounts[0].toLowerCase()
          await updateUserInfo(address)
          $vToastify.success(`Linked account changed to '${address}'`)
        } else {
          $vToastify.warning('Linked account not found. Page will be reloaded.')
          location.reload()
        }
      }

      const handleChainChanged = async () => {
        // eth change chain event
        await updateUserInfo()
        $vToastify.success('Chain has changed.')
      }

      const handleDisconnect = async () => {
        // eth disconnect event
        await stopEthEvents()
        location.reload()
      }

      const resetInputs = () => {
        // removed fields and reset validate
        observer.value.reset()
        amount.value = ''
      }

      const resetTxDetails = () => {
        // removed tx details for sustainability
        txStatus.value = ''
        txHash.value = ''
        totalConfirmationCount.value = 0
        confirmationCount.value = 0
        spinner.value = false
      }

      const setProvider = async () => {
        // Set for web3 provider
        provider.value = await detectEthereumProvider({
          mustBeMetaMask: true,
          silent: true,
          timeout: 3000,
        })
      }

      const formatAddressToDisplay = (address) => {
        // address value formatted to user
        return (
          address.substring(0, 4) +
          '...' +
          address.substring(address.length - 4)
        )
      }

      const formatBalanceToDisplay = (balance) => {
        // balance value formatted to user
        return (+balance).toFixed(6)
      }

      const copyText = async (text) => {
        // copy to clipboard
        try {
          await navigator.clipboard.writeText(text)
        } catch (error) {
          // suppressed error
          return null
        }
      }

      // return
      return {
        provider,
        isConnected,
        amount,
        address,
        balance,
        observer,
        txStatus,
        confirmationCount,
        txHash,
        totalConfirmationCount,
        spinner,
        copyText,
        connectWeb3,
        disconnectWeb3,
        formatBalanceToDisplay,
        formatAddressToDisplay,
        send,
        mdiCurrencyUsdOff,
      }
    },

    // head
    head: {},
  })
</script>

<style>
  .border-gradient-br-blue-green-gray-900 {
    background: linear-gradient(to right, #18181b, #18181b),
      linear-gradient(to bottom right, #60a5fa, #4ade80);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  .hover\:border-gradient-tl-blue-green-gray-900:hover {
    background: linear-gradient(to right, #18181b, #18181b),
      linear-gradient(to top left, #60a5fa, #4ade80);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }
</style>
