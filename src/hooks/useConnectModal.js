import React, { useContext, useState } from "react"
import { ModalContext } from "../components/ModalProvider"
import { useWeb3React } from "@web3-react/core"

import {
  injected,
  walletConnect,
  walletLink,
} from "../components/wallet/connector"

export function useConnectModal() {
  const { visible, setModalContent, showModal, hideModal } =
    useContext(ModalContext)
  console.log("useConnectModal Init:", {
    visible,
    setModalContent,
    showModal,
    hideModal,
  })
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React()

  async function connect(provider) {
    try {
      switch (provider) {
        case "metamask":
          await activate(injected)
          break
        case "walletlink":
          await activate(walletLink)
          break
        default:
          await activate(injected)
          break
      }
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  function showConnectModal() {
    console.log({ visible, setModalContent, showModal, hideModal })

    setModalContent(
      <div
        style={{
          background: "rgb(2,0,36)",
          background: "linear-gradient(180deg, #0e131d, #060a10 30.65%)",
        }}
        class="w-50 h-50 p-14 rounded-2xl"
      >
        <h2 class="text-4xl text-white font-black mb-4">Connect Wallet</h2>
        <div class="flex flex-col">
          <button
            onClick={async () => {
              await connect("metamask")
              hideModal()
            }}
            className="flex items-center px-8 py-3 mb-4 text-lg font-bold rounded-lg text-white hover:bg-gray-800"
          >
            <img
              class="pr-4"
              height="50"
              width="50"
              alt=""
              src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
            />
            MetaMask
          </button>
          {/* <button
            onClick={async () => {
              await connect("walletlink")
              hideModal()
            }}
            className="flex items-center px-8 py-3 mb-4 text-lg font-bold rounded-lg text-white hover:bg-gray-800"
          >
            <img
              class="pr-4"
              height="50"
              width="50"
              alt=""
              src="https://avatars.githubusercontent.com/u/18060234?s=200&v=4"
            />
            Coinbase
          </button> */}
          <button
            onClick={async () => {
              await disconnect()
              hideModal()
            }}
            className="flex items-center px-8 py-3 mb-4 text-lg font-bold rounded-lg text-white hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
      </div>
    )
    showModal()
  }

  return { showConnectModal }
}
