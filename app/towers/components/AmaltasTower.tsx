"use client";


import { manropeFont } from "@/utils/fonts";
import { useRouter } from "next/navigation";
import React from "react";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const AmaltasTower = () => {
  const router = useRouter();
  return (
    <div
      
      className="p-[16px_20px] md:p-[36px_36px] max-w-[550px] rounded-[16px] max-custom580:w-[90%] flex flex-col absolute max-custom580:top-[42px] max-custom580:left-1/2 max-custom580:-translate-x-1/2 custom580:right-[20px] lg:right-[150px] custom580:top-[200px] backdrop-blur-2xl bg-white/10"
    >
      <p className={`${manropeFont.className} text-[24px] lg:text-[32px] text-secondary`}>
        3 BHK
      </p>

      <h1 className="font-boskaMedium text-[48px] lg:text-[72px] lg:mt-[20px]">Amaltas Tower</h1>
      <p
        className={`${manropeFont.className} text-[24px] text-secondary mt-[20px] max-custom580:hidden`}
      >
        Perched proudly with sweeping views of the green spine, Amaltas is for
        those who demand space, serenity, and sustainability. These homes blend
        architecture with indulgent living.
      </p>

      <SecondaryButton
        text="Express Interest"
        onTap={() => {
          localStorage.setItem("purpose", "form");
          router.replace("/sanctuary");
        }}
        className="bg-[#120f02] w-full text-[20px] lg:text-[24px] max-lg:self-center mt-[28px] lg:mt-[56px] px-[41px] py-[21px] border-none"
      />
    </div>
  );
};

export default AmaltasTower;
