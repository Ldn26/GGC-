"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion ,useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer'


function Tools() {

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


  return (

    <div className="grid px-16 grid-cols-2  mb-8 gap-12 lg:grid-cols-6 lg:gap-16">


<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants} className='flex-col     transtion-all     rounded-full text-white flex items-center justify-center'>
{/* <MdWeb size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '   /> */}

<Image width={120} alt='nodejs' height={120} src={"/vs.png"}  className='hover:shadow-primary border border-primary p-4  bg-white    rounded-full hover:scale-110 transition-all   '   />


    <h3 className=" hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
    VS CODE 
    </h3>
</motion.div>


<motion.div    ref={ref2}
   initial="hidden"
   animate={controls}
   variants={variants3} className='flex-col     transtion-all     rounded-full text-white flex items-center justify-center'>
{/* <FaCode size={80} color='white' /> */}
<Image width={120} alt='nodejs' height={120} src={"/node.png"}  className='hover:shadow-primary border border-primary p-4  bg-white    rounded-full hover:scale-110 transition-all   '   />


    <h3 className=" hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold   text-center text-black  dark:text-white">
Node Js
    </h3>
</motion.div>




<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants3} className='flex-col     transtion-all      rounded-full text-white flex items-center justify-center'>
{/* <ImMobile size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}


<Image width={120} alt='nodejs' height={120} src={"/expo.png"}  className='hover:shadow-primary border border-primary p-4  bg-white    rounded-full hover:scale-110 transition-all   '   />

    <h3 className="  hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
Expo 
    </h3>
</motion.div>



<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants2} className='flex-col     transtion-all      rounded-full text-white flex items-center justify-center'>
{/* <ImMobile size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}


<Image width={120} alt='nextjs' height={120} src={"/next.png"}  className='hover:shadow-primary border border-primary p-4  bg-white    rounded-full hover:scale-110 transition-all   '   />

    <h3 className="  hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
Next js 
    </h3>
</motion.div>




<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants} className='flex-col     transtion-all      rounded-full text-white flex items-center justify-center'>
{/* <FaDev size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}

<Image width={120} alt='nodejs' height={120} src={"/react.png"}  className='hover:shadow-primary border border-primary   bg-white    rounded-full hover:scale-110 transition-all   '   />


    <h3 className="  hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
React js    </h3>
</motion.div>





<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants4} className='flex-col     transtion-all      rounded-full text-white flex items-center justify-center'>
{/* <FaDev size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}
<Image width={120} alt='nodejs' height={120} src={"/js.png"}  className='hover:shadow-primary border border-primary       rounded-full hover:scale-110 transition-all   '   />



    <h3 className="  hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
JavaScript
    </h3>
</motion.div>




<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants2} className='flex-col     transtion-all      rounded-full text-white flex items-center justify-center'>
{/* <BsDatab    aseCheck size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}

<Image width={120} alt='tail' height={120} src={"/tail.png"}  className='hover:shadow-primary border border-primary p-4  bg-white    rounded-full hover:scale-110 transition-all   '   />


    <h3 className="  hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
Tailwind css    </h3>
</motion.div>



<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants} className='flex-col     transtion-all     rounded-full text-white flex items-center justify-center'>
{/* <MdWeb size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '   /> */}
<Image width={120} alt='nodejs' height={120} src={"/supa.png"}  className='hover:shadow-primary border border-primary p-4  bg-white    rounded-full hover:scale-110 transition-all   '   />



    <h3 className=" hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
    Supabase
    </h3>
</motion.div>


<motion.div    ref={ref2}
   initial="hidden"
   animate={controls}
   variants={variants3} className='flex-col     transtion-all     rounded-full text-white flex items-center justify-center'>
{/* <FaCode size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}

<Image width={120} alt='nodejs' height={120} src={"/fire.png"}  className='hover:shadow-primary border border-primary p-4  bg-white    rounded-full hover:scale-110 transition-all   '   />


    <h3 className=" hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold   text-center text-black  dark:text-white">
FireBase
    </h3>
</motion.div>




<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants3} className='flex-col     transtion-all      rounded-full text-white flex items-center justify-center'>
{/* <ImMobile size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}

<Image width={120} alt='nodejs' height={120} src={"/shad.png"}  className='hover:shadow-primary border border-primary  bg-white    rounded-full hover:scale-110 transition-all   '   />


    <h3 className="  hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
Shudcn
    </h3>
</motion.div>



<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants2} className='flex-col     transtion-all      rounded-full text-white flex items-center justify-center'>
{/* <ImMobile size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}

<Image width={120} alt='ts' height={120} src={"/ts.png"}  className='hover:shadow-primary border border-primary   bg-white    rounded-full hover:scale-110 transition-all   '   />


    <h3 className="  hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
TypeScript    </h3>
</motion.div>




<motion.div    ref={ref}
   initial="hidden"
   animate={controls}
   variants={variants} className='flex-col     transtion-all      rounded-full text-white flex items-center justify-center'>
{/* <FaDev size={80} color='white' className='hover:shadow-primary border border-primary p-4  bg-black    rounded-full hover:scale-110 transition-all   '  /> */}
<Image width={120} alt='nogdejs' height={120} src={"/tan.png"}  className='hover:shadow-primary border border-primary p-4  bg-white    rounded-full hover:scale-110 transition-all   '   />



    <h3 className="  hover:shadow-primary hover:shadow-xl  hover:scale-110 transition-all   text-[22.5px] font-bold  text-black  text-center dark:text-white">
React Query
    </h3>
</motion.div>















  </div>

  )
}

export default Tools