"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import HamBurger from "@/components/icons/HamBurger";
import React, { useState } from "react";
import Navigation from "./Navigation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const NavBar = ({
  isPreLoaderVisible,
  className,
}: {
  isPreLoaderVisible?: boolean;
  className?: string;
}) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: isPreLoaderVisible ? 0 : 1,
          y: isPreLoaderVisible ? -20 : 0,
        }}
        transition={{
          duration: 0.2,
          type: "tween",
        }}
        className={`bg-primary w-full px-[17px] z-[99999] max-sm:h-[46px] fixed top-0 left-0 flex items-center justify-between backdrop-blur-md shadow-md ${className}`}
      >
        <div
          onClick={() => {
            setShowNavigation(true);
          }}
        >
          <HamBurger />
        </div>

        <PrimaryButton
          onTap={() => {
            
            localStorage.setItem("purpose", "form");
            router.push("/sanctuary");
            document.getElementById("connect-with-us")?.scrollIntoView({ behavior: "smooth" })
          }}
          text="Enquire Now"
          className="p-[12px_36px] max-sm:hidden text-secondary z-[999999999]"
        />
      </motion.header>

        <Navigation show={showNavigation} setShow={setShowNavigation} />
    </>
  );
};

export default NavBar;
