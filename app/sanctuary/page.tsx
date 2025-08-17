"use client";

import { useEffect, useRef, useState } from "react";
import AboutArchitect from "../components/AboutArchitect";
import ConnectWithUs from "../components/ConnectWithUs";
import ConstructionUpdates from "../components/ConstructionUpdates";
import Hero from "../components/Hero";
import MasterfullyPlanned from "../components/MasterfullyPlanned";
import NavBar from "../components/NavBar";
import SustainablyDesigned from "../components/SustainablyDesigned";
import { Footer } from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import Disclaimer from "../components/Disclaimer";
import PreLoader from "../components/PreLoader";
import Chatbot from "../components/Chatbot";
import TowersIcon from "@/components/icons/TowersIcon";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fullHeight, setFullHeight] = useState<boolean>(false);
  const [isPreLoaderVisible, setIsPreLoaderVisible] = useState<boolean>(true);
  const [purpose, setPurpose] = useState<string | null>("main");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPurpose = localStorage.getItem("purpose");
      setPurpose(savedPurpose);
      if (savedPurpose === "form") {
        setIsPreLoaderVisible(false);
        setFullHeight(true);

        setTimeout(() => {
          document
            .getElementById("connect-with-us")
            ?.scrollIntoView({ behavior: "smooth" });
          localStorage.setItem("purpose", "main");
        }, 100);
      } else if (purpose === "architect") {
        console.log("via architect");

        setIsPreLoaderVisible(false);
        setFullHeight(true);

        setTimeout(() => {
          document
            .getElementById("about-architect")
            ?.scrollIntoView({ behavior: "smooth" });
          localStorage.setItem("purpose", "main");
        }, 100);
      }
    }
  }, [purpose]);

  return (
    <div
      ref={ref}
      className={`w-screen ${
        fullHeight ? "h-screen" : ""
      } overflow-x-hidden relative`}
    >
      <PreLoader
        initial={purpose === "main"}
        callback={() => {
          setIsPreLoaderVisible(false);
          setFullHeight(true);
        }}
      />
      <NavBar isPreLoaderVisible={isPreLoaderVisible} />
      <Hero isPreLoaderVisible={isPreLoaderVisible} />

      <ImageGallery />
      <MasterfullyPlanned />
      <ConstructionUpdates />
      <SustainablyDesigned />
      <ConnectWithUs />
      <AboutArchitect />
      <Disclaimer />
      <Footer />
      <Chatbot isPreLoaderVisible={isPreLoaderVisible} />
      <div
        className={`fixed bottom-8 right-10 max-sm:right-2 cursor-pointer z-[9999999] ${
          isPreLoaderVisible && "hidden"
        }`}
        onClick={() => {
          window.open("/towers", "auto");
        }}
      >
        <TowersIcon />
      </div>
    </div>
  );
}
