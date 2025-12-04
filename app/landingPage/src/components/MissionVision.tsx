"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image"; // <--- IMPORTANT



const MissionVision = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-24 bg-teal-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-darker/50 via-teal-dark to-teal-darker/50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">

          {/* ------------------- MISSION ------------------- */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group overflow-hidden rounded-lg shadow-elevated cursor-pointer"
          >
            {/* Wrapper for next/image fill */}
            <div className="relative w-full h-64 sm:h-72 md:h-80">
              <Image
                src={"/assets/gallery4.jpg"}
                alt="Our Mission - Team at construction site"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h3>
            </div>
          </motion.div>

          {/* ------------------- VISION ------------------- */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group overflow-hidden rounded-lg shadow-elevated cursor-pointer"
          >
            <div className="relative w-full h-64 sm:h-72 md:h-80">
              <Image
                src={"/assets/gallery3.jpg"}
                alt="Our Vision - Modern office interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Vision</h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
