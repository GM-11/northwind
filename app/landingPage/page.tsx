// app/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Preloader from "./src/components/PreLoader";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import About from "./src/components/About";
import Feature from "./src/components/Feature";
import Values from "./src/components/Values";
import MissionVision from "./src/components/MissionVision";
import BrandStory from "./src/components/BrandStory";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

export default function HomePage() {
  // controls when the main content becomes visible
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* Preloader will call onFinish when it's done (see PreLoader implementation) */}
      <Preloader onFinish={() => setShowContent(true)} />

      {/* Main content remains hidden until showContent === true */}
      <motion.div
        // start hidden; animate to visible when showContent flips
        initial={{ opacity: 0, y: 6 }}
        animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        // keep the DOM hidden for screenreaders until visible
        aria-hidden={!showContent}
        className={showContent ? "block" : "pointer-events-none"}
      >
        <div className="min-h-screen">
          <Header />

          <main>
            <Hero />
            <About />
            <Feature />
            <Values />
            <MissionVision />
            <BrandStory />
            <Contact />
          </main>

          <Footer />
        </div>
      </motion.div>
    </>
  );
}
