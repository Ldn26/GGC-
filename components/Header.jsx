"use client"; 
import { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import logo from "../public/trace.svg";

const  Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  
      <header className="z-50 border-b banner border-white w-full  top-0 ">
        <div className="container mx-auto h-[88px] flex items-center justify-between px-4 sm:px-8">
          {/* Logo */}
          <div className="hidden lg:flex items-center">
            <Image
              width={200}
              height={40}
              className="p-2 z-30 rounded-full"
              alt="logo"
              src={logo}
            />
          </div>

          {/* Navigation (Desktop) */}
          <ul className="hidden lg:flex items-center">
            {["Home", "Contact", "Services", "About us"].map(
              (menuItem, index) => (
                <li
                  key={index}
                  className="mx-4 font-medium hover:border-b-2 border-primary"
                >
                  <Link
                    href={`/#${menuItem}`}
                    className="text-2xl text-white tracking-wide hover:text-orangeColor transition duration-300"
                  >
                    {menuItem}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-x-4">
            <Link
              href="/signup"
              className="rounded-lg px-6 py-2 text-2xl font-medium bg-[#1E5128] text-primary shadow hover:scale-105 hover:bg-primary hover:text-[#191A19] transition-all"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="rounded-lg px-6 py-2 text-2xl font-medium bg-primary text-[#1E5128] shadow hover:scale-105 hover:bg-[#191A19] hover:text-primary transition-all"
            >
              Login
            </Link>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-3xl"
              >
                {isOpen ? <IoClose size={40} /> : <IoMdMenu size={40} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed bg-primary border border-primary z-40 top-[88px] transition-all duration-500 ${
            isOpen ? "left-0" : "-left-full"
          } w-3/5 h-[400px] rounded-3xl flex flex-col items-center justify-center gap-4 px-4`}
        >
          <Image
            src={logo}
            alt="logo"
            className="rounded-full"
            width={80}
            height={80}
          />
          {["Home", "Contact", "Services", "About us"].map(
            (menuItem, index) => (
              <li key={index} className="w-3/4 text-center">
                <Link
                  href={`#${menuItem.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-white hover:text-primary transition"
                >
                  {menuItem}
                </Link>
              </li>
            )
          )}
        </ul>
      </header>
  );
};

export default Header;
