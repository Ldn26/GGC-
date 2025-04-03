"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion ,useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'

import barcode from "../public/assets/barcode.png";
import update from "../public/assets/update.png";
import stats from "../public/assets/stats.png";
import login from "../public/assets/login.png";
import support from "../public/assets/support.png";
import bill from "../public/assets/bill.png";
function Skils() {

  const variants = {
    hidden: { opacity: 0, x: -100 , y: 0 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5  , ease :'linear' } },
  }
  const variants2 = {
    hidden: { opacity: 0, x: 100 , y: 0 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5  ,ease :'linear'} },
  }
  const variants3 = {
    hidden: { opacity: 0, x: 0 , y: -100 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5 ,ease :'linear' } },
  }


  const variants4 = {
    hidden: { opacity: 0, x: 0 , y: 100 },
    visible: { opacity: 1, x: 0, y:0, transition: { duration: 0.5 ,ease :'linear' } },
  }


  // const controls2 = useAnimation()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1, 
  })

  const [ref2, inView2] = useInView({
    threshold: 0.09 
  })

  useEffect(() => {
    if (inView || inView2) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView, inView2])




// for element 2 and 5 
  // useEffect(() => {
  //   if (inView2) {
  //     controls2.start('visible')
  //   }else{
  //     controls.start('hidden')   }
  // }, [controls2, inView2])


  // others element
  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible')
  //   }else{
  //     controls.start('hidden')   }
  // }, [controls, inView])

  return (
    <div
      id="الميزات"
      className="grid px-16 grid-cols-1 mb-10   mt-4 gap-12 lg:grid-cols-3 lg:gap-16"
    >
      <motion.article
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="rounded-lg  bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transtion-all hover:shadow-2xl sm:p-6"
      >
        {/* <div className="bg-white p-2 w-fit rounded-full text-white flex items-center justify-center"> */}
        {/* <MdWeb size={40} color="black" /> */}
        <Image src={barcode} width={60} alt="bill" height={60} />

        {/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
        {/* </div> */}

        <h3 className="  text-[22.5px] font-bold   text-center text-gray-900">
          مسح ضوئي فوري{" "}
        </h3>

        <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
          مسح باركود المنتجات بسرعة ودقة{" "}
        </p>
      </motion.article>

      <motion.article
        ref={ref2}
        initial="hidden"
        animate={controls}
        variants={variants3}
        className="rounded-lg  bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transtion-all hover:shadow-2xl sm:p-6"
      >
        {/* <div className="bg-white p-2 w-fit text-white rounded-full flex items-center justify-center"> */}
        <Image src={update} width={60} alt="bill" height={60} />
        {/* <FaCode size={40} color="black" /> */}
        {/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
        {/* </div> */}

        <h3 className="  text-[22.5px] font-bold  text-center  text-gray-900">
          تحديث لحظي{" "}
        </h3>

        <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
          متابعة المخزون بين جميع فروعك في الوقت الفعلي
        </p>
      </motion.article>

      <motion.article
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants2}
        className="rounded-lg  bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
      >
 
        <Image src={stats} width={60} alt="bill" height={60} />

   

        <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
          تقارير ذكية
        </h3>

        <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
          تحليلات مبيعات مفصلة تساعدك في اتخاذ القرارات
        </p>
      </motion.article>

      <motion.article
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="rounded-lg   bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
      >
  
        <Image src={login} width={60} alt="bill" height={60} />

        {/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
        {/* </div> */}

        <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
          واجهة بسيطة
        </h3>

        <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
          تصميم بديهي لا يحتاج إلى تدريب مسبق
        </p>
      </motion.article>

      <motion.article
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants4}
        className="rounded-lg    bg-secendery  p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
      >
        {/* <div className="bg-white p-2 w-fit text-white flex rounded-full items-center justify-center"> */}
        <Image
          src={support}
          width={60}
          alt="support"
          height={60}
        />

        {/* </div> */}

        <h3 className="  text-[22.5px] font-bold   text-center  text-gray-900">
          دعم متكامل
        </h3>

        <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
          فريق دعم فني متاح على مدار الساعة
        </p>
      </motion.article>

      <motion.article
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants2}
        className="rounded-lg bg-secendery   p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
      >
        <div className="bg-white p-2 w-fit rounded-full text-white flex items-center justify-center">
          {/* <BsDatabaseCheck size={40} color="black" /> */}
          <Image src={bill} width={40} alt="bill" height={40} />

          {/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
        </div>

        <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
          نظام الفواتير الذكية
        </h3>

        <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
          حساب تلقائي لتكلفة المنتج وسعر البيع مع هامش الربح
        </p>
      </motion.article>
    </div>
  );
}

export default Skils