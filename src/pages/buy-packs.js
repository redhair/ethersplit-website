import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/Button"
import QtyPicker from "../components/QtyPicker"
import { injected } from "../components/wallet/connector"
import { useConnectModal } from "../hooks/useConnectModal"
import { Modal, ModalContext } from "../components/ModalProvider"
import { useWeb3React } from "@web3-react/core"
import { useAccountBalances, getPricesForTokens } from "../hooks/wallet"
import StarterPackInterface from "../abis/StarterPack.json"
import packImage from "../images/booster_pack.png"

const BuyPage = ({ data }) => {
  const [starterPackQty, setStarterPackQty] = useState(1)
  const [boosterPackQty, setBoosterPackQty] = useState(1)
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React()
  console.log({ active, account, library, connector, activate, deactivate })
  console.log("BUY PACKS", { active, account, library, connector })
  const { showConnectModal } = useConnectModal()

  async function mint(qty) {
    try {
      console.log("minting:", qty, process.env.GATSBY_STARTERPACK_CONTRACT)
      const starterPackContract = await new library.eth.Contract(
        StarterPackInterface,
        process.env.GATSBY_STARTERPACK_CONTRACT
      )
      console.log({ starterPackContract })
      const res = await starterPackContract.methods
        .createStarterPack(qty)
        .send({ from: account })
      console.log({ res })
    } catch (err) {
      console.error(err)
    }

    return null
  }

  return (
    <Layout>
      <SEO title="Buy" />
      <h1 class="p-2 text-center font-bold text-white text-6xl">Buy Packs</h1>
      <p class="p-2 text-gray-400 text-center text-xl">
        Right now there are two packs available: Starterpacks and Booster packs.
        If you are a new player we highly reccommend buying a Starter Pack as it
        will give you everything you need to start playing the game. We also
        offer Booster Packs which are a great way to find cards with a higher
        rarity.
      </p>
      <section className="flex my-20">
        <div className="flex flex-col justify-between transition-all duration-250 ease-in-out rounded-xl border border-gray-600 py-4 m-4 hover:border-blue-500">
          <div className="px-4">
            <h2 className="text-white text-2xl font-bold mb-4">
              Starter Pack - 1st Edition
            </h2>
            <img
              src={packImage}
              className="rounded-lg mb-4 z-0"
              style="opacity: 1; position: relative;"
            />
            <div className="flex justify-between">
              <p className="text-yellow-500 font-bold text-base">1st Edition</p>
              <p className="text-gray-400 text-base font-normal">x438 Left</p>
            </div>
            <p className="text-white text-xl mt-2">
              <ul className="list-disc list-inside">
                <li>Mints 30 cards</li>
                <li>All cards are 1st edition</li>
                <li>Guarenteed 5 characters</li>
                <li>Guarenteed 5 spells</li>
                <li>Guarenteed 5 weapons</li>
              </ul>
            </p>
          </div>
          <div className="px-4">
            <h4 className="text-white font-bold text-2xl mb-2">Rarities</h4>
            <ul className="list-disc list-inside flex items-center flex-wrap">
              <li className="text-gray-400 font-bold mr-4">Common: 50%</li>
              <li className="text-green-500 font-bold mr-4">Uncommon: 25%</li>
              <li className="text-blue-600 font-bold mr-4">Rare: 12%</li>
              <li className="text-purple-600 font-bold mr-4">SuperRare: 5%</li>
              <li className="text-yellow-500 font-bold mr-4">Mystic: 1%</li>
            </ul>
          </div>
          <div>
            <QtyPicker max={10} onQtyChange={qty => {}} />
            <div className="border-t border-gray-600 px-4">
              <Button
                onClick={async () => {
                  console.log("in onClick:", { active, account })
                  if (active && account) {
                    await mint(starterPackQty)
                  } else {
                    showConnectModal()
                  }
                }}
                className="w-full mt-4"
              >
                Mint
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between transition-all duration-250 ease-in-out rounded-xl border border-gray-600 py-4 m-4 hover:border-blue-500">
          <div className="px-4">
            <h2 className="text-white text-2xl font-bold mb-4">
              Booster Pack - 1st Edition
            </h2>
            <img
              src={packImage}
              className="rounded-lg mb-4 z-0"
              style="opacity: 1; position: relative;"
            />
            <div className="flex justify-between">
              <p className="text-yellow-500 font-bold text-base">1st Edition</p>
              <p className="text-gray-400 text-base font-normal">x438 Left</p>
            </div>
            <p className="text-white text-xl mt-2">
              <ul className="list-disc list-inside">
                <li>Mints 8 cards</li>
                <li>All cards are 1st edition</li>
                <li>Higher rarity % on Rare, SuperRare and Mystic cards</li>
              </ul>
            </p>
          </div>
          <div className="px-4">
            <h4 className="text-white font-bold text-2xl mb-2">Rarities</h4>
            <ul className="list-disc list-inside flex items-center flex-wrap">
              <li className="text-gray-400 font-bold mr-4">Common: 50%</li>
              <li className="text-green-500 font-bold mr-4">Uncommon: 25%</li>
              <li className="text-blue-600 font-bold mr-4">Rare: 18%</li>
              <li className="text-purple-600 font-bold mr-4">SuperRare: 7%</li>
              <li className="text-yellow-500 font-bold mr-4">Mystic: 2%</li>
            </ul>
          </div>
          <div>
            <QtyPicker max={10} onQtyChange={qty => {}} />
            <div className="border-t border-gray-600 px-4">
              <Button
                onClick={async () => {
                  console.log({ active, account })
                  if (active && account) {
                    await mint(boosterPackQty)
                  } else {
                    showConnectModal()
                  }
                }}
                className="w-full mt-4"
              >
                Mint
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BuyPage
