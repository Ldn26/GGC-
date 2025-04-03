"use client"
import Image from 'next/image'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import full from '../public/assets/full.svg'
import phone from '../public/assets/phone.png'
import mail from '../public/assets/gmail.png'
function ContactMe() {





  return (
    <>
      <div
        id="اتصل بنا"
        className="flex flex-col lg:flex-row w-full   mt-16  mb-8    items-center  xl:items-stretch   justify-center"
      >
        {/* the image  */}
        <div className="flex items-center w-full   justify-center ">
          <Image
            width={650}
            height={650}
            className="z-99 rounded-3xl"
            alt="contactus"
            src={full}
          />
        </div>

        {/* the text  section */}
        <div className="flex items-center   w-full  xlb:nw-1/2 flex-col justify-center  ">
          <h1
            dir="rtl"
            className="font-bold   text-2xl  tracking-wide   text-white  leading-relaxed  text-center lg:text-4xl"
          >
            تواصل معنا لإنشاء حسابك <br />
            وابدأ في استخدام التطبيق
          </h1>
          <div className="max-w-[750px]  flex-col items-center gap-15   flex  mt-8  max-h-[650px]">
            {/* phone */}
            <div className="w-full h-[1px] my-3 bg-primary " />

            <div className="">
              {/* Phone */}
              <div className="flex flex-row  gap-5  items-center justify-end ">
                <Image
                  src={phone}
                  width={60}
                  alt="hhhhphone"
                  height={60}
                />
                <h1 className="text-white text-3xl  "> الهاتف </h1>
              </div>{" "}
              <h1 className="text-white  text-center font-semibold mt-2">
                0541593067{" "}
              </h1>
              <h1 className="text-white  text-center font-semibold mt-2">
                0540849366
              </h1>
            </div>
            <div className="w-full h-[1px] my-3 bg-primary " />

            {/* mail  */}
            <div>
              <div className="flex flex-row gap-5 mt-6 items-center justify-end ">
                <Image
                  src={mail}
                  width={60}
                  alt="mail"
                  height={60}
                />
                <h1 className="text-white text-3xl text-center  ">
                  البريد الالكتروني{" "}
                </h1>
              </div>
              <h1 className="text-white  text-center font-semibold mt-2">
                zianitakieddineofficial@gmail.com{" "}
              </h1>
              <h1 className="text-white  text-center   font-semibold mt-2">
                yousseflaidani6@gmail.com
              </h1>
            </div>
            <div className="w-full h-[1px] my-3 bg-primary " />

            {/* <div className="mt-4 flex-row justify-between  "></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe