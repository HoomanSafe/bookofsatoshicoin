import React from "react";
import aboutPattern from "../assets/bookofsat-removebg-preview.png";

const About = () => {
  return (
    <section className="relative w-full py-24">
      <img
        src={aboutPattern}
        alt=""
        className="absolute bottom-0 left-0 pointer-events-none"
      />
      <div className="container flex flex-col items-center justify-center gap-12">
        <h1 className="text-emerald-400 text-7xl font-goodGame text-center leading-[80px] tracking-wider">
          ABOUT Book Of Satoshi Coin
        </h1>
        <p className="max-w-[811px] text-center text-white text-lg font-normal leading-[48px]">
        Missed the BOME train to billions in market cap?
Don't miss $BSC 💰💰 Earn BTC rewards
        </p>

        <a
          href=""
          className="h-[54px] px-8 py-4 bg-gradient-to-b from-emerald-500 to-sky-600 rounded shadow justify-center items-center gap-2.5 flex"
        >
          <div className="text-2xl leading-snug tracking-tight text-zinc-900 font-goodGame">
            BUY ON PancakeSwap
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;
