import React from "react";
import { manropeFont } from "@/utils/fonts";
import Sign from "@/components/Sign";
import Loc from "@/components/icons/Loc";
import Mail from "@/components/icons/Mail1";
import Phone from "@/components/icons/Phone";
import Globe from "@/components/icons/Globe";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

export const Footer = () => {
  
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } = useMotionVariants();
  return (
    <motion.footer className="w-full flex flex-col bg-tertiary relative p-[50px_50px] md:p-[120px_200px] max-md:h-[1000px] 2xl:p-[40px_400px] gap-[80px] overflow-hidden"
      initial={initialVariant}
      whileInView={viewVariant}
      viewport={viewPortVariant}
      transition={transitionVariant}>
      <div className="h-[134px] flex flex-col justify-center items-center z-20">
        <Sign />
      </div>
  
      <div className="w-full h-full flex flex-row max-sm:flex-col-reverse items-center justify-center gap-[0px] relative z-10">
        <div className="overflow-hidden w-full">
          <img
            src="/assets/rangoli.png"
            alt="rangoli"
            className="object-left object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col xl:w-[700px] items-start text-left text-white gap-[20px] mb-16 max-lg:absolute left-0 top-0 sm:max-lg:right-0 lg:inset-0">
          <div className="flex flex-col gap-2 items-start">
            <h1
              className={`${manropeFont.className} text-[24px] md:text-[32px] text-white`}
            >
              Northwind Sanctuary
            </h1>
            <p
              className={`${manropeFont.className} text-[16px] md:text-[24px] font-normal text-white`}
            >
              By Northwind Estates Pvt. Ltd.
            </p>
          </div>

          <div
            className={`${manropeFont.className} flex flex-col gap-[12px] text-[16px] text-white w-full`}
          >
            <div className="flex items-center gap-[8px]">
              <span className="text-[16px]">
                <Loc />
              </span>
              <p>Plot 07, Sector Pi-1, Greater Noida, UP-201306</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-[16px]">
                <Phone />
              </span>
              <p>+91-888 111 0909</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-[16px]">
                <Mail />
              </span>
              <p>info@northwindsanctuary.com</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-[16px]">
                <Globe />
              </span>
              <p>www.northwindsanctuary.com</p>
            </div>
            <div className="flex item-center pl-[8px] gap-[8px]">
              <p>RERA No: UPRERAPRJ798312/05/2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 max-md:absolute bottom-10 left-1/2 max-md:-translate-x-1/2 z-20">
        <div className="flex flex-wrap max-sm:flex-col text-center justify-center gap-[24px] text-white text-[16px] uppercase tracking-wider">
          
          
          <a href="#" className="hover:text-gray-300 transition-colors">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            DOWNLOAD BROCHURE
          </a>
          <a href="https://www.facebook.com/people/North-Wind-Estates/61576002300546/" target="_blank" className="hover:text-gray-300 transition-colors">
            FACEBOOK
          </a>
          <a href="https://www.instagram.com/northwind.estates" target="_blank" className="hover:text-gray-300 transition-colors">
            INSTAGRAM
          </a>
          <a href="https://www.linkedin.com/company/northwind-estates-pvt-ltd/" target="_blank" className="hover:text-gray-300 transition-colors">
            LINKEDIN
          </a>
        </div>

        <div className="text-white text-[12px] text-center gap-[10px]">
          <p>all rights reserved © northwindestates2025</p>
          <p>designed and developed by loon design</p>
        </div>
      </div>

      {/* <div className="hidden">
            <Foot />
        </div> */}
    </motion.footer>
  );
};


