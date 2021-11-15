import React, { useContext } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Modal, ModalContext, ModalProvider } from "./ModalProvider"
import { injected, walletConnect, walletLink } from "./wallet/connector"
import { useWeb3React } from "@web3-react/core"
import { useAccountBalances, getPricesForTokens } from "../hooks/wallet"

import Header from "./Header"
import "./Layout.css"

const Layout = ({ children }) => {
  const { modalContent } = useContext(ModalContext)
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {modalContent && <Modal>{modalContent}</Modal>}
      <Helmet></Helmet>
      <div
        style={{
          background: "rgb(2,0,36)",
          background: "linear-gradient(180deg, #0e131d, #060a10 30.65%)",
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <Header account={account} siteTitle={data.site.siteMetadata.title} />
          <main className="max-w-3xl m-auto">{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
