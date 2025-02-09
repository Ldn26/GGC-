"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { useEffect  } from 'react'
import {motion ,AnimatePresence ,useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
function Banner() {


  const text = 'Youcef Laidani'
  const variants = {
    hidden: { opacity: 1, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0, 
  })

  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null)
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }else{
      controls.start('hidden')   }
  }, [controls, inView])

  return (
    <div
  className="flex flex-col bg-[#E8EAED] dark:bg-black -z-20 lg:flex-row  items-center  lg:items-stretch  h-[calc(100vh-88px)] justify-center"
>

<div className='flex  p-24 md:p-0 items-center w-full lg:w-1/2 justify-center'>

    <div className="   justify-center flex-col   items-center      ltr:sm:text-left rtl:sm:text-right"> 
    <p className='text-[38px] text-primary'>Hello, I’m</p>
      <div className="text-[60px] flex flex-row   font-bold  sm:text-6xl">
        <AnimatePresence>
        {text.split('').map((char, i) =>
                <motion.p
                ref={ref2}
                key={i}
                initial={{ opacity: 0, x: -18 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                exit="hidden"
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
              >
                {char === ' ' ? <span>&nbsp;</span> : char}
              </motion.p>
     
        ) 
        }
                </AnimatePresence>

 {/* {text} */}
      </div>

      <p className="mt-4 max-w-lg sm:text-2xl/relaxed text-center lg:text-left">
      I’m a Full Stack Developer based in Algeria! I love designing, coding, and building innovative digital experiences.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded  bg-primary px-12 py-3 text-xl font-medium text-white hover:scale-105 hover:border-primary hover:border  shadow hover:bg-secendery hover:text-primary transition-all focus:outline-none  sm:w-auto"
        >
          Get in touch
        </a>
        <a
          href="#"
          className="block w-full rounded text-primary px-12 py-3 text-xl font-medium border border-primary  hover:scale-105 shadow hover:bg-primary hover:text-white  transition-all  sm:w-auto"
        >
          Download CV
        </a>
      </div>
    </div>
      
</div>
    <motion.div 
        ref={ref}
        initial="hidden"
        // animate={controls}
        variants={variants}
        animate={{
          y: [0, -40, 0], // Keyframes for the floating animation
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}



    className='   relative hidden lg:flex items-center justify-center w-1/2 '>

<Image width={650} height={650}  className=' border-4 border-primary z-30 rounded-full' alt='me' src={"/ana2.png"}/>
</motion.div>

  </div>



  )
}

export default Banner