import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { useAccountBalances } from "../hooks/wallet"

const CollectionPage = ({ data }) => {
  const { balances } = useAccountBalances()
  console.log({ balances })
  return (
    <Layout>
      <SEO title="Collection" />
      <h1 class="p-2 text-center text-5xl text-white font-bold">Collection</h1>
      <div></div>
    </Layout>
  )
}

export default CollectionPage
