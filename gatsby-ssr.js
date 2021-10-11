import loadable from "@loadable/component"
import React from "react"
import { ModalProvider } from "./src/components/ModalProvider"
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
    <ModalProvider>{element}</ModalProvider>
  </Web3ReactProvider>
)
