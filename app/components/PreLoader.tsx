"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sign from "@/components/Sign";
import { manropeFont } from "@/utils/fonts";

const PreLoader = ({ callback }: { callback: () => void; }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("in effect");

    document.body.style.overflow = "hidden";

    const handleWheel = (e: Event) => {
      console.log("wheel detected");
      e.preventDefault();
      setVisible(false);
      window.removeEventListener("wheel", handleWheel);
    };

    const handleTouchStart = () => {
      console.log("touch detected");
      setVisible(false);
      window.removeEventListener("touchstart", handleTouchStart);
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);

      document.body.style.overflow = "auto";
    };
  }, []);

  const handlePreLoaderExit = () => {
    callback()
    document.body.style.overflow = "auto";
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handlePreLoaderExit}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-secondary flex flex-col items-center justify-end gap-[420px] py-10 pointer-events-none"
        >
          <Sign />

          <div className="flex flex-col items-center cursor-pointer gap-[5px] pointer-events-auto">
            <div className="rounded-full w-7 h-12 border-[2px] border-primary flex justify-center items-center">
              <motion.div
                initial={{ y: 0, opacity: 0.7 }}
                animate={{ y: 20, opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="w-[3px] h-[10px] bg-primary rounded-xl"
              />
            </div>
            <h1
              className={`text-[15px] ${manropeFont.className} group-hover:text-primary text-secondary transition-colors duration-300`}
            >
              Scroll down
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
