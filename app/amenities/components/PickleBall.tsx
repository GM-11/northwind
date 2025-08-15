"use client"
import React from "react";
import { manropeFont } from "@/utils/fonts"; 
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";



const PickleBall=() =>{
    const {initialVariant,viewPortVariant,viewVariant,transitionVariant}= useMotionVariants();

   return (
   
    <div className="w-full h-[150vh] bg-primary relative gap-[20px] flex flex-col mb-[320px] ">


            <div className="w-full md:h-[100vh] lg:p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-[40px] flex flex-col-reverse lg:flex-row-reverse justify-center bg-primary">

                <motion.div
                className="bg-[url('/assets/world.jpg')] w-full lg:w-1/2 md:h-full min-h-[400px] bg-contain bg-no-repeat bg-center lg:bg-right bg-primary" 
                    initial={initialVariant}
                    whileInView={viewVariant}
                    viewport={viewPortVariant}
                    transition={transitionVariant}/>
                <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary p-[64px_24px] lg:gap-[40px]">
                    <motion.h1
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none"
                    >
                    Premier Pickle Ball Court
                   
                    </motion.h1>
                
                    <motion.p
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[500]`}
                    >
                   Unwind and indulge your competitive <br/>
                   spirit in the residents' Game Room<br/>
                   
                    </motion.p>
                </div>
            </div>

            <div className="w-full md:h-[100vh] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col-reverse lg:flex-row justify-center bg-primary">
            
                <motion.div
                className="bg-[url('/assets/world.jpg')] w-full lg:w-1/2 md:h-full min-h-[400px] bg-contain bg-no-repeat bg-center lg:bg-right bg-primary" 
                    initial={initialVariant}
                    whileInView={viewVariant}
                    viewport={viewPortVariant}
                    transition={transitionVariant}/>
                <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary p-[64px_24px]">
                    <motion.h2
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none"
                    >
                    Serenity Walk Waterfall
                    
                    </motion.h2>
                
                    <motion.p
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[500]`}
                    >
                    Experience a breathtaking<br/>
                     architectural marvel—the Skywalk Waterfall.
                    </motion.p>
                </div>

            
                
                

            </div>
             <div className="w-full md:h-[100vh] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col-reverse lg:flex-row-reverse justify-center bg-primary">
            
                <motion.div
                className="bg-[url('/assets/world.jpg')] w-full lg:w-1/2 md:h-full min-h-[400px] bg-contain bg-no-repeat bg-center lg:bg-right bg-primary" 
                    initial={initialVariant}
                    whileInView={viewVariant}
                    viewport={viewPortVariant}
                    transition={transitionVariant}/>
                <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary p-[64px_24px]">
                    <motion.h2
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none"
                    >
                    Serenity Walk Waterfall
                    
                    </motion.h2>
                
                    <motion.p
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[500]`}
                    >
                    Experience a breathtaking<br/>
                     architectural marvel—the Skywalk Waterfall.
                    </motion.p>
                </div>
            </div>    
            <div className="w-full md:h-[100vh] p-[0px_0px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col-reverse lg:flex-row justify-center bg-primary">
            
                <motion.div
                className="bg-[url('/assets/world.jpg')] w-full lg:w-1/2 md:h-full min-h-[400px] bg-contain bg-no-repeat bg-center lg:bg-right bg-primary" 
                    initial={initialVariant}
                    whileInView={viewVariant}
                    viewport={viewPortVariant}
                    transition={transitionVariant}/>
                <div className="flex flex-col lg:justify-center lg:w-[40%] max-md:bg-primary p-[64px_24px]">
                    <motion.h2
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none"
                    >
                    Serenity Walk Waterfall
                    
                    </motion.h2>
                
                    <motion.p
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[500]`}
                    >
                    Experience a breathtaking<br/>
                     architectural marvel—the Skywalk Waterfall.
                    </motion.p>
                </div>
            </div>    
    </div>
  );
};

export default PickleBall;
