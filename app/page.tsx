"use client";

import { useRef, useState } from "react";
import AboutArchitect from "./components/AboutArchitect";
import ConnectWithUs from "./components/ConnectWithUs";
import ConstructionUpdates from "./components/ConstructionUpdates";
import Hero from "./components/Hero";
import MasterfullyPlanned from "./components/MasterfullyPlanned";
import NavBar from "./components/NavBar";
import SustainablyDesigned from "./components/SustainablyDesigned";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import Disclaimer from "./components/Disclaimer";
import PreLoader from "./components/PreLoader";
import Chatbot from "./components/Chatbot";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fullHeight, setFullHeight] = useState<boolean>(false);
  const [isPreLoaderVisible, setIsPreLoaderVisible] = useState<boolean>(true);
  return (
    <div ref={ref} className={`w-screen ${fullHeight && "h-screen"} overflow-x-hidden relative`}>
      <PreLoader callback={() => {
        setIsPreLoaderVisible(false);
        setFullHeight(true);
      }} />
      <NavBar isPreLoaderVisible={isPreLoaderVisible}/>
      <Hero isPreLoaderVisible={isPreLoaderVisible} />
      <ImageGallery />
      <MasterfullyPlanned />
      <ConstructionUpdates ref={ref}/>
      <SustainablyDesigned />
      <ConnectWithUs />
      <AboutArchitect />
      <Disclaimer />
      <Footer />
      <Chatbot isPreLoaderVisible={isPreLoaderVisible} />
    </div>
  );
}
