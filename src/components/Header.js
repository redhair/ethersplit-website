import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import { useConnectModal } from "../hooks/useConnectModal"

function Header({ siteTitle, account }) {
  const [isExpanded, toggleExpansion] = useState(false)
  const { showConnectModal } = useConnectModal()

  return (
    <nav className="flex flex-wrap items-center z-10 justify-between p-6 mb-6 sticky top-0 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm">
          <Link
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            to="/buy-packs"
          >
            Buy Packs
          </Link>
          <Link
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            to="/collection"
          >
            Collection
          </Link>
          <button
            onClick={showConnectModal}
            className="rounded-full flex lg:hidden order-2 text-white px-8 py-3 bg-gradient-to-r from-green-500 to-blue-400"
          >
            {!!account ? (
              <span>{account.slice(0, 6) + "..." + account.slice(-6)}</span>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>

      <Link to={`/`} href="#responsive-header" className="">
        <StaticImage
          loading="eager"
          src="../images/logo_low.png"
          alt="Logo"
          width="250"
        />
      </Link>

      <button
        onClick={showConnectModal}
        className="rounded-full order-2 hidden lg:flex text-white px-8 py-3 bg-gradient-to-r from-green-500 to-blue-400"
      >
        {!!account ? (
          <span>{account.slice(0, 6) + "..." + account.slice(-6)}</span>
        ) : (
          "Connect Wallet"
        )}
      </button>
      <button
        onClick={() => toggleExpansion(!isExpanded)}
        className="flex items-center lg:hidden px-3 py-2 text-white border border-transparent rounded"
      >
        <svg
          className="w-3 h-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
