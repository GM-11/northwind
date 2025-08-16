"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

const Club = () => {
  const { initialVariant, viewPortVariant, viewVariant, transitionVariant } =
    useMotionVariants();
  return (
    <div className="w-full bg-primary text-center lg:justify-center relative flex flex-col">
      <motion.h1
        initial={initialVariant}
        whileInView={viewVariant}
        transition={transitionVariant}
        viewport={viewPortVariant}
        className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none mb-[40px]"
      >
        <br />
        The Club At Sanctuary
      </motion.h1>

      <div className="w-full md:h-[80vh] ${manropeFont.className} p-[0px_0px] lg:p-[0px_40px] 2xl:p-[0px_240px] relative lg:gap-10 flex flex-col-reverse lg:flex-row justify-center bg-primary mb-[10px]">
        <motion.div
          className="bg-[url('/assets/club1.jpg')] ${manropeFont.className} w-full lg:w-2/3 md:h-[100%] min-h-[400px] bg-cover bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />

        <motion.div
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className="bg-[url('/assets/club2.jpg')] w-full lg:w-1/3 md:h-[40%] min-h-[400px] bg-cover bg-no-repeat bg-center lg:bg-right bg-primary"
        />
      </div>
    </div>
  );
};

export default Club;
