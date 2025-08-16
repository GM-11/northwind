"use client";
import React from "react";
import { manropeFont } from "@/utils/fonts";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

const WorldClass = () => {
  const { initialVariant, viewPortVariant, viewVariant, transitionVariant } =
    useMotionVariants();

  return (
    <div className="w-full h-[150vh] bg-primary relative gap-[20px] flex flex-col -mt-16 md:mt-0">
      <div className="w-full md:h-[100vh] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-[40px] flex flex-col-reverse lg:flex-row justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/avRoom.jpg')] w-full lg:w-1/2 md:h-full min-h-[400px] bg-contain bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />
        <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary p-[64px_24px]">
          <motion.h1
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none"
          >
            Private AV
            <br />
            Room
          </motion.h1>

          <motion.p
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[500]`}
          >
            Immerse yourself in cinematic
            <br />
            brilliance in our state-of-the-art <br />
            Audio-Visual Room
          </motion.p>
        </div>
      </div>

      <div className="w-full md:h-[100vh] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col-reverse lg:flex-row-reverse justify-center bg-primary">
        <motion.div
          className="bg-[url('/assets/arcade.jpg')] w-full lg:w-1/2 md:h-full min-h-[400px] bg-contain bg-no-repeat bg-center lg:bg-right bg-primary"
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
        />
        <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary p-[64px_24px]">
          <motion.h2
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none"
          >
            Recreation &<br />
            Arcade Room
          </motion.h2>

          <motion.p
            initial={initialVariant}
            whileInView={viewVariant}
            transition={transitionVariant}
            viewport={viewPortVariant}
            className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[500]`}
          >
            Unwind and indulge your competitive <br />
            spirit in the resident&apos;s Game Room
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default WorldClass;
