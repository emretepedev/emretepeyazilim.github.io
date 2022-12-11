<template>
  <div>
    <div class="flex justify-center">
      <v-container class="py-0">
        <div v-if="hasMetamask">
          <div v-if="onValidNetwork">
            <v-container class="box-border h-screen overflow-scroll pt-10 pb-2">
              <v-row align="end" class="pb-10">
                <v-col>
                  <v-alert
                    v-for="(message, index) in messages"
                    :key="index"
                    :ref="
                      index === messages.length - 1 ? 'lastMessageElement' : ''
                    "
                    :class="[
                      'm-2 break-all',
                      message.author == address ? 'justify-end' : '',
                    ]"
                    shaped
                  >
                    <div class="flex">
                      <span
                        v-if="message.author == address"
                        class="flex flex-col items-end text-right"
                        ><span
                          :class="`blue--text mr-3 max-w-lg text-left ${
                            $vuetify.breakpoint.smAndDown ? 'text-sm' : ''
                          }`"
                          >{{ message.content }}</span
                        ><span class="text-xs text-gray-400"
                          >({{
                            formatTimestampToDisplay(message.createdAt)
                          }})</span
                        >
                      </span>
                      <v-tooltip bottom content-class="text-xs">
                        <template #activator="{ on, attrs }">
                          <v-img
                            v-bind="attrs"
                            class="rounded-full"
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
                      <span
                        v-if="message.author != address"
                        class="flex max-w-lg flex-col"
                      >
                        <span
                          :class="`blue--text ml-3 ${
                            $vuetify.breakpoint.smAndDown ? 'text-sm' : ''
                          }`"
                          >{{ message.content }}</span
                        >
                        <span class="text-right text-xs text-gray-400">
                          ({{ formatTimestampToDisplay(message.createdAt) }})
                        </span>
                      </span>
                    </div>
                  </v-alert>
                </v-col>
              </v-row>
            </v-container>
            <v-footer class="fixed bottom-0 left-0 right-0 p-0">
              <v-container class="px-2 py-1">
                <v-row no-gutters>
                  <v-col>
                    <ValidationObserver ref="observer">
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
                            @keyup.enter="send()"
                          ></v-text-field>
                          <v-tooltip content-class="text-xs" top>
                            <template #activator="{ on, attrs }">
                              <v-btn
                                v-if="isConnected"
                                v-longclick="
                                  () => isConnected && disconnectWeb3()
                                "
                                class="p-0"
                                :disabled="spinner"
                                min-width="36"
                                outlined
                                rounded
                                v-bind="attrs"
                                shaped
                                v-on="on"
                                @click="send()"
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
                                <v-icon v-else class="pl-1">{{
                                  mdiSend
                                }}</v-icon>
                              </v-btn>
                              <v-btn
                                v-else
                                class="p-0"
                                :disabled="spinner"
                                min-width="36"
                                outlined
                                v-bind="attrs"
                                rounded
                                shaped
                                v-on="on"
                                @click="connectWeb3()"
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
                                <v-icon v-else>{{ mdiConnection }}</v-icon>
                              </v-btn>
                            </template>
                            <div v-if="isConnected">
                              <div class="text-center">Click to Send</div>
                              <div>(Long press to Disconnect)</div>
                            </div>
                            <div v-else>
                              <div>Click to Connect</div>
                            </div>
                          </v-tooltip>
                        </div>
                      </ValidationProvider>
                    </ValidationObserver>
                  </v-col>
                </v-row>
              </v-container>
            </v-footer>
          </div>
          <div v-else class="mt-20 flex items-center justify-center">
            <v-btn @click="switchNetwork()"
              >Switch Network to {{ visitorsBookContractChainName }}</v-btn
            >
          </div>
        </div>
        <div v-else class="mt-20 flex items-center justify-center">
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
  import { mdiConnection, mdiMessage, mdiSend } from '@mdi/js'
  import moment from 'moment'
  import 'moment-timezone'
  import { ValidationObserver, ValidationProvider } from 'vee-validate'
  import visitorsBookContractAbi from '~/data/abi/visitorsBook'

  export default defineComponent({
    components: {
      ValidationProvider,
      ValidationObserver,
    },

    layout: 'footerless',

    setup() {
      useMeta({
        title: "Visitor's Book | ",
      })

      const { $config } = useContext()
      const { $vToastify } = getCurrentInstance().proxy
      const observer = ref(null)
      const {
        visitorsBookContractAddress,
        visitorsBookContractChainId,
        visitorsBookContractChainName,
      } = $config
      let web3
      let visitorsBookContract
      const provider = ref(null)
      const hasMetamask = ref(false)
      const onValidNetwork = ref(false)
      const isConnected = ref(false)
      const address = ref(null)
      const balance = ref(0)
      const spinner = ref(false)
      const messageContent = ref('')
      const messages = ref([])
      const lastMessageElement = ref(null)
      const contractMessageSentEventEmitter = ref(null)

      onMounted(async () => {
        await setProvider()

        if (hasMetamask.value) {
          web3 = new Web3(provider.value)

          const accounts = await web3.eth.getAccounts()
          if (accounts.length > 0) await connect()

          onValidNetwork.value =
            // eslint-disable-next-line
            web3.currentProvider.chainId == visitorsBookContractChainId

          if (onValidNetwork.value) {
            await getContractData()
          }
        }
      })

      const connectWeb3 = async () => {
        try {
          spinner.value = true
          await web3.eth.requestAccounts()
          await connect()
          spinner.value = false
          $vToastify.success('Connected.')
        } catch (error) {
          spinner.value = false
          $vToastify.error(String(error.message))
        }
      }

      const switchNetwork = async () => {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [
              {
                chainId:
                  '0x' + Number(visitorsBookContractChainId).toString(16),
              },
            ],
          })
        } catch (error) {
          $vToastify.error(String(error.message))
        }
      }

      const getContractData = async () => {
        try {
          onValidNetwork.value = true

          visitorsBookContract = new web3.eth.Contract(
            visitorsBookContractAbi,
            visitorsBookContractAddress
          )

          const visitorsBookMessages = await visitorsBookContract.methods
            .getMessages()
            .call()

          messages.value = []
          for (const message of visitorsBookMessages) {
            messages.value.push({
              author: message.author,
              createdAt: message.createdAt,
              content: message.content,
            })
          }

          if (!contractMessageSentEventEmitter.value) {
            contractMessageSentEventEmitter.value = visitorsBookContract.events
              .MessageSent()
              .on('data', handleMessageSent)
          }

          scrollToLastMessage()
        } catch (error) {
          $vToastify.error(String(error.message))
        }
      }

      const connect = async () => {
        await updateUserInfo()

        isConnected.value =
          (await web3.eth.net.isListening()) && provider.value.isConnected()

        if (!isConnected.value) {
          throw new Error('Connection Error.')
        }

        await startEthEvents()
      }

      const send = async () => {
        try {
          if (!isConnected.value) {
            await connectWeb3()
          }

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

      const scrollToLastMessage = () => {
        if (messages.length) {
          let tries = 0
          const frequency = 1000 / 10 // 0.1 sec
          const maxTries = (1000 / frequency) * 10 // 10 secs

          if (!lastMessageElement.value) {
            const getLastMessageInterval = setInterval(() => {
              if (Boolean(lastMessageElement.value) || tries === maxTries) {
                clearInterval(getLastMessageInterval)

                if (tries === maxTries) {
                  $vToastify.error('Something went wrong.')

                  return
                }

                lastMessageElement.value[0].$el.scrollIntoView({
                  behavior: 'smooth',
                })
              }
              tries++
            }, frequency)
          } else {
            lastMessageElement.value[0].$el.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest',
            })
          }
        }
      }

      const disconnectWeb3 = async () => {
        spinner.value = true
        await stopEthEvents()
        address.value = null
        balance.value = null
        isConnected.value = false
        $vToastify.success('Disconnected.')
        spinner.value = false
      }

      const startEthEvents = () => {
        provider.value.on('chainChanged', handleChainChanged)
        provider.value.on('accountsChanged', handleAccountsChanged)
        provider.value.on('disconnect', handleDisconnect)
      }

      const stopEthEvents = () => {
        provider.value.removeListener('chainChanged', handleChainChanged)
        provider.value.removeListener('accountsChanged', handleAccountsChanged)
      }

      const handleTxSent = () => {
        spinner.value = true
        $vToastify.info('Transaction Status: Transaction sent to Metamask.')
      }

      const handleTxSending = () => {
        $vToastify.info('Transaction Status: Waiting to user confirm.')
      }

      const handleTxHash = (_txHash) => {
        $vToastify.info(
          'Transaction Status: Awaiting transaction confirmation.\n' +
            `Tx Hash: ${_txHash}`
        )
      }

      const handleTxReceipt = async () => {
        $vToastify.success('Thank you for your message! - @emretepedev')
        resetInputs()
        await updateUserBalance()
      }

      const handleTxError = () => {
        spinner.value = false
        $vToastify.error('Transaction Status: Failed.')
      }

      const handleChainChanged = async (chainId) => {
        // eslint-disable-next-line
        if (chainId != visitorsBookContractChainId) {
          onValidNetwork.value = false
          lastMessageElement.value = null
        } else {
          await getContractData()
        }

        await updateUserBalance()
        $vToastify.success('Chain has changed.')
      }

      const handleAccountsChanged = async (_accounts) => {
        if (_accounts.length > 0) {
          await updateUserInfo(_accounts[0])

          $vToastify.success(`Linked account changed to '${_accounts[0]}'`)
        } else {
          await disconnectWeb3()
        }
      }

      const handleDisconnect = async () => {
        await disconnectWeb3()
      }

      const handleMessageSent = (event) => {
        const message = event.returnValues[0]

        messages.value.push({
          author: message.author,
          createdAt: message.createdAt,
          content: message.content,
        })

        scrollToLastMessage()
      }

      const setProvider = async () => {
        provider.value = await detectEthereumProvider({
          mustBeMetaMask: true,
          silent: true,
          timeout: 3000,
        })

        hasMetamask.value = Boolean(provider.value)
      }

      const updateUserInfo = async (_address = null) => {
        await updateUserAddress(_address)
        await updateUserBalance()
      }

      const updateUserAddress = async (_address = null) => {
        address.value = _address
          ? web3.utils.toChecksumAddress(_address)
          : (await web3.eth.getAccounts())[0]
      }

      const updateUserBalance = async () => {
        balance.value = web3.utils.fromWei(
          await web3.eth.getBalance(address.value),
          'ether'
        )
      }

      const resetInputs = () => {
        messageContent.value = ''
        spinner.value = false
        observer.value.reset()
      }

      const formatAddressToDisplay = (_address, charCount = 4) => {
        return (
          _address.substring(0, charCount) +
          '...' +
          _address.substring(_address.length - charCount)
        )
      }

      const formatTimestampToDisplay = (timestamp) => {
        return moment.unix(timestamp).tz('UTC').format('MM/DD/YY - HH:mm A')
      }

      const formatBalanceToDisplay = (_balance) => {
        return (+_balance).toFixed(6)
      }

      const copyText = async (_text) => {
        try {
          await navigator.clipboard.writeText(_text)
          $vToastify.success('Copied')
        } catch {}
      }

      return {
        hasMetamask,
        onValidNetwork,
        isConnected,
        address,
        balance,
        observer,
        spinner,
        lastMessageElement,
        copyText,
        connectWeb3,
        disconnectWeb3,
        formatBalanceToDisplay,
        formatTimestampToDisplay,
        formatAddressToDisplay,
        send,
        switchNetwork,
        messageContent,
        messages,
        visitorsBookContractChainName,
        mdiSend,
        mdiMessage,
        mdiConnection,
      }
    },

    head: {},
  })
</script>
