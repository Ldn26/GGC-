"use client"; 
import { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { ModeToggle } from "./ui/ModeToggle";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";

const  Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[88px]  z-50   sticky top-0   dark:bg-black   bg-white">
      <div className="container mx-auto py-5 flex items-center justify-between px-9 md:py-5">


        {/* Desktop Navigation */}
        <ul className="md:items-center lg:flex hidden">
          {["Home", "About", "Project", "Contact"].map(
            (menuItem, index) => (
              <li
                key={index}
                className="mx-4 whitespace-nowrap font-medium hover:border-b-2 border-primary flex-none"
              >
                <Link 
                  href={`#${menuItem.toLowerCase()}`}
                  className="relative text-xl transition duration-300 w-fit block text-mainColor tracking-wide hover:text-orangeColor"
                >
                  {menuItem}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* Desktop Buttons */}
        <div className="hidden lg:flex lg:items-center">
        <Link
          href="#contact"
          className="block w-full rounded bg-primary px-12 py-3 text-2xl font-medium text-white shadow hover:bg-white hover:border-primary border hover:scale-105 hover:text-primary transition-all focus:outline-none  sm:w-auto"
        >
          Get in touch
        </Link>
        <div className="ml-2">

        <ModeToggle />
        </div>

        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden  top-6" >

          <div onClick={() => setIsOpen(!isOpen)} className="text-3xl transition-all text-white">
            
            {isOpen ? <IoMdMenu size={40} color="white" /> : <IoClose size={40} color="white" />}


          </div>
          <div>

          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed dark:bg-primary bg-black top-[70px] z-50 gap-3 lg:hidden ${
          isOpen ? "left-[35px] duration-500" : "-left-[1500px] duration-500"
        } w-3/5 flex justify-center flex-col   h-[400px] rounded-2xl   gap-1 items-center px-3 p-4`}
      >

        <Image src={"/Y.png"}  alt="me" className="rounded-full" width={80} height={80}/>
        {["Home", "About", "Project", "contact"].map(
          (menuItem, index) => (
            <li
              key={index}
              className="hover:border-l-4   border rounded-lg hover:scale-105 transition-all  border-white  hover:border-primary  mb-2 hover:border-r-primary hover:border-r-4 w-2/4 justify-center flex gap-2 items-center"
            >
         
              <Link
                href={`/#${menuItem.toLowerCase().replace(" ", "")}`}
                className="transition  text-center   dark:text-white  font-medium tracking-wide duration-300 hover:text-primary text-sm"
              >
                {menuItem}
              </Link>
            </li>
          )
        )}

      </ul>
    </div>
  );
};

export default Header;
