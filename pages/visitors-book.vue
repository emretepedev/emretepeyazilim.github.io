<template>
  <div>
    <div class="flex justify-center">
      <v-container class="py-0">
        <div v-if="provider">
          <div v-if="isConnected">
            <v-container
              ref="visitorsBook"
              class="box-border h-screen overflow-scroll pt-10 pb-20"
            >
              <v-row align="end" class="pb-14">
                <v-col>
                  <div
                    v-for="(message, index) in messages"
                    :key="index"
                    :class="[
                      'd-flex align-center m-2 flex-row break-all',
                      message.author == address ? 'justify-end' : '',
                    ]"
                  >
                    <span v-if="message.author == address"
                      ><span class="text-xs text-gray-400"
                        >({{
                          formatTimestampToDisplay(message.createdAt)
                        }}) </span
                      ><span
                        :class="`blue--text mr-3 ${
                          $vuetify.breakpoint.smAndDown ? 'text-sm' : ''
                        }`"
                        >{{ message.content }}</span
                      ></span
                    >
                    <v-tooltip bottom content-class="text-xs">
                      <template #activator="{ on, attrs }">
                        <v-img
                          v-bind="attrs"
                          :lazy-src="`https://robohash.org/${message.author}?size=8x8`"
                          max-height="32"
                          max-width="32"
                          :src="`https://robohash.org/${message.author}?bgset=bg1`"
                          v-on="on"
                          @click="copyText(address)"
                        >
                        </v-img>
                      </template>
                      <span>
                        {{ message.author }}
                      </span>
                    </v-tooltip>
                    <span v-if="message.author != address">
                      <span
                        :class="`blue--text ml-3 ${
                          $vuetify.breakpoint.smAndDown ? 'text-sm' : ''
                        }`"
                        >{{ message.content }}</span
                      >
                      <span class="text-xs text-gray-400">
                        ({{ formatTimestampToDisplay(message.createdAt) }})
                      </span>
                    </span>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <v-footer class="fixed bottom-0 left-0 right-0">
              <v-container>
                <v-row no-gutters>
                  <v-col>
                    <ValidationObserver ref="observer" v-slot="{ invalid }">
                      <ValidationProvider
                        v-slot="{ errors }"
                        name="message"
                        :rules="{
                          required: true,
                        }"
                      >
                        <div class="d-flex align-center flex-row">
                          <v-text-field
                            v-model="messageContent"
                            class="mx-4"
                            dense
                            :error-messages="errors"
                            hide-details
                            label="Message"
                            name="message"
                            outlined
                            placeholder="Your message"
                            :prepend-inner-icon="mdiMessage"
                            rounded
                            shaped
                            :success="
                              !Boolean(Object.keys(errors).length) &&
                              Boolean(messageContent)
                            "
                            @keyup.enter="send"
                          ></v-text-field>
                          <v-btn
                            class="p-0"
                            :disabled="invalid || spinner"
                            min-width="36"
                            outlined
                            rounded
                            shaped
                            @click="send"
                            ><svg
                              v-if="spinner"
                              class="h-9 w-9 animate-spin text-white"
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
                            <v-icon v-else>{{ mdiSend }}</v-icon>
                          </v-btn>
                        </div>
                      </ValidationProvider>
                    </ValidationObserver>
                  </v-col>
                </v-row>
              </v-container>
            </v-footer>
          </div>
          <div v-else class="flex items-center justify-center">
            <v-btn @click="connectWeb3">Connect to Metamask</v-btn>
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
  import { mdiMessage, mdiSend } from '@mdi/js'
  import moment from 'moment'
  import 'moment-timezone'
  import { ValidationObserver, ValidationProvider } from 'vee-validate'
  import visitorsBookContractAbi from '~/data/abi/visitorsBook'

  export default defineComponent({
    // components
    components: {
      ValidationProvider,
      ValidationObserver,
    },

    // layout
    layout: 'footerless',

    // setup
    setup() {
      // meta
      useMeta({
        title: "Visitor's Book | ",
      })

      // context
      const { $config } = useContext()

      // root variables
      const { $vToastify } = getCurrentInstance().proxy

      // refs
      const observer = ref(null)
      const visitorsBook = ref(null)

      // envs
      const { visitorsBookContractAddress } = $config

      // constants
      let web3
      let visitorsBookContract
      const provider = ref(null)
      const isConnected = ref(false)
      const address = ref(null)
      const balance = ref(0)
      const spinner = ref(false)
      const messageContent = ref('')
      const messages = ref([])

      // hooks
      onMounted(async () => {
        await setProvider()

        if (provider.value) {
          web3 = new Web3(provider.value)

          visitorsBookContract = new web3.eth.Contract(
            visitorsBookContractAbi,
            visitorsBookContractAddress
          )

          const visitorsBookMessages = await visitorsBookContract.methods
            .getMessages()
            .call()

          for (const message of visitorsBookMessages) {
            messages.value.push({
              author: message.author.toLowerCase(),
              createdAt: message.createdAt,
              content: message.content,
            })
          }

          visitorsBookContract.events
            .MessageSent()
            .on('data', handleMessageSent)

          const accounts = await web3.eth.getAccounts()
          if (accounts.length > 0) await connect()

          scrollVisitorsBookDown()
        }
      })

      // methods
      const connectWeb3 = async () => {
        try {
          // if No web3 provider
          if (!provider.value) {
            throw new Error('No web3 provider detected.')
          }

          // Ask to connect
          await web3.eth.requestAccounts()

          await connect()

          $vToastify.success('Connected.')
        } catch (error) {
          // User denied account access
          $vToastify.error(String(error.message))
        }
      }

      const connect = async () => {
        // get address, balance etc.
        await updateUserInfo()

        // Check connecting
        isConnected.value =
          (await web3.eth.net.isListening()) && provider.value.isConnected()

        if (!isConnected.value) {
          throw new Error('Connection Error.')
        }

        // started eth events
        await startEthEvents()
      }

      const send = async () => {
        try {
          // validate
          const validate = await observer.value.validate()

          if (!validate) {
            throw new Error(observer.value.errors.message[0])
          }

          if (spinner.value) {
            throw new Error('Wait until the current tx is finished.')
          }

          await visitorsBookContract.methods
            .sendMessage(messageContent.value)
            .send({ from: address.value })
            .once('sent', handleTxSent)
            .once('sending', handleTxSending)
            .once('transactionHash', handleTxHash)
            .once('receipt', handleTxReceipt)
            .on('error', handleTxError)
        } catch (error) {
          if (error) {
            $vToastify.error(String(error?.message))
          }
        }
      }

      const scrollVisitorsBookDown = () => {
        visitorsBook.value.scrollTop = visitorsBook.value.scrollHeight
      }

      const disconnectWeb3 = async () => {
        // reset events
        await stopEthEvents()

        // set false to `isConnected`
        isConnected.value = false

        $vToastify.success('Disconnected.')
      }

      // Start eth events
      const startEthEvents = () => {
        provider.value.on('chainChanged', handleChainChanged)
        provider.value.on('accountsChanged', handleAccountsChanged)
        provider.value.on('disconnect', handleDisconnect)
      }

      // Stop eth events
      const stopEthEvents = () => {
        provider.value.removeListener('chainChanged', handleChainChanged)
        provider.value.removeListener('accountsChanged', handleAccountsChanged)
      }

      // tx prepare event
      const handleTxSent = () => {
        spinner.value = true
        $vToastify.info('Transaction Status: Transaction sent to Metamask.')
      }

      // tx before create event
      const handleTxSending = () => {
        $vToastify.info('Transaction Status: Waiting to user confirm.')
      }

      // tx created event
      const handleTxHash = (_txHash) => {
        resetInputs()
        $vToastify.info(
          'Transaction Status: Awaiting transaction confirmation.\n' +
            `Tx Hash: ${_txHash}`
        )
      }

      // tx created successfully event
      const handleTxReceipt = async () => {
        $vToastify.success('Thank you for your message! - @emretepedev')
        resetInputs()
        await updateUserBalance()
      }

      // tx error event
      const handleTxError = () => {
        spinner.value = false
        $vToastify.error('Transaction Status: Failed.')
      }

      // eth change chain event
      const handleChainChanged = async () => {
        await updateUserBalance()
        $vToastify.success('Chain has changed.')
      }

      // eth change account event
      const handleAccountsChanged = async (_accounts) => {
        if (_accounts.length > 0) {
          await updateUserInfo(_accounts[0].toLowerCase())

          $vToastify.success(`Linked account changed to '${_accounts[0]}'`)
        } else {
          await disconnectWeb3()
        }
      }

      // eth disconnect event
      const handleDisconnect = async () => {
        await stopEthEvents()

        isConnected.value = false
      }

      // visitor's book MessageSent event
      const handleMessageSent = (event) => {
        const message = event.returnValues[0]

        messages.value.push({
          author: message.author.toLowerCase(),
          createdAt: message.createdAt,
          content: message.content,
        })

        scrollVisitorsBookDown()
      }

      // Set for web3 provider
      const setProvider = async () => {
        provider.value = await detectEthereumProvider({
          mustBeMetaMask: true,
          silent: true,
          timeout: 3000,
        })
      }

      // get user address and balance
      const updateUserInfo = async (_address = null) => {
        await updateUserAddress(_address)
        await updateUserBalance()
      }

      // get user address
      const updateUserAddress = async (_address = null) => {
        address.value =
          _address || (await web3.eth.getAccounts())[0].toLowerCase()
      }

      // get user address
      const updateUserBalance = async () => {
        balance.value = web3.utils.fromWei(
          await web3.eth.getBalance(address.value),
          'ether'
        )
      }

      // removed fields and reset validate
      const resetInputs = () => {
        messageContent.value = ''
        spinner.value = false
        observer.value.reset()
      }

      // address value formatted to user
      const formatAddressToDisplay = (_address, charCount = 4) => {
        return (
          _address.substring(0, charCount) +
          '...' +
          _address.substring(_address.length - charCount)
        )
      }

      // timestamp value formatted to user
      const formatTimestampToDisplay = (timestamp) => {
        return moment.unix(timestamp).tz('UTC').format('MM/DD/YY - HH:mm A')
      }

      // balance value formatted to user
      const formatBalanceToDisplay = (_balance) => {
        return (+_balance).toFixed(6)
      }

      // copy to clipboard
      const copyText = async (_text) => {
        try {
          await navigator.clipboard.writeText(_text)
          $vToastify.success('Copied')
        } catch (error) {
          // suppressed error
        }
      }

      // return
      return {
        provider,
        isConnected,
        address,
        balance,
        observer,
        spinner,
        copyText,
        connectWeb3,
        disconnectWeb3,
        formatBalanceToDisplay,
        formatTimestampToDisplay,
        formatAddressToDisplay,
        send,
        messageContent,
        messages,
        visitorsBook,
        mdiSend,
        mdiMessage,
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
