import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useConnectModal } from "../hooks/useConnectModal"

function Header({ siteTitle, account }) {
  const [isExpanded, toggleExpansion] = useState(false)
  const { showConnectModal } = useConnectModal()

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 mb-6 sticky top-0 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
      <div className="block">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-transparent rounded"
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
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to={`/`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
          >
            App
          </Link>
          <Link
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            to="/buy-packs"
          >
            Buy Packs
          </Link>
          <Link
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            to="/open-packs"
          >
            Open Packs
          </Link>
          <Link
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            to="/faq"
          >
            FAQ
          </Link>
          <Link
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white"
            to="/collection"
          >
            Collection
          </Link>
        </div>
        {/* <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <Link to={`/`} href="#responsive-header">
            <StaticImage
              loading="eager"
              src="../images/logo_low.png"
              alt="Logo"
              width="250"
            />
          </Link>
        </div> */}
        <div>
          {/* <a
            href="https://github.com/redhair"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-white hover:bg-white lg:mt-0"
          >
            Twitter
          </a>
          <a
            href="https://github.com/redhair"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-white hover:bg-white lg:mt-0"
          >
            Discord
          </a>
          <a
            href="https://github.com/redhair"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-white hover:bg-white lg:mt-0"
          >
            Opensea
          </a> */}
          <button
            onClick={showConnectModal}
            className="rounded-full text-white px-8 py-3 bg-gradient-to-r from-green-500 via-blue-400"
          >
            {!!account ? (
              <span>{account.slice(0, 6) + "..." + account.slice(-6)}</span>
            ) : (
              "Connect Wallet"
            )}
          </button>
        </div>
      </div>
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
