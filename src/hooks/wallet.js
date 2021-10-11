import React, { useState, useEffect } from "react"
import { useWeb3React } from "@web3-react/core"
import StarterPackInterface from "../abis/StarterPack.json"
import BoosterPackInterface from "../abis/BoosterPack.json"

export function useAccountBalances() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React()
  console.log("useAccountBalances", {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
  })
  const [balances, setBalances] = useState([])

  useEffect(() => {
    if (!active || balances.length > 0) return

    async function getBalances() {
      const tokenAddresses = [
        {
          address: process.env.GATSBY_STARTERPACK_CONTRACT,
          abi: StarterPackInterface,
        },
        {
          address: process.env.GATSBY_BOOSTERPACK_CONTRACT,
          abi: BoosterPackInterface,
        },
      ]

      const balances = tokenAddresses.map(async t => {
        console.log({ t })
        const tokenInst = await new library.eth.Contract(t.abi, t.address)
        console.log("FETCHING BALANCE", { account })
        const balance = await tokenInst.methods.balanceOf(account).call()

        console.log({ tokenInst, balance })

        return balance
      })
      console.log({ balances })

      setBalances(balances)
    }

    getBalances()
  }, [active, library, account, balances])

  return {
    balances,
  }
}
