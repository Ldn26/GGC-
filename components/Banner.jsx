"use client"
import Image from 'next/image'
import React, {  } from 'react'
import { useEffect, useState } from "react";
import {  useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Link from "next/link";
import { IoClose } from "react-icons/io5";
// import { ModeToggle } from "./ui/ModeToggle";
import Wave from "react-wavify";
import BlurText from '../y/BlurText/BlurText'
import mobile  from "../public/assets/mobile.svg";
import { IoMdMenu } from "react-icons/io";
import logo from "../public/assets/logo.svg";
function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const text = '  خدام  تطبيق'
  const variants = {
    hidden: { opacity: 1, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0, 
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }else{
      controls.start('hidden')   }
  }, [controls, inView])

  return (
    <div id="الرئيسية" className=" banner   w-full">
      {/* Header */}
      <div className="z-50   h-[88px]         ">
        <div className="container mx-auto py-5 flex items-center justify-between px-9 md:py-5">
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="https://khdame.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="block whitespace-nowrap    w-full rounded-lg bg-primary px-12 py-3 text-2xl font-medium text-white shadow hover:bg-white hover:border-primary border hover:scale-105 hover:text-primary transition-all focus:outline-none  sm:w-auto"
            >
              {/* تواصل معنا الان        */}
              حمل التطبيق الان
            </Link>
            {/* <div className="ml-2">
              <ModeToggle />
            </div> */}
          </div>
          {/* Desktop Navigation */}
          <ul className="md:items-center lg:flex hidden">
            {[
              "الرئيسية",
              "من نحن",
              "الميزات",
              // "الفريق",
              "التسعير",
              "اتصل بنا",
            ].map((menuItem, index) => (
              <li
                key={index}
                className="mx-4 whitespace-nowrap font-medium hover:border-b-2 border-primary flex-none"
              >
                <Link
                  href={`#${menuItem.toLowerCase()}`}
                  className="relative text-xl transition  duration-300 w-fit block text-white tracking-wide hover:text-orangeColor"
                >
                  {menuItem}
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop Buttons  */}

          {/* logo  */}
          <Image
            width={100}
            height={20}
            className="  p-2 z-30 rounded-full"
            alt="logo"
            src={logo}
          />

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden  top-6">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl transition-all text-white"
            >
              {!isOpen ? (
                <IoMdMenu size={40} color="white" />
              ) : (
                <IoClose size={40} color="white" />
              )}
            </div>
            <div></div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`fixed  bg-primary border-primary border  top-[70px] z-50 gap-3 lg:hidden ${
            isOpen ? "left-[35px] duration-500" : "-left-[1500px] duration-500"
          } w-3/5 flex justify-center flex-col   h-[400px] rounded-3xl   gap-1 items-center px-3 p-4`}
        >
          <Image
            src={logo}
            alt="me"
            className="rounded-full"
            width={80}
            height={80}
          />
          {[
            "الرئيسية",
            "من نحن",
            "الميزات",
            // "الفريق",
            "التسعير",
            "اتصل بنا",
          ].map((menuItem, index) => (
            <li
              key={index}
              className="hover:border-l-4   border-b  rounded-lg hover:scale-105 transition-all  border-white  hover:border-primary  mb-2 hover:border-r-primary hover:border-r-4 w-2/4 justify-center flex gap-2 items-center"
            >
              {/* if we press to the link i want to close the ul  */}

              <Link
                onClick={() => setIsOpen(!isOpen)}
                href={`/#${menuItem}`}
                className="transition  text-center text-xl   text-white  font-medium tracking-wide duration-300 hover:text-primary "
              >
                {menuItem}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Banner */}
      <div
        className="flex flex-col-reverse m
       p-4  mt-40 lg:mt-0  lg:h-[calc(100vh-200px)]       lg:flex-row  items-center  lg:items-stretch   justify-center"
      >
        {/* Text  */}
        <div className="flex   order-1 lg:order-2   md:p-4 items-center w-full  justify-center">
          <div className="   justify-center flex-col   items-center      ltr:sm:text-left rtl:sm:text-right">
            <div className="flex items-center flex-col-reverse md:flex-row  justify-end">
              <BlurText
                text={text}
                delay={50}
                // style={{ fontSize: 40 }}
                animateBy="words"
                // animateBy="letters"

                direction="bottom"
                // onAnimationComplete={handleAnimationComplete}
                className="lg:text-[50px] text-[40px]  text-white  font-bold  text-right "
              />

              <p className="text-[28px] md:text-[40px]   ml-4 ltr text-right text-primary">
                مرحبا بكم في{" "}
              </p>
            </div>

            <p className="mt-4 max-w-xl sm:text-2xl/relaxed text-center   text-white  lg:text-right">
              مع تطبيقنا، يمكنك مسح المنتجات ضوئيًا، تحديث المخزون فورًا، وتنظيم
              عملياتك بكل كفاءة. واجهة بسيطة وأدوات قوية لتبسيط إدارة المخزون
              وتحقيق الإنتاجية المثلى.
            </p>

            <div className="mt-8 flex flex-col  lg:flex-row  items-center justify-end     gap-4 ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://khdame.com/download"
                className="block w-full rounded  whitespace-nowrap   text-center bg-primary px-12 py-3 text-xl font-medium text-white hover:scale-105 hover:border-primary hover:border  shadow hover:bg-secendery hover:text-primary transition-all focus:outline-none  sm:w-auto"
              >
                حمل التطبيق الان
              </a>
              <a
                href="#اتصل بنا"
                className="block w-full rounded text-center text-primary px-12 py-3 text-xl font-medium border border-primary  hover:scale-105 shadow hover:bg-primary hover:text-white  transition-all  sm:w-auto"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className=" mobileanim animate-[floatAndRotate_6s_ease-in-out_infinite]  order-2 lg:order-1 flex items-center justify-center w-full   ">
          <Image
            width={450}
            height={450}
            className="   !w-[450px] !h-[450px] floating-flip-element    "
            alt="mewwfront"
            src={mobile}
          />
        </div>
      </div>
      <Wave
        fill="#25a1a0"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.3,
          points: 8,
        }}
      />
    </div>
  );
}

export default Banner