import Image from 'next/image'
import React from 'react'


function Footer() {
  return (
<footer className= "dark:bg-black bg-gray-100">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">


    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center  lg:justify-center">
   
          <Image src={'/Y.png'} alt='me' className='rounded-full' width={80} height={80}/>
        </div>

        <p className="mx-auto mt-6 max-w-md  dark:text-white leading-relaxed text-gray-500 text-center">
        🚀 Turning Ideas into Reality with Code & Design | Crafting seamless web and mobile experiences to bring innovation to life. © 2025 Laidani. All Rights Reserved. 🔥
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-gray-700 transition dark:text-gray-300 dark:hover:text-gray-500 hover:text-gray-700/75" href="#about"> About </a>
        </li>

        <li>
          <a className="text-gray-700  dark:text-gray-300  transition dark:hover:text-gray-500 hover:text-gray-700/75" href="#home"> Home </a>
        </li>

        <li>
          <a className="text-gray-700 transition  dark:text-gray-300  dark:hover:text-gray-500 hover:text-gray-700/75" href="#project"> Projects </a>
        </li>

        <li>
          <a className="text-gray-700 transition dark:text-gray-300 dark:hover:text-gray-500 hover:text-gray-700/75" href="#contact"> Contact </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm dark:text-white  text-gray-500 lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer

