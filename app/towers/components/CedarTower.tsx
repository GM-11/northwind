"use client";


import { manropeFont } from "@/utils/fonts";
import React from "react";
import { useRouter } from "next/navigation";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";


const CedarTower = () => {
  const router = useRouter();
  return (
    <div
      
      className="p-[16px_20px] md:p-[36px_36px] max-w-[550px] xl:top-[200px] rounded-[16px] max-custom580:w-[90%] flex flex-col absolute max-custom580:top-[42px] max-custom580:left-1/2 max-custom580:-translate-x-1/2 custom580:right-[20px] lg:right-[40px] xl:right-[150px] custom580:top-[100px] backdrop-blur-2xl bg-white/10"
    >
      <p className={`${manropeFont.className} text-[24px] lg:text-[32px] text-secondary`}>
        4.5 BHK
      </p>

      <h1 className="font-boskaMedium text-[48px] lg:text-[72px] lg:mt-[20px]">Cedar Tower</h1>
      <p
        className={`${manropeFont.className} text-[24px] text-secondary mt-[20px] max-md:hidden`}
      >
        Bordering the calmest corners of the development, Cedar offers
        intelligently designed homes for modern families. Perfect fit for those
        who believe that less impact can still mean more life.
      </p>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-[36px] w-full">
        <SecondaryButton
          text="Express Interest"
          onTap={() => {
            localStorage.setItem("purpose", "form");
            router.replace("/sanctuary");
          }}
          className="bg-[#120f02] text-white w-full text-[16px] lg:text-[24px] px-[24px] py-[21px] hover:bg-secondary/70 border-none whitespace-nowrap"
        />
        
        <PrimaryButton
          text="Virtual Tour"
          onTap={() => {
            window.location.href = "https://portfolio.virtueaze.com/tower_a/";
          }}
          className={` text-[#120f02] w-full text-[16px] lg:text-[24px] px-[24px] py-[21px] hover:bg-primary/40 border-[#120f02]`}
        />
      </div>   
    
    </div>
  );
};

export default CedarTower;
