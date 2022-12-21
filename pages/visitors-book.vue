<template>
  <div>
    <div class="flex justify-center">
      <v-container class="py-0">
        <div v-if="hasMetamask">
          <div v-if="onValidNetwork">
            <v-container
              class="box-border h-screen overflow-y-scroll scrollbar-thin scrollbar-track-dark-gray scrollbar-thumb-black scrollbar-track-rounded-full scrollbar-thumb-rounded-full"
              :class="$vuetify.breakpoint.mdAndDown ? 'pt-14' : ''"
            >
              <v-row
                align="end"
                :style="`padding-bottom: ${rowPaddingBottom}px`"
              >
                <v-col>
                  <v-alert
                    v-for="(message, index) in messages"
                    :key="index"
                    :ref="
                      index === messages.length - 1 ? 'lastMessageElement' : ''
                    "
                    :class="[
                      'break-all p-0',
                      message.author == address ? 'justify-end' : '',
                    ]"
                    shaped
                  >
                    <div class="flex">
                      <span
                        v-if="message.author == address"
                        class="relative flex flex-col items-end text-right"
                        ><div class="flex">
                          <span
                            :class="`relative my-auto mr-3 max-w-screen-sm text-left ${
                              $vuetify.breakpoint.smAndDown ? 'text-sm' : ''
                            }`"
                            >{{ message.content }}</span
                          >
                          <div class="group">
                            <v-img
                              class="rounded-full"
                              height="36"
                              :lazy-src="`https://robohash.org/${message.author}?size=8x8`"
                              :src="`https://robohash.org/${message.author}?bgset=bg1`"
                              width="36"
                              @click="copyToAddress(message.author)"
                            />
                            <div
                              class="invisible absolute -top-8 right-0 flex-col items-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:visible group-hover:opacity-100"
                            >
                              <span
                                class="relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg"
                              >
                                {{ message.author }}
                              </span>
                              <div
                                class="-mt-2 h-3 w-3 rotate-45 bg-black"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <span class="text-xs text-gray-400"
                          >({{
                            formatTimestampToDisplay(message.createdAt)
                          }})</span
                        >
                      </span>
                      <span
                        v-else
                        class="relative flex max-w-screen-sm flex-col"
                      >
                        <div class="flex">
                          <div class="group">
                            <v-img
                              class="rounded-full"
                              height="36"
                              :lazy-src="`https://robohash.org/${message.author}?size=8x8`"
                              :src="`https://robohash.org/${message.author}?bgset=bg1`"
                              width="36"
                              @click="copyToAddress(message.author)"
                            />
                            <div
                              class="invisible absolute -top-8 flex-col items-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:visible group-hover:opacity-100"
                            >
                              <span
                                class="relative z-10 bg-black p-2 text-xs leading-none text-white shadow-lg"
                              >
                                {{ message.author }}
                              </span>
                            </div>
                          </div>
                          <span
                            :class="`my-auto ml-3 ${
                              $vuetify.breakpoint.smAndDown ? 'text-sm' : ''
                            }`"
                            >{{ message.content }}</span
                          >
                        </div>
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
                    <ValidationObserver ref="observer" #default="{ invalid }">
                      <ValidationProvider
                        #default="{ errors }"
                        name="message"
                        :rules="{
                          required: true,
                        }"
                      >
                        <div class="align-center flex flex-row">
                          <v-textarea
                            ref="textField"
                            v-model="messageContent"
                            auto-grow
                            class="mx-4"
                            :clear-icon="mdiCloseCircle"
                            clearable
                            dense
                            :error-messages="errors"
                            hide-details
                            label="Message*"
                            maxlength="1024"
                            name="message"
                            no-resize
                            outlined
                            :placeholder="
                              isConnected
                                ? 'Your message'
                                : 'Connect to writing a message'
                            "
                            :prepend-inner-icon="mdiMessage"
                            :readonly="!isConnected"
                            rounded
                            rows="1"
                            shaped
                            :success="
                              !Object.keys(errors).length &&
                              Boolean(messageContent)
                            "
                            @keydown.enter.prevent
                            @keyup.enter="isConnected && !invalid && send()"
                          ></v-textarea>
                          <v-tooltip content-class="text-xs" top>
                            <template #activator="{ on }">
                              <v-btn
                                v-if="isConnected"
                                v-on-long-press="[
                                  onLongPressCallbackDirective,
                                  {
                                    delay: 1500,
                                    modifiers: {
                                      prevent: true,
                                    },
                                  },
                                ]"
                                class="p-0"
                                :disabled="spinner"
                                min-width="36"
                                outlined
                                rounded
                                shaped
                                v-on="on"
                                @click="send()"
                                @contextmenu.prevent
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
                                rounded
                                shaped
                                v-on="on"
                                @click="connectWeb3()"
                                @contextmenu.prevent
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
                            <div v-if="isConnected" class="text-center">
                              <div>Click to Send</div>
                              <div>
                                (Long touch or press Left/Right Click to
                                Disconnect)
                              </div>
                            </div>
                            <div v-else class="text-center">
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

<script setup lang="ts">
  import Web3 from 'web3'
  import { mdiCloseCircle, mdiConnection, mdiMessage, mdiSend } from '@mdi/js'
  import { ValidationObserver, ValidationProvider } from 'vee-validate'
  import type { AbiItem } from 'web3-utils'
  import type { Contract, EventData } from 'web3-eth-contract'
  import { vOnLongPress } from '@vueuse/components'
  import visitorsBookContractAbi from '@/data/abi/visitorsBook.json'

  interface Message {
    author: string
    createdAt: string
    content: string
  }

  useNuxt2Meta({
    title: "Visitor's Book | ",
  })

  const metamaskStore = useMetamaskStore()
  const { $vToastify, $moment, $config } = useNuxtApp()
  const observer = ref(null)
  const textField = ref(null)
  const rowPaddingBottom = ref(0)
  const {
    visitorsBookContractAddress,
    visitorsBookContractChainId,
    visitorsBookContractChainName,
  } = $config.public
  let visitorsBookContract: Contract
  const { ethereum } = window as any
  const hasMetamask = Boolean(ethereum)
  const onValidNetwork = ref(
    hasMetamask && ethereum.chainId === visitorsBookContractChainId
  )
  const isConnected = ref(false)
  const address = ref('')
  const spinner = ref(false)
  const messageContent = ref('')
  const messages = ref<Message[]>([])
  const lastMessageElement = ref(null)
  const contractMessageSentEventEmitter = ref(false)
  const textFieldResizeObserver = ref(false)
  const web3 = new Web3(ethereum)

  onMounted(async () => {
    try {
      if (!hasMetamask) {
        throw new Error('You have to install Metamask to access this page.')
      }

      metamaskStore.startMetamaskEvents()
      onValidNetwork.value && (await getContractData())
      const accounts = await web3.eth.getAccounts()
      isConnected.value = accounts.length > 0
      isConnected.value && (await handleAccountsChanged(accounts))
    } catch (error) {
      $vToastify.error(String(error?.message))
    }
  })

  watch(
    () => metamaskStore.chainId,
    async (newChainId) => await handleChainChanged(newChainId)
  )

  watch(
    () => metamaskStore.accounts,
    async (newAccounts) => await handleAccountsChanged(newAccounts)
  )

  const onLongPressCallbackDirective = (e: PointerEvent) => {
    isConnected && disconnectWeb3()
  }

  const connectWeb3 = async () => {
    try {
      spinner.value = true
      const accounts = await web3.eth.getAccounts()
      isConnected.value = accounts.length > 0
      isConnected.value
        ? await handleAccountsChanged(accounts)
        : await web3.eth.requestAccounts()
      spinner.value = false
    } catch (error) {
      spinner.value = false
      $vToastify.error(String(error?.message))
    }
  }

  const switchNetwork = async () => {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: visitorsBookContractChainId,
          },
        ],
      })
    } catch (error) {
      $vToastify.error(String(error?.message))
    }
  }

  const getContractData = async () => {
    try {
      visitorsBookContract = new web3.eth.Contract(
        visitorsBookContractAbi as AbiItem[],
        visitorsBookContractAddress
      )

      const visitorsBookMessages: Message[] = await visitorsBookContract.methods
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
        contractMessageSentEventEmitter.value = true
        visitorsBookContract.events.MessageSent().on('data', handleMessageSent)
      }

      if (!textFieldResizeObserver.value) {
        textFieldResizeObserver.value = true

        new ResizeObserver(handleTextFieldResize).observe(
          textField.value?.$refs.input
        )
      }

      scrollToLastMessage()
    } catch (error) {
      if (!error?.message.includes('ResizeObserver')) {
        $vToastify.error(String(error?.message))
      }
    }
  }

  const send = async () => {
    try {
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
    if (messages.value.length) {
      let tries = 0
      const frequency = 1000 / 10 // 0.1 sec
      const maxTries = (1000 / frequency) * 10 // 10 secs

      if (!lastMessageElement.value) {
        const getLastMessageInterval = setInterval(() => {
          if (Boolean(lastMessageElement.value) || tries === maxTries) {
            clearInterval(getLastMessageInterval)

            if (tries === maxTries) {
              return
            }

            setTimeout(function () {
              lastMessageElement.value[0]?.$el?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }, 250)
          }
          tries++
        }, frequency)
      } else {
        setTimeout(function () {
          lastMessageElement.value[0]?.$el?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 250)
      }
    }
  }

  const disconnectWeb3 = () => {
    isConnected.value = false
    resetUserDetails()
    $vToastify.success('Disconnected.')
  }

  const handleTxSent = () => {
    spinner.value = true
    $vToastify.info('Transaction Status: Transaction sent to Metamask.')
  }

  const handleTxSending = () => {
    $vToastify.info('Transaction Status: Waiting to user confirm.')
  }

  const handleTxHash = (txHash: string) => {
    $vToastify.info(
      'Transaction Status: Awaiting transaction confirmation.\n' +
        `Tx Hash: ${txHash}`
    )
  }

  const handleTxReceipt = () => {
    resetInputs()
    $vToastify.success('Thank you for your message! - @emretepedev')
  }

  const handleTxError = () => {
    spinner.value = false
    $vToastify.error('Transaction Status: Failed.')
  }

  const handleChainChanged = async (chainId: string) => {
    if (chainId !== visitorsBookContractChainId) {
      onValidNetwork.value = false
      lastMessageElement.value = null
    } else {
      onValidNetwork.value = true
      await getContractData()
    }

    $vToastify.success('Chain has changed.')
  }

  const handleAccountsChanged = async (accounts: string[]) => {
    isConnected.value = accounts.length > 0
    isConnected.value ? await updateUserInfo(accounts[0]) : disconnectWeb3()
  }

  const handleMessageSent = (event: EventData) => {
    const message = event.returnValues[0]

    messages.value.push({
      author: message.author,
      createdAt: message.createdAt,
      content: message.content,
    })

    if (message.author === address.value) {
      scrollToLastMessage()
    }

    $vToastify.success(`New message received from ${message.author}.`)
  }

  const updateUserInfo = async (address?: string) => {
    await updateUserAddress(address)
  }

  const updateUserAddress = async (_address?: string) => {
    address.value = _address
      ? web3.utils.toChecksumAddress(_address)
      : (await web3.eth.getAccounts())[0]

    $vToastify.success(`Linked account changed to '${address.value}'`)
  }

  const resetInputs = () => {
    messageContent.value = ''
    spinner.value = false
    observer.value.reset()
  }

  const formatTimestampToDisplay = (timestamp: number | string) => {
    return $moment.unix(timestamp as number).format('MM/DD/YY - HH:mm A')
  }

  const resetUserDetails = () => {
    address.value = ''
  }

  const copyToAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address)
      $vToastify.success(`Address ${address} copied.`)
    } catch {}
  }

  const handleTextFieldResize = (
    resizeObserverEntries: ResizeObserverEntry[]
  ) => {
    rowPaddingBottom.value = resizeObserverEntries[0].contentRect.height
  }
</script>

<script lang="ts">
  export default {
    layout: 'footerless',
  }
</script>
