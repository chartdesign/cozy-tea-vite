import React, { useState } from "react";
import { cup } from "../assets/icons";
import { hamburger } from "../assets/icons";
import { searchIcon } from "../assets/icons";



const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="padding-x py-8 z-10 w-full bg-primary border-b border-light-green">
      <nav className="flex justify-between items-center max-container ">
        <img
          src={cup}
          alt="logo"
          width={129}
          height={29}
          className="m-0 w-[129px] h-[29px]"
        />
        
        <h1 className="max-lg:hidden text-xl">Cozy Tea Shop</h1>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            Shop
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            Subscribe
          </li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray">
            About
          </li>
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 border-b border-dark-green">
          <input type="text" placeholder="Search products" className="w-full bg-primary text-black rounded-md p-2 outline-none" />
          <img src={searchIcon}
            alt="searchicon"
            width={25}
            height={25}/>
        </div>

        <div className="hidden max-lg:block">
        <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={toggleNav}
            className="cursor-pointer"
          />
          <ul
            className={`${
              showNav ? "block" : "hidden"
            } max-lg:flex-1 absolute z-10 left-0 w-full bg-white flex-col justify-center items-center gap-16`}
          >
            <li onClick={toggleNav} className="font-montserrat leading-normal text-lg w-full border-b-2 cursor-pointer">Shop</li>
            <li onClick={toggleNav} className="font-montserrat leading-normal text-lg w-full border-b-2 cursor-pointer">Subscribe</li>
            <li onClick={toggleNav} className="font-montserrat leading-normal text-lg w-full border-b-2 cursor-pointer">About</li>
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default NavBar;
