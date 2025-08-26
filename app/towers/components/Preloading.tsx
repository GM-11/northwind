"use client";

import { motion } from "framer-motion";

import { manropeFont } from "@/utils/fonts";

const Preloading = () => {

  return (
    
          <div className="flex flex-col items-center cursor-pointer gap-[5px] pointer-events-auto group">
            <div className="rounded-full w-7 h-12 border-[3px] border-secondary flex justify-center items-center">
              <motion.div
              initial={{ y: 0, opacity: 0.7 }}
              animate={{ y: 20, opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="w-[3px] h-[10px] bg-secondary rounded-xl"
              />
            </div>
            <h1
              className={`text-[15px] ${manropeFont.className} group-hover:text-primary text-secondary transition-colors duration-300`}
            >
              Scroll down
            </h1>
          </div>
        
  );
};

export default Preloading;
