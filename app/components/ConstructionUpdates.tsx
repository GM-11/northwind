"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { ConstructionArrow} from "@/components/icons/ConstructionArrow";
import VideoCircle from "@/components/icons/VideoCircle";
import { AnimatePresence, motion } from "framer-motion";
import { manropeFont } from "@/utils/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { useMotionVariants } from "@/utils/motionVariant";
import { useFullImageStore } from "@/stores/useFullImageStore";
import FullImage from "./FullImage";
import WatchSite from "./WatchSite";
import { LeftArrow } from "@/components/icons/LeftArrow";

const ConstructionUpdates = () => {
  const { setDisplay, display } = useFullImageStore(); //custom hook with store
  const { initialVariant, viewVariant, transitionVariant, viewPortVariant } =
    useMotionVariants();
  const [show, setShow] = useState<boolean>(false);

  const [current, setCurrent] = useState<number>(0);

  const [caraouselIndex, setCaraouselIndex] = useState<number>(0);

  const [showSiteVideo, setShowSiteVideo] = useState<boolean>(false);

  const handlePrev = () => {
    //handler
    if (caraouselIndex > 0) setCaraouselIndex(caraouselIndex - 1);
  };

  const handleNext = () => {
    if (caraouselIndex < 4) setCaraouselIndex(caraouselIndex + 1);
  };

  const listOfUpdates = [
    [
      " Raft work completed",
      " Basement coloumns completed",
      " Retaining wall completed ",
    ],

    [
      " Raft work completed",
      " Retaining wall in progressRetaining wall in progress",
      " Column work in progress",
      ,
    ],

    [
      " raft work completed",
      " Retaining wall in progressRetaining wall in progress",
      " basement slab work in progress",
    ],
  ];

  const listOfTowers = ["Amaltas", "Banyan", "Cedar"];
  return (
    <div
      className={`w-full relative p-[64px_24px] custom580:p-[64px_80px] bg-secondary lg:p-[100px_100px] 2xl:p-[100px_400px] flex flex-col gap-[36px] z-[998] ${
        display && "overflow-hidden"
      }`}
    >
      <div
        className={`flex flex-col justify-center ${
          (display || showSiteVideo) && "brightness-50"
        }`}
      >
        <motion.h1
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className="font-boskaMedium text-primary text-[48px] lg:text-[96px] z-20 leading-none"
        >
          Construction updates
        </motion.h1>
        <motion.p
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`${manropeFont.className} text-[24px] lg:text-[32px] text-primary mt-[12px]`}
        >
          Stay updated on our progress
        </motion.p>
      </div>

      <div
        className={`${
          (display || showSiteVideo) && "brightness-50"
        } w-full relative flex justify-center gap-1 items-center`}
      >
        <ConstructionArrow
          onClick={handlePrev}
          className="text-primary cursor-pointer absolute left-0.5 top-1/2 z-[9999]"
        />
        <div className="w-full overflow-x-hidden flex justify-center rounded-[15px]">
          <div
            style={{
              transform: `translateX(-${(caraouselIndex) * 100}%)`,
            }}
            className="flex gap-[8px] w-full max-lg:h-[400px] lg:h-[800px] rounded-[15px] transition-transform relative duration-200"
          >
            <motion.div className="relative size-full rounded-[15px] shrink-0"
             initial={initialVariant}
             whileInView={viewVariant}
             viewport={viewPortVariant}
             transition={transitionVariant}>
              <Image
                onClick={() => setDisplay("/assets/construction1.jpg")}
                src={"/assets/construction1.jpg"}
                fill
                className={`rounded-[15px]  cursor-pointer`}
                alt="building-2"
              />
              <div className="bg-gradient-to-r from-black/80 via-transparent to-black/80 absolute w-full h-full z-[9999]" />
            </motion.div>

            <div className="relative size-full rounded-[15px] shrink-0">
              <Image
                onClick={() => setDisplay("/assets/construction1.jpg")}
                src={"/assets/construction2.jpg"}
                fill
                className={`rounded-[15px] cursor-pointer`}
                alt="building-2"
              />
              <div className="bg-gradient-to-r from-black/80 via-transparent to-black/80 absolute w-full h-full z-[9999]" />
            </div>

            <div className="relative size-full rounded-[15px] shrink-0">
              <Image
                onClick={() => setDisplay("/assets/construction1.jpg")}
                src={"/assets/construction3.jpg"}
                fill
                className={`rounded-[15px]  cursor-pointer`}
                alt="building-2"
              />
              <div className="bg-gradient-to-r from-black/80 via-transparent to-black/80 absolute w-full h-full z-[9999]" />
            </div>


            <div className="relative size-full rounded-[15px] shrink-0">
              <Image
                onClick={() => setDisplay("/assets/construction1.jpg")}
                src={"/assets/construction4.jpg"}
                fill
                className={`rounded-[15px]  cursor-pointer`}
                alt="building-2"
              />
              <div className="bg-gradient-to-r from-black/80 via-transparent to-black/80 absolute w-full h-full z-[9999]" />
            </div>

          </div>
        </div>
        <ConstructionArrow
          onClick={handleNext}
          className="rotate-180 text-primary cursor-pointer absolute right-0.5 top-1/2 z-[9999]"
        />
      </div>

      <div
        className={`py-[24px] ${
          (display || showSiteVideo) && "brightness-50"
        }`}
      >
        <div className="backdrop-blur-[40px] p-[20px_20px] rounded-[12px] border border-input text-primary relative">
          <div className="flex max-md:flex-col lg:items-center w-full justify-between">
            <h1
              className={`${manropeFont.className} text-[24px] lg:text-[32px]`}
            >
              Latest Update
            </h1>

            <div className="flex flex-col relative">
              <div
              onClick={() => setShow(!show)}
              className={`rounded-full p-3 max-md:mt-[24px] max-w-[300px] sm:min-w-[250px] f-c-row gap-3 backdrop-blur-3xl cursor-pointer text-[20px] bg-input ${manropeFont.className} font-[500]`}
            >
              {listOfTowers[current]}
              <LeftArrow
                className={`text-primary -rotate-90 mb-1 ${
                  show && "rotate-90 mt-[10px] mb-0"
                }`}
              />
            </div>

            <AnimatePresence>
              {show && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.2,
                  }}
                  className={`bg-input ${manropeFont.className} z-[999999] f-c-col mt-[10px] rounded-2xl max-w-[300px] sm:min-w-[250px] md:absolute top-20 left-0`}
                >
                  <div
                    onClick={() => {
                      setCurrent(0);
                      setShow(false);
                    }}
                    className="hover:bg-input/80 w-full max-md:active:bg-input/50 f-c-row p-2 cursor-pointer rounded-t-2xl"
                  >
                    Amaltas
                  </div>
                  <div
                    onClick={() => {
                      setCurrent(1);
                      setShow(false);
                    }}
                    className="hover:bg-input/80 w-full  max-md:active:bg-input/50 f-c-row p-2 cursor-pointer"
                  >
                    Banyan
                  </div>
                  <div
                    onClick={() => {
                      setCurrent(2);
                      setShow(false);
                    }}
                    className="hover:bg-input/80 w-full  max-md:active:bg-input/50 f-c-row p-2 cursor-pointer rounded-b-2xl"
                  >
                    Cedar
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </div>

          <ul
            className={`mt-[24px] list-disc text-primary text-[20px] lg:text-[24px] ${manropeFont.className} ml-5`}
          >
            {listOfUpdates[current].map((update, index) => {
              return <li key={index}>{update}</li>;
            })}
          </ul>
        </div>
      </div>

      <div
        className={`${
          (display || showSiteVideo) && "brightness-50"
        } flex flex-col items-center md:flex-row md:justify-center gap-5 mt-[50px] w-full`}
      >
        <PrimaryButton
          text="Sign up for updates"
          onTap={() => {
            document
              .getElementById("connect-with-us")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`p-[20px_40px] max-lg:w-[90%] lg:p-[20px_40px] text-[16px] lg:text-[24px] hover:bg-primary/80 durantion:200 ${manropeFont.className} bg-primary text-secondary
          `}
        />
        <SecondaryButton
          text="Watch site video"
          icon={<VideoCircle />}
          onTap={() => {
            setShowSiteVideo(true);
          }}
          className={`p-[20px_40px] max-lg:w-[90%] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} text-primary   hover:bg-primary/80 durantion:200 bg-transparent border
           border-primary`}
        />
      </div>
      <FullImage />
      <WatchSite display={showSiteVideo} setDisplay={setShowSiteVideo} />
    </div>
  );
};

export default ConstructionUpdates;
