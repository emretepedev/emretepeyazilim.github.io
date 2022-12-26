/* eslint-disable @typescript-eslint/no-unused-vars */
const { ethereum } = window as any

// TODO: only use store and use chain and address in components
export const useMetamaskStore = defineStore('metamask', {
  state: () => ({
    haveEventsStarted: false,
  }),

  actions: {
    startMetamaskEvents() {
      if (!this.haveEventsStarted) {
        this.haveEventsStarted = true
        ethereum.on('chainChanged', this.handleChainChanged)
        ethereum.on('accountsChanged', this.handleAccountsChanged)
      }
    },

    // TODO: try delete this params
    handleChainChanged(chainId: string) {},

    handleAccountsChanged(accounts: string[]) {},
  },
})
