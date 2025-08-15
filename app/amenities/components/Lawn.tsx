"use client"
import React from "react";
import { motion } from "framer-motion";
import {manropeFont} from "@/utils/fonts";
import { useMotionVariants } from "@/utils/motionVariant";

const Lawn=() =>{
    const {initialVariant,viewPortVariant,viewVariant,transitionVariant}= useMotionVariants();
    return(
        <div className="w-full bg-primary text-center lg:p-[0px_40px] items-center lg:justify-center relative  flex flex-col gap-[20px]">
            <div className="flex flex-col items-center justify-center w-full ml-[20px]">
                <motion.h1
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none"
                   
                    >
                    Exclusive Banquet Hall & Signature <br/>
                    Restaurant    
                </motion.h1>
            </div>       

            
            <div className="w-full md:h-[100vh] p-[0px_0px] lg:p-[0px_40px] 2xl:p-[0px_200px] relative lg:gap-10 flex flex-col justify-center text-center bg-primary mb-[10px]">
            
                <motion.div
                className="bg-[url('/assets/world.jpg')] w-full  md:h-[80%] min-h-[400px] bg-cover bg-no-repeat bg-center lg:bg-right bg-primary" 
                    initial={initialVariant}
                    whileInView={viewVariant}
                    viewport={viewPortVariant}
                    transition={transitionVariant}/>
            </div>        
                    
            <div className="flex flex-col items-center lg:justify-center   w-full ">
                <motion.h2
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className="font-boskaMedium text-secondary text-[60px] lg:text-[96px] z-20 leading-none"
                    
                    >
                    Expansive Open Lawn        
                </motion.h2>
                <motion.p
                    initial={initialVariant}
                    whileInView={viewVariant}
                    transition={transitionVariant}
                    viewport={viewPortVariant}
                    className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[24px] text-secondary font-[500]`}
                    style={{ 
                        textAlign: 'justify',
                        textAlignLast: 'justify',
                        maxWidth: 'fit-content',
                        hyphens: 'none'
                    }}
                    >
                    Breathe freely in the beautifully manicured open lawns at the heart of the community.
                </motion.p>
            </div>
                 
                
           
            


        </div>

    );
};

export default Lawn;