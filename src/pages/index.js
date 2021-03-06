import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Button from "../components/Button"
import FOG from "vanta/dist/vanta.fog.min"
import * as THREE from "three"

const IndexPage = ({ data }) => {
  const myRef = useRef()
  const [vantaEffect, setVantaEffect] = useState(0)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE, // use a custom THREE when initializing
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x4dff,
          midtoneColor: 0x6600ff,
          lowlightColor: 0x378bff,
          baseColor: 0x151d43,
          blurFactor: 0.9,
          speed: 1.5,
          zoom: 1.7,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, window.THREE])

  return (
    <>
      <SEO title="Coming Soon" />

      <div ref={myRef}>
        <div className="flex flex-col h-screen justify-center items-center mr-6 text-white">
          <StaticImage
            placeholder="none"
            className="mt-24"
            height="396"
            loading="eager"
            src="../images/logo_high.png"
            alt="Logo"
          />
          {/* <Button className="mt-12">Mint Your Starterpack Now</Button> */}
          <p className="p-2 text-white text-xl text-center">
            Join the most competetive NFT trading card game on Ethereum.
          </p>
          <Link to="/buy-packs">
            <Button className="">Mint Your Starterpack Now</Button>
          </Link>
          {/* <Button
            onClick={() => {
              window.open("https://discord.gg/FDNGyaK9C6", "_blank") ||
                window.location.replace("https://discord.gg/FDNGyaK9C6")
            }}
            className="mb-20 mt-12"
          >
            Join us on Discord
          </Button> */}
        </div>
      </div>
      {/*<Layout>
 <div className="flex flex-col justify-center items-center mr-6 text-white">
        <StaticImage
          placeholder="none"
          className="mt-24"
          loading="eager"
          src="../images/logo_high.png"
          alt="Logo"
        />
        <Link to="/buy-packs">
          <Button className="mt-12">Mint Your Starterpack Now</Button>
        </Link>
      </div>
      <h1 class="p-2 md:pt-40 md:text-6xl text-center font-bold text-white">
        Join the most competetive NFT trading card game on Ethereum
      </h1>
      <p class="p-2 md:px-60 md:pb-40 text-gray-400 text-xl text-center">
        Play Ethereum's most competetive card game by minting NFT game assets
        that can never be nerfed, banned, or taken from you. Own your digital
        deck.
        <br />
        <p className="text-gray-400 text-xl mt-12 mb-2">
          862/1,000 starter packs claimed!
        </p>
        <div class="relative overflow-hidden h-2 mb-4 text-xs flex items-center rounded-xl bg-gray-800">
          <div
            style="width: 86.2%"
            class="z-0 absolute shadow-none h-2 text-center whitespace-nowrap rounded-xl text-white justify-center bg-gradient-to-r from-green-400 to-blue-500"
          ></div>
        </div>
        <Link to="/buy-packs">
          <Button className="mt-12 ">Mint Your Starterpack Now</Button>
        </Link>
      </p>
      <section className="mb-20">
        <h2 class="text-white text-4xl font-bold mb-4">
          Craft your perfect strategy
        </h2>

        <p className="text-white text-xl">
          Open packs to discover up to 8 different races, 10 weapon grades, and
          5 spells. Use these cards to build your perfect strategy.
        </p>
      </section>
      <section className="mb-20">
        <h2 class="text-white text-4xl font-bold mb-4">Battle Your Way</h2>
        <p className="text-white text-xl">
          Casual, competetive, or professional. We have game modes for every
          level of play. Inspired by the duel arena in Runescape, we decided to
          create the next level of game mode which we call{" "}
          <Link to="/faq#staked-matches">Staked matches</Link>. You can think
          about this as a way to put your real money where your mouth is. Staked
          matches allow you to challenge someone with ETH attached to the match.
          Both players are required to put up a "stake", if both players accept,
          the match will begin and the winner of the match will take 100% of the
          stake.
        </p>
        <h3 class="text-white text-2xl font-bold mt-12">Game modes</h3>
        <p class="text-xl text-white ml-12">
          <ul class="list-disc">
            <li>
              <span className="font-bold">Casual:</span> Hone your skills or
              just play for fun!
            </li>
            <li>
              <span className="font-bold">Ranked:</span> Play for ELO. Each
              season resets your rank. Players will will recieve a
              non-transferrable NFT reward at the end based on their rank.
            </li>
            <li>
              <span className="font-bold">Staked:</span> Put your money where
              your mouth is.
            </li>
          </ul>
        </p>
      </section>
      <section className="mb-20">
        <h2 className="text-white text-4xl font-bold mb-4">
          Play-to-Earn meets PvP
        </h2>
        <p className="text-white text-xl">
          Most Play-to-Earn games are boring. No one <i>wants</i> to farm NPCs 8
          hours a day -- even if they are being paid. That's not where the fun
          of gaming comes from and turns something fun and competetive into a
          chore. Because of this we decided to skip the grind and reward you for
          what you do best -- PvP. Each match you play against another player
          will reward you with EtherSplitToken (EST) which can be staked in our
          goverance protocol.
        </p>
      </section>
      <section className="mb-20">
        <h2 className="text-white text-4xl font-bold mb-4">
          Player owned, forever.
        </h2>
        <p className="text-white text-xl">
          Players who stake their EST in the DAO will gain voting rights for all
          proposals in the DAO; and yes, this means you will finally have a say
          in what gets buffed/nerfed/fixed/etc.
        </p>
      </section>
      <section className="mb-20">
        <h2 className="text-white text-4xl font-bold mb-4">Milestones</h2>
        <p className="text-white text-xl mb-4">
          Each milestone is represented by the percentage of the original 1,000
          starterpacks that are minted. If all 1,000 first edition starter packs
          get minted we will be 100% funded!
        </p>
        <div className="flex flex-col">
          <div class="overflow-hidden h-40 mb-4 text-xs flex items-center rounded-xl bg-gray-800">
            <div
              style="width: 0%"
              class="z-0 absolute shadow-none h-40 text-center whitespace-nowrap rounded-xl text-white justify-center bg-gradient-to-r from-green-400 to-blue-500"
            ></div>
            <h3 className="font-bold text-4xl text-white z-10 px-20">
              0%: Public minting unlocks on datehere.
            </h3>
          </div>
          <div class="relative overflow-hidden h-40 mb-4 text-xs flex items-center rounded-xl bg-gray-800">
            <div
              style="width: 25%"
              class="z-0 absolute shadow-none h-40 text-center whitespace-nowrap rounded-xl text-white justify-center bg-gradient-to-r from-green-400 to-blue-500"
            ></div>
            <h3 className="font-bold text-4xl text-white z-10 px-20">
              25%: Deck builder dApp.
            </h3>
          </div>
          <div class="relative overflow-hidden h-40 mb-4 text-xs flex items-center rounded-xl bg-gray-800">
            <div
              style="width: 50%"
              class="z-0 absolute shadow-none h-40 text-center whitespace-nowrap rounded-xl text-white justify-center bg-gradient-to-r from-green-400 to-blue-500"
            ></div>
            <h3 className="font-bold text-4xl text-white z-10 px-20">
              50%: Fully playable ranked games with matchmaking system and end
              of season rewards.
            </h3>
          </div>
          <div class="relative overflow-hidden h-40 mb-4 text-xs flex items-center rounded-xl bg-gray-800">
            <div
              style="width: 75%"
              class="z-0 absolute shadow-none h-40 text-center whitespace-nowrap rounded-xl text-white justify-center bg-gradient-to-r from-green-400 to-blue-500"
            ></div>
            <h3 className="font-bold text-4xl text-white z-10 px-20">
              75%: Staked matches and weekly tournaments with huge prize pools.
            </h3>
          </div>
          <div class="relative overflow-hidden h-40 mb-4 text-xs flex items-center rounded-xl bg-gray-800">
            <div
              style="width: 100%"
              class="z-0 absolute shadow-none h-40 text-center whitespace-nowrap rounded-xl text-white justify-center bg-gradient-to-r from-green-400 to-blue-500"
            ></div>
            <h3 className="font-bold text-4xl text-white z-10 px-20">
              100%: Physical versions of the cards will be made and can be
              claimed with proof of NFT ownership
            </h3>
          </div>
        </div>
      </section>
      <p class="p-2 md:px-60 md:pb-40 text-gray-600 text-center text-white text-xl">
        <p className="text-gray-400 text-xl mt-12 mb-2">
          862/5,000 starter packs claimed!
        </p>
        <div class="relative overflow-hidden h-2 mb-4 text-xs flex items-center rounded-xl bg-gray-800">
          <div
            style="width: 86.2%"
            class="z-0 absolute shadow-none h-2 text-center whitespace-nowrap rounded-xl text-white justify-center bg-gradient-to-r from-green-400 to-blue-500"
          ></div>
        </div>
        <Button className="mt-12">Mint A Starterpack Now</Button> <br />
        <br />
        and build your deck to participate in our{" "}
        <Link to="/tournaments">Weekly tournaments</Link> for a chance to win up
        to $3,000.
      </p> 
      </Layout>*/}
    </>
  )
}

export default IndexPage
