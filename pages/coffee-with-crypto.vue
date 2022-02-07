<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <div v-if="provider">
          <div v-if="isConnected">
            <v-row
              justify="center"
              align="center"
              :class="`my-5 ${
                !$vuetify.breakpoint.xsOnly
                  ? 'space-x-6'
                  : 'space-x-0 grid grid-cols-1 gap-y-5 mx-2'
              }`"
            >
              <v-tooltip bottom content-class="text-xs">
                <template #activator="{ on, attrs }">
                  <span
                    v-ripple="{ center: true }"
                    v-bind="attrs"
                    class="
                      p-3
                      text-center
                      my-auto
                      cursor-pointer
                      text-gray-100
                      border-2 border-transparent border-solid
                      rounded-md
                      shadow-xl
                      app-title
                      border-gradient-br-blue-green-gray-900
                    "
                    v-on="on"
                    @click="copyText(address)"
                  >
                    Address: {{ formatAddressToDisplay(address) }}
                  </span>
                </template>
                <span>
                  {{ address }}
                </span>
              </v-tooltip>
              <span
                class="
                  p-3
                  my-auto
                  text-center text-gray-100
                  border-2 border-transparent border-solid
                  rounded-md
                  app-title
                  border-gradient-br-blue-green-gray-900
                "
              >
                Balance: {{ formatBalanceToDisplay(balance) }}
              </span>
            </v-row>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-row>
                <validation-provider
                  v-slot="{ errors }"
                  name="amount"
                  :rules="{
                    required: true,
                    decimal: true,
                    min: 1,
                    max: 8,
                    min_value: 0.000001,
                    max_value: formatBalanceToDisplay(balance),
                  }"
                  class="flex justify-center"
                >
                  <v-text-field
                    v-model="amount"
                    :counter="8"
                    :error-messages="errors"
                    :success="
                      !Boolean(Object.keys(errors).length) && Boolean(amount)
                    "
                    label="Amount"
                    placeholder="Your amount"
                    :hint="!Boolean(amount) ? 'For example, `0.01`' : ''"
                    name="amount"
                    :prepend-inner-icon="mdiCurrencyUsdOff"
                    outlined
                    rounded
                    dense
                    shaped
                    class="max-w-sm mx-4 mt-4"
                  ></v-text-field>
                </validation-provider>
              </v-row>
              <v-row
                justify="center"
                align="center"
                :class="`${
                  !$vuetify.breakpoint.xsOnly
                    ? 'space-x-6'
                    : 'space-x-0 space-y-1 px-5 grid grid-cols-1 gap-y-2 my-4'
                }`"
              >
                <v-btn
                  :disabled="invalid"
                  :class="`${!$vuetify.breakpoint.xsOnly ? '' : 'w-full'}`"
                  @click="send"
                  >Send</v-btn
                >
                <v-btn @click="disconnectWeb3">Disconnect to Metamask</v-btn>
              </v-row>
            </validation-observer>
            <div v-if="txHash">Transaction Hash: {{ txHash }}</div>
            <div v-if="txStatus">Status: {{ txStatus }}</div>
            <div v-if="confirmationCount">
              Confirmation Progress:
              {{ confirmationCount }}/{{ totalConfirmationCount }}
            </div>
          </div>
          <div v-else class="flex justify-center items-center">
            <v-btn @click="connectWeb3">Connect to Metamask</v-btn>
          </div>
        </div>
        <div v-else class="flex justify-center items-center">
          <v-btn
            target="_blank"
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
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
  useMeta,
  onMounted,
  ref,
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
  setup(_, { root }) {
    // meta
    useMeta({
      title: 'Coffee With Crypto | ',
    })

    // root variables
    const $vToastify = root.$vToastify

    // refs
    const observer = ref(null)

    // consts
    let web3 = null
    const provider = ref(null)
    const isConnected = ref(false)
    const address = ref(null)
    const balance = ref(0)
    const amount = ref(0)
    const ownerAddress = '0x93C4C1e86434eA4E831d8A13e64aC288C49B7b76'
    const txStatus = ref(null)
    const confirmationCount = ref(null)
    const txHash = ref(null)
    const totalConfirmationCount = ref(null)

    // hooks
    onMounted(async () => {
      await checkProvider()

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
        await updateUserInfo()

        // Connected
        isConnected.value = await web3.eth.net.isListening()
      } catch (error) {
        // User denied account access
        $vToastify.error(String(error.message))
      }
    }

    const send = async () => {
      await web3.eth
        .sendTransaction({
          from: address.value.toLowerCase(),
          to: ownerAddress.toLowerCase(),
          value: web3.utils.toWei(amount.value, 'ether'),
        })
        .on('transactionHash', (_txHash) => {
          txHash.value = _txHash
          txStatus.value = 'Awaiting transaction confirmation.'
          $vToastify.info(
            'Transaction Status: Awaiting transaction confirmation.'
          )
        })
        .on('receipt', async () => {
          txStatus.value = 'Awaiting block confirmation.'
          $vToastify.success('Transaction Status: Awaiting block confirmation.')
          $vToastify.info('Thank You For Your Support! - @emretepedev')
          resetInputs()
          await updateUserInfo()
        })
        .on('confirmation', (_confirmationCount) => {
          totalConfirmationCount.value = web3.eth.transactionConfirmationBlocks
          confirmationCount.value = _confirmationCount
          $vToastify.info('Confirmation Status: New block found.')

          if (totalConfirmationCount.value - _confirmationCount === 0) {
            txStatus.value = 'Confirmed.'
            $vToastify.success('Transaction Status: Confirmed.')
            resetTxDetails()
          }
        })
        .on('error', () => {
          txStatus.value = 'Failed.'
          $vToastify.error('Transaction Status: Failed.')
          resetTxDetails()
        })
    }

    const disconnectWeb3 = async () => {
      // Check for web3 provider
      await checkProvider()

      // Disconnect
      isConnected.value = false

      // reset user info
      address.value = null
      balance.value = null

      // inputs
      resetInputs()
    }

    const updateUserInfo = async () => {
      // Get user address and balance
      address.value = await web3.eth.getCoinbase()
      balance.value = web3.utils.fromWei(
        await web3.eth.getBalance(address.value),
        'ether'
      )
    }

    const resetInputs = () => {
      // removed fields and validate
      observer.value.reset()
      amount.value = 0
    }

    const resetTxDetails = () => {
      // removed tx details for sustainability
      txStatus.value = null
      txHash.value = null
      totalConfirmationCount.value = null
      confirmationCount.value = null
    }

    const checkProvider = async () => {
      // Check for web3 provider
      provider.value = await detectEthereumProvider({
        mustBeMetaMask: true,
        silent: true,
        timeout: 3000,
      })
    }

    const formatAddressToDisplay = (address) => {
      return (
        address.substring(0, 6) + '...' + address.substring(address.length - 4)
      )
    }

    const formatBalanceToDisplay = (balance) => {
      return (+balance).toFixed(6)
    }

    const copyText = async (text) => {
      await navigator.clipboard.writeText(text).catch(() => {
        $vToastify.error('Something went wrong.')
      })
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
      web3,
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
.v-data-table-header th {
  white-space: nowrap !important;
}

.v-data-table-header th.hide-icon-to-sortable:hover .v-data-table-header__icon {
  display: inline-flex !important;
}
.v-data-table-header
  tr
  > th.hide-icon-to-sortable
  > .v-data-table-header__icon {
  display: none !important;
}

@media (max-width: 425px) {
  .v-data-footer__pagination {
    width: 100% !important;
  }

  .v-data-footer__icons-before,
  .v-data-footer__icons-after,
  .v-data-footer__select {
    margin: auto !important;
  }
}

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
