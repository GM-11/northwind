
import { manropeFont } from "@/utils/fonts";
import React from "react";

const Disclaimer = () => {
  return (
    <div
            
        className="bg-secondary max-md:w-[90%] p-[20px_18px] md:p-[30px_20px] lg:p-[30px_60px] 2xl:p-[30px_300px] flex flex-col">
          
          <h1 className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none mt-[32px]">
            disclaimer
          </h1>

          <p className={`${manropeFont.className} text-[20px] lg:text-[24px] mt-[36px] text-primary`}>
            All artistic impressions, specifications, and details are indicative
            and subject to change without prior notice. All details must be
            verified with the developer or authorized representative.
          </p>

          <p className={`${manropeFont.className} text-[20px] lg:text-[24px] mt-[16px] text-primary`}>
            Project developed by Northwind Estates Pvt. Ltd.
            <br />
            RERA No: UPRERAPRJ798312/05/2025
          </p>
        </div>
  );
};

export default Disclaimer;