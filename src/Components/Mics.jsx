import React from "react";
import micsPattern from "../assets/bookofsat-removebg-preview.png";

const Mics = () => {
  return (
    <section className="relative w-full py-24">
      <img
        src={micsPattern}
        alt=""
        className="absolute bottom-0 right-0 pointer-events-none"
      />
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-emerald-400 text-7xl font-goodGame text-center leading-[80px] tracking-wider">
          TOKENOMICS
        </h1>
        <div className=" mt-16 gap-[67px] grid grid-cols-1 lg:grid-cols-2 justify-between">
          <div className="inline-flex flex-col items-center justify-start gap-5">
            <div className="pl-[39.37px] pr-[38.63px] pt-[38.10px] pb-[37.90px] bg-gradient-to-b from-sky-600 to-emerald-500 rounded-full shadow-inner justify-center items-center inline-flex">
              <div className="text-white text-[40.64px] font-goodGame leading-[50.80px] tracking-wide">
                🟩
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="text-white text-[32px] font-goodGame leading-10 tracking-wide">
                Liquidity Locked
              </div>
              <div className="w-[326px] text-center text-white text-base font-normal leading-loose tracking-tight">
                Unruggable, majority of LP tokens locked in a multi sig wallet!
                 
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-center justify-start gap-5">
            <div className="pl-[39.37px] pr-[38.63px] pt-[38.10px] pb-[37.90px] bg-gradient-to-b from-sky-600 to-emerald-500 rounded-full shadow-inner justify-center items-center inline-flex">
              <div className="text-white text-[40.64px] font-goodGame leading-[50.80px] tracking-wide">
                8%
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="text-white text-[32px] font-goodGame leading-10 tracking-wide">
                Tax
              </div>
              <div className="w-[326px] text-center text-white text-base font-normal leading-loose tracking-tight">
                Of each transaction added to the treasury wallet for marketing
                and Rewards $BTC
              </div>
            </div>
          </div>
          {/* <div className="inline-flex flex-col items-center justify-start gap-5">
            <div className="pl-[39.37px] pr-[38.63px] pt-[38.10px] pb-[37.90px] bg-gradient-to-b from-sky-600 to-emerald-500 rounded-full shadow-inner justify-center items-center inline-flex">
              <div className="text-white text-[40.64px] font-goodGame leading-[50.80px] tracking-wide">
                5%
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="text-white text-[32px] font-goodGame leading-10 tracking-wide">
                Liquidity Locked
              </div>
              <div className="w-[326px] text-center text-white text-base font-normal leading-loose tracking-tight">
                Unruggable, majority of LP tokens locked in a multi sig wallet &
                some burnt so theres always LP. We have also went further to
                lock our contract with EverOwn.
              </div>
            </div>
          </div> */}
        </div>{" "}
      </div>
    </section>
  );
};

export default Mics;
