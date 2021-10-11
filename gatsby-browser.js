import React from "react"
import { ModalProvider } from "./src/components/ModalProvider"
import { Web3ReactProvider } from "@web3-react/core"
import Web3 from "web3"

function getLibrary(provider) {
  return new Web3(provider)
}

// highlight-start
export const wrapRootElement = ({ element }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <ModalProvider>{element}</ModalProvider>
  </Web3ReactProvider>
)
