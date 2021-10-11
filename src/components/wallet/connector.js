import { InjectedConnector } from "@web3-react/injected-connector"
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { WalletLinkConnector } from "@web3-react/walletlink-connector"

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

// export const walletConnect = new WalletConnectConnector({
//   supportedChainIds: [1, 3, 4, 5, 42],
// })

export const walletLink = new WalletLinkConnector({
  url: "https://rinkeby.infura.io/v3/f5212f6616b7498ca1d1d53576c345a8",
  supportedChainIds: [1, 3, 4, 5, 42],
  appName: "EtherSplit",
})
