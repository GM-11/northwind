"use client";


import { manropeFont } from "@/utils/fonts";
import React from "react";
import { useRouter } from "next/navigation";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const CedarTower = () => {
  const router = useRouter();
  return (
    <div
      
      className="p-[16px_20px] md:p-[36px_36px] max-w-[550px] rounded-[16px] max-custom580:w-[90%] flex flex-col absolute max-custom580:top-[120px] max-custom580:left-1/2 max-custom580:-translate-x-1/2 custom580:right-[20px] lg:right-[150px] custom580:top-[200px] backdrop-blur-2xl bg-white/10"
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

      <SecondaryButton
        text="Express Interest"
        onTap={() => {
          localStorage.setItem("purpose", "form");
          router.replace("/");
        }}
       className="bg-[#161203] w-full text-[20px] lg:text-[24px] max-lg:self-center mt-[28px] lg:mt-[56px] px-[41px] py-[21px] border-none"

      />

    </div>
  );
};

export default CedarTower;
