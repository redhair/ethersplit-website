import React from "react"
import { ModalProvider } from "./src/components/ModalProvider"
import MetaMaskProvider from "./src/components/MetaMaskProvider"
import { Web3ReactProvider } from "@web3-react/core"
import Web3 from "web3"

function getLibrary(provider) {
  return new Web3(provider)
}

// highlight-start
export const wrapRootElement = ({ element }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <ModalProvider>
      <MetaMaskProvider>{element}</MetaMaskProvider>
    </ModalProvider>
  </Web3ReactProvider>
)
