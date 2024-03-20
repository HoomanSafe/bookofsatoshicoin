import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 w-full py-4">
      <div className="container flex items-center justify-between">
        <a href="" className="text-5xl uppercase font-goodGame">
          Book of Satoshi
        </a>

        <ul className="items-center justify-between hidden gap-10 text-2xl capitalize lg:flex font-goodGame">
          <a href="" className="cursor-pointer hover:text-emerald-400">home</a>
          <a href="" className="cursor-pointer hover:text-emerald-400">contract</a>
          <a href="https://twitter.com/BookSatoshiCoin" className="cursor-pointer hover:text-emerald-400">𝕏</a>
          <a href="https://twitter.com/BookSatoshiCoin/status/1770342851844477250" className="cursor-pointer hover:text-emerald-400">News</a>
        </ul>

        <div className="w-[181px] h-[54px] font-goodGame px-8 py-4 bg-white rounded shadow justify-center items-center gap-2.5 inline-flex">
          <div className="text-base font-normal leading-snug tracking-tight text-black">
            BUY $BSC
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
