"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import HamBurger from "@/components/icons/HamBurger";
import React, { useState } from "react";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

const NavBar = ({ isPreLoaderVisible }: { isPreLoaderVisible: boolean }) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return (
    <>
      <motion.header initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: isPreLoaderVisible ? 0 : 1,
        y: isPreLoaderVisible ? -20 : 0
      }} transition={{
        duration: 0.2,
        type: "tween"
      }} className={`bg-primary/80 z-[999] w-full px-[17px] py-[8px] fixed top-0 left-0 flex items-center justify-between backdrop-blur-md shadow-md`}>
        <div onClick={() => setShowNavigation(true)}>
          <HamBurger />
        </div>

        <PrimaryButton
          onTap={() => {
            document
              .getElementById("connect-with-us")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          text="Enquire Now"
          className="p-[12px_36px] max-sm:hidden"
        />
      </motion.header>

      
      <main className="pt-[80px]">
        <Navigation show={showNavigation} setShow={setShowNavigation} />
      </main>
    </>
  );
};

export default NavBar;
