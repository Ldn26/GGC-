"use client"
import React from 'react'
import { useEffect } from 'react'
import { motion , useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function Title({
    titel ,
 }) {
  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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


    <motion.div

   ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    className={`bg-primary w-full h-36 mb-24 items-center flex justify-center `}>
    <motion.div className={`flex flex-row relative hover:translate-x-14 hover:translate transition-all
    
       items-start my-4 justify-center`}>
        <div className='absolute w-full h-2 bg-white top-14 hidden xl:block '></div>
        <h1 className={`text-5xl text-white  font-bold text-center mr-4 `}>{titel}</h1>
       {/* <Image  src={icon} alt='icon'  width={40} height={40}/> */}
    </motion.div>
    </motion.div>
  )
}

export default Title