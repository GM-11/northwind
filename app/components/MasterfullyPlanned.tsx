"use client";

import { manropeFont } from "@/utils/fonts";
import { maps } from "../exports/export";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { useMotionVariants } from "@/utils/motionVariant";
import { motion } from "framer-motion";

const MasterfullyPlanned = () => {
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } = useMotionVariants();
  const sections: Array<{
    name: string;
    map: string;
  }> = [
    {
      name: "View Master Plan",
      map: maps[0]
    },
    {
      name: "1. Arrival Zone",
      map: maps[1],
    },
    {
      name: "2. Recreational Zone",
      map: maps[2],
    },
    {
      name: "3. Active Zone",
      map: maps[3],
    },
    {
      name: "4. Fun & Entertainment",
      map: maps[4],
    },
    {
      name: "5. Sports Zone",
      map: maps[5],
    },
    {
      name: "6. Serenity Walk",
      map: maps[6],
    },
    {
      name: "7. Under Serenity Walk",
      map: maps[7],
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0); // Initialize with first item selected

  return (
    <div className="w-full bg-primary relative p-[64px_36px] 2xl:p-[20px_400px] gap-[44px] flex flex-col">
      <motion.h1 initial={initialVariant} whileInView={viewVariant} viewport={viewPortVariant} transition={transitionVariant} className={"font-boskaMedium ml-[70px] text-[64px] lg:text-[96px] text-secondary"}>
        Masterfully Planned
      </motion.h1>

      {/* Map Section */}
      <div className="outline-2 outline-border rounded-[20px] h-max lg:h-[678px] flex flex-col lg:flex-row items-start w-[90%] xl:w-[90%] self-center">
        {/* Names */}
        <div className="flex flex-wrap lg:flex-col lg:items-start lg:w-[40%]">
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setSelectedIndex(index);
                }}
                className={`p-[8px_12px] lg:p-[12px_30px] ${selectedIndex === index ? 'bg-secondary/85 text-primary' : 'bg-transparent text-secondary'} ${index === 0 && "rounded-tl-[20px]"} ${index === 1 && "max-lg:rounded-tr-[20px]"} hover:bg-secondary/85 hover:text-primary cursor-pointer transition-all duration-200 lg:w-full flex justify-start border-b-1 border-r-1 max-lg:w-1/2 border-border ${manropeFont.className} font-[500] text-[14px] lg:text-[24px]`}
                style={{ 
                  WebkitTapHighlightColor: 'transparent',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                {section.name}
              </div>
            );
          })}
        </div>

        {/* Maps */}
        <div className="relative h-[300px] sm:max-lg:h-[600px] lg:h-full w-full ">
          <Image
            alt={sections[current].name}
            src={sections[current].map}
            fill
            className="object-cover lg:rounded-tr-[20px] lg:rounded-br-[20px] max-lg:rounded-b-[20px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 max-lg:mt-[28px] lg:mt-[32px] w-full">
        <PrimaryButton
          text="Express Interest"
          onTap={() =>{
            document.getElementById("connect-with-us")?.scrollIntoView({behavior:"smooth"})
          }}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] hover:bg-secondary/80 duration-20 ${
            manropeFont.className
          }  bg-secondary/90 text-primary`}
        />
        <SecondaryButton
          onTap={() =>{
             setClicked(!clicked)
             window.open("/assets/certificates/masterPlan.pdf")
          }}
          text="Master plan"
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px]   hover:bg-amber-200/20 duration-200  lg:text-[24px]  ${
            manropeFont.className
          } 
             bg-primary text-secondary
           border-secondary`}
        />
      </div>
    </div>
  );
};

export default MasterfullyPlanned;