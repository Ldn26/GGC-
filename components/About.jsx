"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import {motion ,useAnimation} from "framer-motion"
import {useInView} from 'react-intersection-observer'
import logo from '../public/assets/logo.svg'
function About() {


  const variants = {
    hidden: { opacity: 0, x: -200 , y: 0 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5  , ease :'linear' } },
  }

  
  const variants2 = {
    hidden: { opacity: 0, x: 200 , y: 0 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5  , ease :'linear' } },
  }

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1, 
  })



  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }else{
      controls.start('hidden')   }
  }, [controls, inView])
  return (
    <div
      id="من نحن"
      className="flex flex-col-reverse     mt-10  lg:mt-0  px-8    lg:flex-row  items-center  lg:items-stretch  justify-around"
    >
      <motion.div
        variants={variants}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="  p-4 relative  w-full lg:flex items-center justify-center  "
      >
        <Image
          width={650}
          height={650}
          // className=" z-30 "
          className=" !w-[650px] !h-[650px]"
          alt="Inventory illustration"
          src={"assets/invertory.svg"}
        />
      </motion.div>

      <motion.div
        variants={variants2}
        ref={ref}
        initial="hidden"
        animate={controls}
        className="flex items-center w-full  justify-center"
      >
        <div className="   justify-center flex-col   items-center      ltr:sm:text-left rtl:sm:text-right">
          <div className="items-center flex justify-center">
            <Image
              width={150}
              height={150}
              className=" z-30 rounded-full"
              alt="me"
              src={logo}
            />
          </div>

          <p className="mt-4 max-w-lg  text-white text-2xl/relaxed text-center">

            نقدم تطبيقًا متكاملًا لإدارة الأعمال والمخزون، يتيح لك مسح الباركود
            بسهولة، متابعة المبيعات، وإدارة المخزون بشكل ذكي. مع واجهة بسيطة
            وتقارير فورية، يساعدك التطبيق على تحسين عملياتك وزيادة أرباحك
          </p>
          {/* 
          <div className="hidden lg:flex flex-col gap-2 my-4">
            <h1 className="text-3xl font-bold ">Back-end-Dev</h1>
            <div className="relative w-full rounded-full  h-3 bg-white">
              <div className="border-primary border-2 absolute left-[395px] -top-[2px] bg-white rounded-full z-20 w-4 h-4 "></div>
              <div className="absolute bg-primary rounded-l-full  h-3 w-[400px]"></div>
            </div>
          </div>

          <div className=" hidden lg:flex flex-col gap-2 my-4">
            <h1 className="text-3xl font-bold ">Front-end Dev</h1>
            <div className="relative w-full rounded-full  h-3 bg-white">
              <div className="border-primary border-2 absolute left-[445px] -top-[2px] bg-white rounded-full z-20 w-4 h-4 "></div>
              <div className="absolute bg-primary rounded-l-full  h-3 w-[450px]"></div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-2 my-4">
            <h1 className="text-3xl font-bold ">Mobile Dev</h1>
            <div className="relative w-full rounded-full  h-3 bg-white">
              <div className="border-primary border-2 absolute left-[395px] -top-[2px] bg-white rounded-full z-20 w-4 h-4 "></div>
              <div className="absolute bg-primary rounded-l-full  h-3 w-[400px]"></div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-2 my-4">
            <h1 className="text-3xl font-bold ">Database management </h1>
            <div className="relative w-full rounded-full  h-3 bg-white">
              <div className="border-primary border-2 absolute left-[395px] -top-[2px] bg-white rounded-full z-20 w-4 h-4 "></div>
              <div className="absolute bg-primary rounded-l-full  h-3 w-[400px]"></div>
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}

export default About