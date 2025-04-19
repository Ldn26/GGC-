"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutAndTeam() {
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
const teamMembers = [
  { name: "Meriem", image: "/meriem.jpg" },
  { name: "Zahra", image: "/zahra.jpeg" },
  { name: "Youssef", image: "/me.jpg" },
  { name: "Amine", image: "/amine.jpg" },
  { name: "Nazim", image: "/nazime.jpg" },
];
  const [teamRef, teamInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="About us" className="bg-[#f9fefc] py-20 px-4 text-center">
      {/* Why Choose Verco */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          className="text-[50px] text-[#57cc98] font-bold mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Verco?
        </motion.h2>

        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
          ref={featuresRef}
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
        >
          {[
            {
              title: "Tracking and management tools ",
              description:
                "Unlike other platforms, ours includes a Smart Insights Dashboard that gives  real-time access to plastic waste data for better tracking and decision-making",
              icon: "🔧",
            },
            {
              title: "Impact Tracking",
              description:
                "Real‑time CO₂ savings and tree‑equivalent preservation metrics.",
              icon: "🌱",
            },
            {
              title: "Automated ESG & CSR Reports",
              description:
                "Generate RSE and compliance dashboards and manage green‑growth certifications.",
              icon: "📊",
            },
            {
              title: "Green Labels & Badges",
              description:
                "Earn and showcase recognized sustainability seals for your initiatives.",
              icon: "🏆",
            },
            {
              title: "Map API & Geolocation",
              description:
                "Integrate precise routing and location services to optimize your recycling logistics.",
              icon: "🗺️",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-left hover:-translate-y-2 hover:shadow-lg transition-all duration-300 border border-[#57cc98]/10"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-[#57cc98] text-2xl font-medium mb-3">
                {feature.title}
              </h4>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Meet the Team */}
      <section className="mt-32">
        <motion.h2
          className="text-[50px] font-semibold text-[#57cc98] mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet the CFounders
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-12"
          ref={teamRef}
          variants={containerVariants}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
        >
          {teamMembers.map((memeber, index) => (
            <motion.div
              className="text-center"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              {/* <div className="relative group">
                <div className="absolute      -inset-0.5 bg-gradient-to-r from-[#57cc98] to-[#1E5128] rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                <div className="relative   w-650 h-650 ">
                  <Image
                    fill
                    src={memeber.image}
                    alt={`Team Member ${index + 1}`}
                    // width={500}
                    // height={500}
                    objectFit="cover"
                    // height={"100%"}
                    layout="responsive"
                    className="rounded-full border-4 border-[#57cc98] mb-3 object-cover"
                  />
                </div>
              </div> */}

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#57cc98] to-[#1E5128] rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>

                <div className="relative p-4 w-[200px] h-[200px]">
                  <Image
                    src={memeber.image}
                    alt={`Team Member ${index + 1}`}
                    fill // this makes the image fill the parent div
                    className="rounded-full border-4 border-[#57cc98] object-cover"
                  />
                </div>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                {memeber.name}
              </h4>
              <p className="text-[#1E5128] font-medium">Team Member</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
