"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";


function ContactMe() {
  return (
    <motion.div
      id="Contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col     banner lg:flex-row w-full py-20 mt-16  items-center justify-center px-4 lg:px-16 gap-10"
    >
      {/* Text Section */}
      <section className="bg-white px-10 py-16 max-w-[1000px] mx-auto rounded-2xl shadow-xl">
        <div className="flex flex-wrap justify-between items-center gap-10">
          <div className="flex-1 min-w-[280px]">
            <h2 className="text-3xl text-gray-800 mb-6 font-semibold">
              Contact Us
            </h2>
            <p className="text-gray-600 text-base mb-8">
              Une question, un projet, ou juste curieux de ce qu’on fait ?
              Contactez-nous, on est là pour vous !
            </p>

            <div className="flex items-center text-gray-700 text-lg mb-5">
              <i className="fas fa-envelope text-[#0077b6] text-xl mr-4"></i>
              <span>contact@verco.dz</span>
            </div>

            <div className="flex items-center text-gray-700 text-lg mb-5">
              <i className="fas fa-phone text-[#0077b6] text-xl mr-4"></i>
              <span>+213 770 00 00 00</span>
            </div>

            <div className="flex items-center text-gray-700 text-lg mb-5">
              <i className="fas fa-phone text-[#0077b6] text-xl mr-4"></i>
              <span>+213 550 00 00 00</span>
            </div>
          </div>

          <div className="flex-1 min-w-[300px] max-h-[300px] overflow-hidden rounded-xl">
            <img
              src="https://www.univ-smb.fr/scem/wp-content/uploads/sites/82/2022/03/contact-750x300.jpg"
              alt="Contact"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactMe;
