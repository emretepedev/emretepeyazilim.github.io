const { ethereum } = window as any

export const useMetamaskStore = defineStore('metamask', {
  state: () => ({
    haveEventsStarted: false,
    chainId: '',
    accounts: [],
  }),

  actions: {
    startMetamaskEvents() {
      if (!this.haveEventsStarted) {
        this.haveEventsStarted = true
        ethereum.on('chainChanged', this.handleChainChanged)
        ethereum.on('accountsChanged', this.handleAccountsChanged)
      }
    },

    handleChainChanged(chainId: string) {
      this.chainId = chainId
    },

    handleAccountsChanged(accounts: string[]) {
      this.accounts = accounts
    },
  },
})
