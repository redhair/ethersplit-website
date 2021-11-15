import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { useAccountBalances } from "../hooks/wallet"
import packImage from "../images/booster_pack.png"

const CollectionPage = ({ data }) => {
  const { balances } = useAccountBalances()
  console.log({ balances })

  return (
    <Layout>
      <SEO title="Collection" />

      <div>
        {balances.length > 0 &&
          balances.map(balance => {
            console.log({ balance })
            return (
              <div>
                <h1 className="text-white font-bold text-3x">{balance.name}</h1>
                <div className="flex flex-wrap">
                  {balance.amount > 0 &&
                    [...new Array(parseInt(balance.amount))].map(pack => {
                      return (
                        <img
                          className="mr-4 mb-4"
                          src={packImage}
                          width="200"
                          alt="pack"
                        />
                      )
                    })}
                </div>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export default CollectionPage
