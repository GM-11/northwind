"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { ConstructionArrow } from "@/components/icons/ConstructionArrow";
import VideoCircle from "@/components/icons/VideoCircle";
import { AnimatePresence, motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { manropeFont } from "@/utils/fonts";
import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useMotionVariants } from "@/utils/motionVariant";
import { useFullImageStore } from "@/stores/useFullImageStore";
import FullImage from "./FullImage";
import WatchSite from "./WatchSite";
import { LeftArrow } from "@/components/icons/LeftArrow";
import { useInView } from "react-intersection-observer";

const ConstructionUpdates = () => {
  const { setDisplay, display } = useFullImageStore();
  const { initialVariant, viewVariant, transitionVariant, viewPortVariant } =
    useMotionVariants();

  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);
  const [caraouselIndex, setCaraouselIndex] = useState(0);
  const [showSiteVideo, setShowSiteVideo] = useState(false);

  // Ref for the scroll target
  const sectionRef = useRef(null);

  // Get scroll progress for the entire page
  const { scrollY } = useScroll();
  
  // State to track section position
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  // Calculate section position on mount and resize
  useEffect(() => {
    const updateSectionPosition = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setSectionTop(rect.top + scrollTop);
        setSectionHeight(rect.height);
      }
    };

    updateSectionPosition();
    window.addEventListener('resize', updateSectionPosition);
    return () => window.removeEventListener('resize', updateSectionPosition);
  }, []);

  // Transform scroll position to scale based on section visibility
  const scale = useTransform(scrollY, (latest) => {
    if (!sectionTop || !sectionHeight) return 1;
    
    const windowHeight = window.innerHeight;
    const sectionCenter = sectionTop + sectionHeight / 2;
    const viewportCenter = latest + windowHeight / 2;
    
    // Distance from viewport center to section center
    const distance = Math.abs(viewportCenter - sectionCenter);
    const maxDistance = windowHeight;
    
    // Scale based on how close the section is to the viewport center
    const proximity = Math.max(0, 1 - distance / maxDistance);
    return 0.8 + (proximity * 0.4); // Scale between 0.8 and 1.2
  });

  // Optional: Add opacity transform for fade effect
  const opacity = useTransform(scrollY, (latest) => {
    if (!sectionTop || !sectionHeight) return 1;
    
    const windowHeight = window.innerHeight;
    const sectionBottom = sectionTop + sectionHeight;
    const viewportTop = latest;
    const viewportBottom = latest + windowHeight;
    
    // Check if section is in viewport
    const isInViewport = sectionBottom >= viewportTop && sectionTop <= viewportBottom;
    
    if (!isInViewport) return 0.6;
    
    // Calculate how much of the section is visible
    const visibleTop = Math.max(sectionTop, viewportTop);
    const visibleBottom = Math.min(sectionBottom, viewportBottom);
    const visibleHeight = visibleBottom - visibleTop;
    const visibilityRatio = visibleHeight / Math.min(sectionHeight, windowHeight);
    
    return 0.6 + (visibilityRatio * 0.4); // Opacity between 0.6 and 1
  });

  const controls = useAnimation();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Combine refs
  const combinedRef = useCallback((node) => {
    sectionRef.current = node;
    inViewRef(node);
  }, [inViewRef]);

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  // Wrap carousel navigation
  const handlePrev = useCallback(() => {
    setCaraouselIndex((prev) => (prev === 0 ? 3 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCaraouselIndex((prev) => (prev === 3 ? 0 : prev + 1));
  }, []);

  const listOfUpdates = [
    ["Raft work completed", "Basement columns completed", "Retaining wall completed"],
    ["Raft work completed", "Retaining wall in progress", "Column work in progress"],
    ["Raft work completed", "Retaining wall in progress", "Basement slab work in progress"],
  ];

  const listOfTowers = ["Amaltas", "Banyan", "Cedar"];

  return (
    <motion.div
      ref={combinedRef}
      style={{ 
        scale,
        opacity 
      }}
      animate={controls}
      initial={{ scale: 0.1, opacity: 0 }}
      className={`w-full relative p-[64px_24px] custom580:p-[64px_80px] bg-secondary lg:p-[100px_100px] 2xl:p-[100px_400px] flex flex-col gap-[36px] z-[998] ${
        display ? "overflow-hidden" : ""
      }`}
    >
      {/* Heading */}
      <div className={`flex flex-col justify-center ${(display || showSiteVideo) && "brightness-50"}`}>
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

      {/* Carousel */}
      <div className={`${(display || showSiteVideo) && "brightness-50"} w-full relative flex justify-center items-center`}>
        <ConstructionArrow
          onClick={handlePrev}
          className="text-primary cursor-pointer absolute left-0.5 z-[20]"
        />
        <div className="w-full overflow-hidden flex justify-center rounded-[15px]">
          <motion.div
            style={{ transform: `translateX(-${caraouselIndex * 100}%)` }}
            className="flex gap-[8px] w-full max-lg:h-[300px] lg:h-[800px] rounded-[15px] transition-transform duration-500 ease-in-out"
          >
            {["construction1", "construction2", "construction3", "construction4"].map(
              (img, idx) => (
                <motion.div
                  key={idx}
                  className="relative w-full h-[90%] rounded-[15px] shrink-0"
                  initial={initialVariant}
                  whileInView={viewVariant}
                  viewport={viewPortVariant}
                  transition={transitionVariant}
                >
                  <Image
                    onClick={() => setDisplay(`/assets/${img}.jpg`)}
                    src={`/assets/${img}.jpg`}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-[15px] cursor-pointer"
                    alt={`Construction progress ${idx + 1}`}
                  />
                  <div
                    className="bg-gradient-to-r from-black/50 via-transparent to-black/50 absolute w-full h-full pointer-events-none"
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
        <ConstructionArrow
          onClick={handleNext}
          className="rotate-180 text-primary cursor-pointer absolute right-0.5 z-[20]"
        />
      </div>

      {/* Latest Updates Dropdown */}
      <div className={`py-[24px] ${display || showSiteVideo ? "brightness-50" : ""}`}>
        <div className="backdrop-blur-[40px] p-5 rounded-[12px] border border-input text-primary relative">
          <div className="flex max-md:flex-col lg:items-center w-full justify-between">
            <h1 className={`${manropeFont.className} text-[24px] lg:text-[32px]`}>
              Latest Update
            </h1>

            {/* Dropdown */}
            <div className="flex flex-col relative">
              <button
                onClick={() => setShow(!show)}
                className={`rounded-full p-3 max-md:mt-[24px] max-w-[300px] sm:min-w-[250px] flex items-center justify-between gap-3 backdrop-blur-3xl cursor-pointer text-[20px] bg-input ${manropeFont.className} font-[500]`}
              >
                {listOfTowers[current]}
                <LeftArrow
                  className={`text-primary transition-transform ${show ? "rotate-90" : "-rotate-90"}`}
                />
              </button>

              <AnimatePresence>
                {show && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-input ${manropeFont.className} z-[999999] flex flex-col mt-[10px] rounded-2xl max-w-[300px] sm:min-w-[250px] md:absolute top-20 left-0`}
                  >
                    {listOfTowers.map((tower, idx) => (
                      <div
                        key={tower}
                        onClick={() => {
                          setCurrent(idx);
                          setShow(false);
                        }}
                        className={`hover:bg-input/80 w-full px-4 py-2 cursor-pointer ${
                          idx === 0 ? "rounded-t-2xl" : idx === listOfTowers.length - 1 ? "rounded-b-2xl" : ""
                        }`}
                      >
                        {tower}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Updates list */}
          <ul className={`mt-[24px] list-disc text-primary text-[20px] lg:text-[24px] ${manropeFont.className} ml-5`}>
            {listOfUpdates[current].map((update, index) => (
              <li key={index}>{update}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action buttons */}
      <div className={`${display || showSiteVideo ? "brightness-50" : ""} flex flex-col items-center md:flex-row md:justify-center gap-5 mt-[50px] w-full`}>
        <PrimaryButton
          text="Sign up for updates"
          onTap={() => document.getElementById("connect-with-us")?.scrollIntoView({ behavior: "smooth" })}
          className={`p-[20px_40px] max-lg:w-[90%] text-[16px] lg:text-[24px] hover:bg-primary/80 duration-200 ${manropeFont.className} bg-primary text-secondary`}
        />
        <SecondaryButton
          text="Watch site video"
          icon={<VideoCircle />}
          onTap={() => setShowSiteVideo(true)}
          className={`p-[20px_40px] max-lg:w-[90%] text-[16px] lg:text-[24px] ${manropeFont.className} text-primary hover:bg-primary/80 duration-200 bg-transparent border border-primary`}
        />
      </div>

      <FullImage />
      <WatchSite display={showSiteVideo} setDisplay={setShowSiteVideo} />
    </motion.div>
  );
};

export default ConstructionUpdates;