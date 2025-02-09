"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import {motion ,useAnimation} from "framer-motion"
import {useInView} from 'react-intersection-observer'

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
    id='about'
    className="flex flex-col mt-10 dark:bg-black bg-[#E8EAED] -z-20 lg:flex-row  items-center  lg:items-stretch  h-[calc(100vh-88px)] justify-center"
  >
     <motion.div  
     variants = {variants}
     ref={ref}
     initial="hidden"
     animate={controls}
     className='     relative hidden lg:flex items-center justify-center w-1/2 '>
  <Image width={650} height={650}  className=' z-30 rounded-full' alt='me' src={"/Y.png"}/>
  </motion.div>
  
  <motion.div
       variants = {variants2}
       ref={ref}
       initial="hidden"
       animate={controls}
  className='flex items-center w-full lg:w-1/2 p-24 justify-center'>
  
      <div className="   justify-center flex-col   items-center      ltr:sm:text-left rtl:sm:text-right"> 
        <h1 className="text-[60px]   font-bold text-center  sm:text-6xl">
   About Me 
        </h1>
  
        <p className="mt-4 max-w-lg sm:text-2xl/relaxed text-center" >
        I’m Youcef Laidani, a Full Stack Developer from Algeria. I build web and mobile apps with React, Next.js, Node.js, and MongoDB, focusing on performance and user experience. 🚀
        </p>
  
     <div className='hidden lg:flex flex-col gap-2 my-4'>
      <h1  className='text-3xl font-bold '>Back-end-Dev</h1>
<div className='relative w-full rounded-full  h-3 bg-white'>
  <div className='border-primary border-2 absolute left-[395px] -top-[2px] bg-white rounded-full z-20 w-4 h-4 '></div>
  <div className='absolute bg-primary rounded-l-full  h-3 w-[400px]'></div>
</div>
     </div>

     <div className=' hidden lg:flex flex-col gap-2 my-4'>
      <h1  className='text-3xl font-bold '>Front-end Dev</h1>
<div className='relative w-full rounded-full  h-3 bg-white'>
  <div className='border-primary border-2 absolute left-[445px] -top-[2px] bg-white rounded-full z-20 w-4 h-4 '></div>
  <div className='absolute bg-primary rounded-l-full  h-3 w-[450px]'></div>
</div>
     </div>
     <div className='hidden lg:flex flex-col gap-2 my-4'>
      <h1  className='text-3xl font-bold '>Mobile Dev</h1>
<div className='relative w-full rounded-full  h-3 bg-white'>
  <div className='border-primary border-2 absolute left-[395px] -top-[2px] bg-white rounded-full z-20 w-4 h-4 '></div>
  <div className='absolute bg-primary rounded-l-full  h-3 w-[400px]'></div>
</div>
     </div>
     <div className='hidden lg:flex flex-col gap-2 my-4'>
      <h1  className='text-3xl font-bold '>Database management </h1>
<div className='relative w-full rounded-full  h-3 bg-white'>
  <div className='border-primary border-2 absolute left-[395px] -top-[2px] bg-white rounded-full z-20 w-4 h-4 '></div>
  <div className='absolute bg-primary rounded-l-full  h-3 w-[400px]'></div>
</div>
     </div>
      </div>
        
  </motion.div>
   
    </div>
  )
}

export default About