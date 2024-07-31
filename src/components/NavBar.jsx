import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import StartTrial from "./StartTrial";
import NavElement from "./NavElement";

const NavBar = () => {
  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    if(window.scrollY >= 90)
      setScroll(true)
    else
      setScroll(false)
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      <nav class={scroll == false ? "top-0 start-0 w-full fixed bg-[#fff0e5] z-20" : "top-0 start-0 w-full fixed bg-white border-b border-gray-200 z-20"}>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Logo />
          <div class="flex order-2">
            <StartTrial />
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="px-4 py-2 flex flex-col bg-transparent font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <NavElement text={"Home"} link={"/"}/>
                <NavElement text={"About"} link={"/About"}/>
                <NavElement text={"Service"} link={"/Service"}/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
