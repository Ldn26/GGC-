"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

import sub from "../public/sub.svg";
import logo from "../public/trace.svg";

function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      id="Home"
      className="banner   items-center  w-full bg-[#191A19] min-h-screen relative"
    >
      {/* Header */}
      <header className="z-50 border-b border-[#1E5128]/30 w-full   ">
        <div className="container mx-auto h-[88px] flex items-center justify-between px-4 sm:px-8">
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            <motion.div
              className="hidden lg:flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                width={200}
                height={40}
                className="p-2 z-30 rounded-full"
                alt="logo"
                src={logo}
              />
            </motion.div>
          </Link>

          {/* Navigation (Desktop) */}
          <ul className="hidden lg:flex items-center">
            {["Services", "Contact", "About us", "features"].map(
              (menuItem, index) => (
                <motion.li
                  key={index}
                  className="mx-8 font-medium hover:border-b-2 border-[#57cc98]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={`/#${menuItem}`}
                    className="text-2xl text-white tracking-wide hover:text-[#57cc98] transition duration-300"
                  >
                    {menuItem}
                  </Link>
                </motion.li>
              )
            )}
          </ul>

          {/* Buttons */}
          <motion.div
            className="flex items-center gap-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/signup"
              className="rounded-lg px-6 py-2 text-2xl font-medium bg-primary shadow hover:scale-105 hover:bg-[#57cc98] hover:text-white1E5128 transition-all duration-300"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="rounded-lg px-6 py-2 text-2xl font-medium bg-[#1E5128]    hover:text-[#1E5128] text-[white] shadow hover:scale-105 hover:bg-[white]  transition-all duration-300"
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
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <motion.ul
          animate={{
            left: isOpen ? 0 : "-100%",
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bg-[#191A19] border border-[#57cc98] z-40 top-[88px] w-3/5 h-[400px] rounded-r-3xl flex flex-col items-center justify-center gap-4 px-4"
          style={{ left: isOpen ? 0 : "-100%" }}
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
              <motion.li
                key={index}
                className="w-3/4 text-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={`#${menuItem.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-white hover:text-[#57cc98] transition"
                >
                  {menuItem}
                </Link>
              </motion.li>
            )
          )}
        </motion.ul>
      </header>

      {/* Banner */}
      <div
        className="flex flex-col-reverse pt-36 p-4 lg:pt-0 lg:h-screen lg:flex-row items-center lg:items-stretch justify-center"
        ref={ref}
      >
        {/* Text */}
        <motion.div
          className="flex md:p-4 items-center w-full justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
          }}
        >
          <div className="justify-center flex-col items-center sm:text-right">
            {/* <Image
              src={logo} // or another logo if you have it (e.g. logo2)
              alt="logo"
              width={200}
              height={100}
              className="rounded-full m-0"
            /> */}
            <h1 className=" text-left font-bold text-[20px]  text-[#57cc98]  bg-clip-text text-transparent bg-gradient-to-r from-[#57cc98] to-[#57cc98]">
              Solution Durable{" "}
            </h1>
            <h1 className=" text-left  text-[40px] text-white  bg-clip-text text-transparent bg-gradient-to-r from-[#57cc98] to-[#57cc98]">
              Connect ,  Recycle , Profit
            </h1>

            <p className="mt-4 max-w-lg sm:text-2xl/relaxed text-center text-white lg:text-left">
              Connect. Recycle. Profit. Empowering Algeria's Circular Economy by
              tracing, transforming, and monetising inorganic waste with
              precision.
            </p>

            <div className="mt-8 flex flex-col lg:flex-row items-center justify-start gap-4">
              <Link
                href="/login"
                className="rounded-lg px-6 py-2 text-2xl font-medium hover:bg-[#1E5128] bg-white   hover:text-[white] text-[#1E5128]  shadow hover:scale-105   transition-all "
              >
                Join Us
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="order-2 lg:order-1 flex items-center justify-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.3 },
            },
          }}
        >
          <Image
            width={550}
            // height={550}
            className="animate-[float_6s_ease-in-out_infinite]"
            alt="recycling illustration"
            src={sub}
            priority
          />
        </motion.div>
      </div>

      {/* Wave SVG */}
      <div className="absolute -bottom-[80px] left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#f9fefc"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,192C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Banner;
