import loadable from "@loadable/component"
import React from "react"
import { ModalProvider } from "./src/components/ModalProvider"
import MetamaskProvider from "./src/components/MetaMaskProvider"

const Web3ReactProvider = loadable(() => import("@web3-react/core"), {
  resolveComponent: components => components.Web3ReactProvider,
})
const Web3 = loadable(() => import("web3"))

function getLibrary(provider) {
  return new Web3(provider)
}

// highlight-start
export const wrapRootElement = ({ element }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <ModalProvider>
      <MetamaskProvider>{element}</MetamaskProvider>
    </ModalProvider>
  </Web3ReactProvider>
)
