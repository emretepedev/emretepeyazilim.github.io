<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <div v-if="provider">
          <div v-if="isConnected">
            <v-input disabled>{{ formatAddressToDisplay(address) }}</v-input>
            <v-input disabled>{{ formatBalanceToDisplay(balance) }}</v-input>
            <validation-observer ref="observer" v-slot="{ invalid }">
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
                ></v-text-field>
              </validation-provider>
              <v-btn :disabled="invalid" @click="send">Send anything</v-btn>
            </validation-observer>
            <v-btn @click="disconnectWeb3">Disconnect to Metamask</v-btn>
            <div v-if="txHash">Transaction Hash: {{ txHash }}</div>
            <div v-if="txStatus">Status: {{ txStatus }}</div>
            <div v-if="confirmationCount">
              Confirmation Progress: {{ confirmationCount }}/{{
                totalConfirmationCount
              }}
            </div>
          </div>
          <div v-else>
            <v-btn @click="getUserInfo"> Connect to Metamask </v-btn>
          </div>
        </div>
        <div v-else>
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
    const provider = ref(null)
    let web3 = null
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
    const getUserInfo = async () => {
      // if No web3 provider
      if (!provider.value) {
        $vToastify.error('No web3 provider detected.')

        return
      }

      try {
        // Ask to connect
        await web3.eth.requestAccounts()
        address.value = await web3.eth.getCoinbase()
        balance.value = await web3.eth.getBalance(address.value)

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
        .on('receipt', () => {
          txStatus.value = 'Awaiting block confirmation.'
          $vToastify.success('Transaction Status: Awaiting block confirmation.')
          $vToastify.info('Thank You For Your Support!')
          resetInputs()
        })
        .on('confirmation', (_confirmationCount) => {
          totalConfirmationCount.value = web3.eth.transactionConfirmationBlocks
          confirmationCount.value = _confirmationCount
          $vToastify.info('Confirmation Status: New block found.')

          if (
            web3.eth.transactionConfirmationBlocks - _confirmationCount ===
            0
          ) {
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
      return (balance / 10 ** 18).toFixed(6)
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
      getUserInfo,
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
</style>
