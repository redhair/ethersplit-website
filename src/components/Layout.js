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
          {/* <Header account={account} siteTitle={data.site.siteMetadata.title} /> */}
          <main>{children}</main>
          <footer class="flex flex-col p-6 mt-12 ">
            <Link class="text-gray-400" to="/">
              Home
            </Link>
            <Link class="text-gray-400" to="/">
              Buy Packs
            </Link>
            <Link class="text-gray-400" to="/">
              Open Packs
            </Link>
            <Link class="text-gray-400" to="/">
              About
            </Link>
            <a class="text-gray-400" href="https://github.com/redhair">
              Github
            </a>
            <Link class="text-gray-400" href="/battle">
              Battle
            </Link>
            <Link class="text-gray-400" href="/battle">
              Gallery
            </Link>
            <Link class="text-gray-400" href="/battle">
              Tournaments
            </Link>
            <br />
            <p className="text-gray-400">&copy; ethersplit 2021</p>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
