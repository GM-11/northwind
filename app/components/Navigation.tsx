"use client";

import { AnimatePresence, motion } from "framer-motion";
import Cross from "@/components/icons/Cross";
import React, { useEffect } from "react";     //we have removed useref from here

const Navigation = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  useEffect(() => {
    setShow(show);
  }, [show]);

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: -200,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -200,
          }}
          transition={{
            duration: 0.3,
            type: "tween",
          }}
          className={`fixed z-[999] max-h-screen flex flex-col justify-between pl-3 lg:pl-20 pr-5 py-4 inset-0 bg-[url("/assets/nav-logo.svg")] w-full bg-secondary bg-right-top bg-no-repeat`}
        >
          <div
            onClick={() => {
              setShow(false);
            }}
            className="self-start lg:self-end p-2 rounded-xl cursor-pointer"
          >
            <Cross />
          </div>

          {/* Elements */}
          <div className="flex flex-col gap-[12px] lg:gap-[16px] border-primary self-start">
            <div onClick={() => {
                setShow(false);
                window.open("/", "_self");
                localStorage.setItem("purpose", "main")
              }} className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer">
              home
            </div>
            <div
              onClick={() => {
                setShow(false);
               window.open("/towers", "_self")
              }}
              className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer"
            >
              towers
            </div>
            <div
              onClick={() => {
                window.open("/amenities", "_self")
              }}
              className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer"
            >
              amenities
            </div>
            <div
              onClick={() => {
                setShow(false);
                window.open("/", "_self")
                localStorage.setItem("purpose", "architect");
                document.getElementById("about-architect")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer"
            >
              about architect
            </div>

            <div  onClick={()=>{
              window.open("https://northwindestates.com/")
            }}  className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer">
              about developer
            </div>
            <div
              onClick={() => {
                setShow(false);
               document.getElementById("connect-with-us")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer"
            >
              connect with us
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
