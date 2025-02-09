"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion ,useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { MdWeb } from "react-icons/md";
import { BsDatabaseCheck } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { FaDev } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


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


    <div className="grid px-16 grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

<motion.article
   ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants}
   className="rounded-lg  bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transtion-all hover:shadow-2xl sm:p-6"

>

<div className='bg-white p-2 w-fit rounded-full text-white flex items-center justify-center'>

<MdWeb size={40} color='black'  />


{/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
</div>

    <h3 className="  text-[22.5px] font-bold   text-center text-gray-900">
    Front-End Development
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
  Crafting responsive and dynamic user interfaces using React, Next.js, and Tailwind CSS.
  </p>


</motion.article>



<motion.article
   ref={ref2}
   initial="hidden"
   animate={controls}
   variants={variants3}

  className="rounded-lg  bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transtion-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white rounded-full flex items-center justify-center'>
<FaCode size={40} color='black'  />
{/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
</div>

    <h3 className="  text-[22.5px] font-bold  text-center  text-gray-900">
    Back-End Development
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
  Building secure and scalable server-side applications with Node.js, Express, and MongoDB.
  </p>


</motion.article>


<motion.article
   ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants2}
  className="rounded-lg  bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white flex rounded-full  items-center justify-center'>
<ImMobile size={40} color='black'  />
{/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
</div>

    <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
    Mobile App Development 
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
  Developing cross-platform mobile apps using React Native and Expo.
  </p>


</motion.article>



<motion.article
   ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants}
  className="rounded-lg   bg-secendery p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit rounded-full  text-white flex items-center justify-center'>
<FaDev size={40} color='black'  /> 

{/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
</div>

    <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
    DevOps & Deployment 
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
  Deploying and maintaining applications with Vercel, Docker, and CI/CD pipelines.
  </p>


</motion.article>


<motion.article
   ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants4}
  className="rounded-lg    bg-secendery  p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit text-white flex rounded-full items-center justify-center'>

<Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} />
</div>

    <h3 className="  text-[22.5px] font-bold   text-center  text-gray-900">
    State Management
    </h3>

    
  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
  Handling complex application states with Zustand, Redux, and React Context API.
  </p>


</motion.article>

<motion.article
ref={ref}
initial="hidden"
animate={controls}
variants={variants2}
  className="rounded-lg bg-secendery   p-4 shadow-sm hover:shadow-primary flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl sm:p-6"
>

<div className='bg-white p-2 w-fit rounded-full text-white flex items-center justify-center'>
<BsDatabaseCheck size={40} color='black' />

{/* <Image alt='expert' width={40} height={40} className='text-white ' src={"./check.svg"} /> */}
</div>

    <h3 className="  text-[22.5px] font-bold  text-center text-gray-900">
    Database Management 
    </h3>


  <p className="mt-2 font-normal text-center text-[15px] text-gray-500">
  Managing relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases for efficient data storage
  </p>  


</motion.article>




  </div>

  )
}

export default Skils