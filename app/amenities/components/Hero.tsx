"use client"
import React from "react";
import { manropeFont } from "@/utils/fonts"; 
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import  { useSignUpStore } from "@/stores/useSignUpStore";
import { useMotionVariants } from "@/utils/motionVariant";
import { motion } from "framer-motion";

  



const Hero = () => {
    const { status } = useSignUpStore(); 
    const { initialVariant, viewVariant, viewPortVariant, transitionVariant } = useMotionVariants();  
    return (
      
     <section className={`w-full  relative bg-primary`}>
        <div className="w-full h-[100vh] relative overflow-hidden ">
            <div
                className="bg-cover absolute inset-0 bg-center bg no-repeat"
                style={{ backgroundImage: `url('assets/reception.png')` }}

            ></div>
            <div className="absolute bottom-8 right-8 z-200">
                <h1 className="font-boskaMedium text-[96px] text-white tracking-wide">
                    Amenities
                </h1>
            </div>
        </div>

        <div className="flex flex-col w-full  justify-center items-center py-[96px] h-[204px] gap-8" >
           <p className={`${manropeFont.className}  text-black uppercase px-4 text-[20px] lg:text-[24px]`}>
            Discover a curated collection of indoor and outdoor amenities, designed to<br/>
            provide residents with an unparalleled experience of leisure, wellness, and community.
           </p>
        </div>

        <div className="flex-col flex sm:flex-row justify-center items-center gap-5 mt-[36px] w-full">
          <PrimaryButton
            text="Download Brochure"
            onTap={() => {
              if (status) {
                const link = document.createElement("a");
                link.href = "/assets/certificates/Brochure.pdf";
                link.download = "Brochure.pdf";
                link.click();

                localStorage.setItem("download-brochure", "yes");
              } else {
                document
                  .getElementById("connect-with-us")
                  ?.scrollIntoView({ behavior: "smooth" });
                localStorage.setItem("download-brochure", "yes");
              }
            }}
           className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] hover:bg-secondary/80 duration-20 ${
                       manropeFont.className
                     }  bg-secondary/90 text-primary`}  />
          <SecondaryButton
            text="Schedule Visit"
            onTap={() => {
              window.open(
                
              );
            }}
            className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px]   hover:bg-amber-200/20 duration-200  lg:text-[24px]  ${
                       manropeFont.className
                     } 
                        bg-primary text-secondary
                      border-secondary`}
          />
        </div>
        <div className="flex flex-col items-center justify-center h-[1200px] overflow-hidden relative gap-[32px] p-[64px_36px]">
            <motion.h1 initial={initialVariant} whileInView={viewVariant} viewport={viewPortVariant} transition={transitionVariant} className={"font-boskaMedium text-[64px] lg:text-[96px] text-secondary"}>
                World-Class Amenities<br />
                For An Inspired Lifestyles
            </motion.h1>
            <div className=" p-[64px_36px] relative h-[300px] sm:max-lg:h-[600px] rounded-[20px] lg:h-full w-full overflow-hidden ">
                 <div
                    className="bg-cover absolute inset-0 bg-center bg no-repeat"
                    style={{ backgroundImage: `url('assets/world.jpg')` }}

            ></div>
            

        </div>
           
             



        </div>
     


     </section>

    );
};

export default Hero;