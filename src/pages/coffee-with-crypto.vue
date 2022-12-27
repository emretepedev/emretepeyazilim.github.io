<template>
  <div>
    <div class="mt-12 flex justify-center">
      <v-container>
        <div v-if="hasMetamask">
          <v-row
            align="center"
            :class="[
              'my-5',
              !$vuetify.breakpoint.smAndDown
                ? 'space-x-6'
                : 'mx-2 grid grid-cols-1 gap-y-5 space-x-0',
            ]"
            justify="center"
          >
            <v-tooltip bottom content-class="text-xs" :disabled="!isConnected">
              <template #activator="{ on }">
                <span
                  v-ripple="{ center: true }"
                  class="app-title border-gradient-br-blue-green-gray-900 my-auto cursor-pointer rounded-md border-2 border-solid border-transparent p-3 text-center text-gray-100 shadow-xl"
                  v-on="on"
                  @click="isConnected && copyToAddress()"
                >
                  Address:
                  {{ formattedAddress }}
                </span>
              </template>
              <span class="text-center">
                <div>
                  {{ address }}
                </div>
                <div>(Click to Copy)</div>
              </span>
            </v-tooltip>
            <span
              class="app-title border-gradient-br-blue-green-gray-900 my-auto rounded-md border-2 border-solid border-transparent p-3 text-center text-gray-100"
            >
              Balance: {{ formattedBalance }}
            </span>
          </v-row>
          <ValidationObserver ref="observer" #default="{ invalid }">
            <v-row>
              <ValidationProvider
                #default="{ errors }"
                class="flex justify-center"
                name="amount"
                :rules="{
                  required: true,
                  decimal: true,
                  min: 1,
                  max: 8,
                  min_value: 0.000001,
                  max_value: balance,
                }"
              >
                <v-text-field
                  v-model="amount"
                  class="mx-4 mt-4 max-w-sm"
                  :counter="8"
                  dense
                  :disabled="!isConnected"
                  :error-messages="errors"
                  :hint="!amount.length ? 'For example, `0.01`' : undefined"
                  label="Amount"
                  name="amount"
                  outlined
                  placeholder="Your amount"
                  :prepend-inner-icon="mdiCurrencyUsdOff"
                  rounded
                  shaped
                  :success="
                    !Object.keys(errors).length && Boolean(amount.length)
                  "
                  @keyup.enter="send()"
                ></v-text-field>
              </ValidationProvider>
            </v-row>
            <v-row
              align="center"
              :class="
                !$vuetify.breakpoint.smAndDown
                  ? 'space-x-6'
                  : 'my-4 grid grid-cols-1 gap-y-2 space-x-0 space-y-1 px-5'
              "
              justify="center"
            >
              <v-btn
                :class="!$vuetify.breakpoint.smAndDown ? '' : 'w-full'"
                :disabled="invalid || spinner || !isConnected"
                @click="send()"
                ><svg
                  v-if="spinner"
                  class="mr-3 h-5 w-5 animate-spin text-white"
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
              <v-btn v-if="isConnected" @click="disconnectWeb3()"
                >Disconnect to Metamask</v-btn
              >
              <v-btn v-else @click="connectWeb3()">Connect</v-btn>
            </v-row>
          </ValidationObserver>
          <div class="mt-5 text-center text-sm">
            Note: Never mind the coffee. As a developer, I prefer Testnet coins
            for testing :)
          </div>
          <div
            class="mt-5 flex flex-col items-center space-y-1 text-center text-sm"
          >
            <div v-if="txHash" class="break-words">
              Transaction Hash: {{ txHash }}
            </div>
            <div v-if="txStatus">Status: {{ txStatus }}</div>
            <div v-if="waitForConfirmation">
              Confirmation Progress:
              {{ txConfirmationCount }}/{{ txConfirmationBlocks }}
            </div>
          </div>
        </div>
        <div v-else class="flex items-center justify-center">
          <v-btn href="https://metamask.io/download/" target="_blank">
            Install Metamask
          </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ethers } from 'ethers'
  import Web3 from 'web3'
  import { mdiCurrencyUsdOff } from '@mdi/js'
  import { ValidationObserver, ValidationProvider } from 'vee-validate'

  useNuxt2Meta({
    title: 'Coffee With Crypto | ',
  })

  const metamaskStore = useMetamaskStore()
  const { $config, $toast } = useNuxtApp()
  const observer = ref(null)
  const { ownerAddress, txConfirmationBlocks } = $config.public
  const { ethereum } = window as any
  const hasMetamask = Boolean(ethereum)
  const provider = hasMetamask
    ? new ethers.providers.Web3Provider(ethereum, 'any')
    : null
  const isConnected = ref(false)
  const address = ref('')
  const balance = ref('')
  const amount = ref('')
  const txStatus = ref('')
  const txConfirmationCount = ref(0)
  const txHash = ref('')
  const spinner = ref(false)
  const waitForConfirmation = ref(false)
  const web3 = new Web3(ethereum)
  web3.eth.transactionConfirmationBlocks = txConfirmationBlocks

  const formattedAddress = computed(
    () =>
      address.value &&
      address.value.substring(0, 4) +
        '...' +
        address.value.substring(address.value.length - 4)
  )

  const formattedBalance = computed(() => {
    try {
      const [integer, decimal] = balance.value.split('.')

      return `${integer}.${decimal.substring(0, 4)}`
    } catch {
      return balance.value
    }
  })

  metamaskStore.$onAction(async ({ name, args, onError }) => {
    switch (name) {
      case 'handleChainChanged':
        await handleChainChanged()
        break
      case 'handleAccountsChanged':
        await handleAccountsChanged(args[0])
        break
    }

    onError((error: any) => {
      $toast.error(String(error?.message || error))
    })
  })

  onMounted(async () => {
    try {
      if (!hasMetamask) {
        throw new Error('You have to install Metamask to access this page.')
      }

      metamaskStore.startMetamaskEvents()
      const accounts = await provider.listAccounts()
      isConnected.value = accounts.length > 0
      isConnected.value && (await handleAccountsChanged(accounts))
    } catch (error) {
      $toast.error(String(error?.message || error))
    }
  })

  const connectWeb3 = async () => {
    try {
      spinner.value = true
      const accounts = await provider.listAccounts()
      isConnected.value = accounts.length > 0
      isConnected.value
        ? await handleAccountsChanged(accounts)
        : await provider.send('eth_requestAccounts', [])
      spinner.value = false
    } catch (error) {
      $toast.error(String(error?.message || error))
    }
  }

  const disconnectWeb3 = () => {
    isConnected.value = false
    resetUserDetails()
    $toast.success('Disconnected.')
  }

  const send = async () => {
    // import('web3')
    try {
      const validate = await observer.value.validate()
      if (!validate) {
        throw new Error(observer.value.errors.message[0])
      }

      if (spinner.value) {
        throw new Error('Wait until the current tx is finished.')
      }

      await web3.eth
        .sendTransaction({
          from: address.value,
          to: ownerAddress,
          value: ethers.utils.parseEther(amount.value).toHexString(),
        })
        .once('sent', handleTxSent)
        .once('sending', handleTxSending)
        .once('transactionHash', handleTxHash)
        .once('receipt', handleTxReceipt)
        .on('confirmation', handleTxConfirmation)
        .on('error', handleTxError)
    } catch (error) {
      if (error) {
        $toast.error(String(error?.message || error))
      }
    }
  }

  const handleTxSent = () => {
    spinner.value = true
    $toast.info('Transaction Status: Transaction sent to Metamask.')
  }

  const handleTxSending = () => {
    $toast.info('Transaction Status: Waiting to user confirm.')
  }

  const handleTxHash = (_txHash: string) => {
    txHash.value = _txHash
    txStatus.value = 'Awaiting transaction confirmation.'
    resetInputs()
    $toast.info('Transaction Status: Awaiting transaction confirmation.')
  }

  const handleTxReceipt = async () => {
    waitForConfirmation.value = true
    txStatus.value = 'Awaiting block confirmation.'
    $toast.success('Transaction Status: Awaiting block confirmation.')
    $toast.info('Thank You For Your Support! - @emretepedev')
    await updateUserBalance()
  }

  const handleTxConfirmation = (_txConfirmationCount: number) => {
    if (_txConfirmationCount && _txConfirmationCount < txConfirmationBlocks) {
      txConfirmationCount.value = _txConfirmationCount
      $toast.info('Confirmation Status: New block found.')
    }

    if (_txConfirmationCount >= txConfirmationBlocks) {
      txStatus.value = 'Confirmed.'
      resetTxDetails()
      $toast.success('Transaction Status: Confirmed.')
    }
  }

  const handleTxError = () => {
    txStatus.value = 'Failed.'
    resetTxDetails()
    $toast.error('Transaction Status: Failed.')
  }

  const handleChainChanged = async () => {
    await updateUserBalance()
    $toast.success('Chain has changed.')
  }

  const handleAccountsChanged = async (accounts: string[]) => {
    isConnected.value = accounts.length > 0
    isConnected.value ? await updateUserInfo(accounts[0]) : disconnectWeb3()
  }

  const updateUserInfo = async (address?: string) => {
    await updateUserAddress(address)
    await updateUserBalance()
  }

  const updateUserAddress = async (_address?: string) => {
    address.value = _address
      ? ethers.utils.getAddress(_address)
      : (await provider.listAccounts())[0]

    $toast.success(`Linked account changed to '${address.value}'`)
  }

  const updateUserBalance = async () => {
    balance.value = ethers.utils.formatEther(
      await provider.getBalance(address.value)
    )
  }

  const resetInputs = () => {
    observer.value.reset()
    amount.value = ''
  }

  const resetTxDetails = () => {
    txStatus.value = ''
    txHash.value = ''
    txConfirmationCount.value = 0
    waitForConfirmation.value = false
    spinner.value = false
  }

  const resetUserDetails = () => {
    address.value = ''
    balance.value = ''
  }

  const copyToAddress = async () => {
    try {
      await navigator.clipboard.writeText(address.value)
      $toast.success(`Address ${address.value} copied.`)
    } catch {}
  }
</script>
