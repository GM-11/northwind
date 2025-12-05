// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window === "undefined") return;

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // run once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (typeof document === "undefined") return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-sky-light/95 backdrop-blur-md shadow-md" : "bg-sky-light/80 backdrop-blur-sm"
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            <Link href="/landingPage" className="flex items-center gap-2">
              <div className="relative w-30 h-16 sm:w-100 sm:h-40 md:w-40 md:h-10 mx-auto">
                            
                                <Image
                                  src="/assets/headerLogo.svg"   
                                  alt="North Wind Estates Logo"
                                  fill
                                  className="object-cover "
                                  priority
                                />
                             
                              
                            </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-black ">
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium  text-primary hover:text-white transition-colors"
              >
                About
              </button>

              {/* Team (navigation) - use Link styled to look like your Button variant */}
              <Link
                href="/teams"
                className="text-sm font-medium inline-flex items-center px-3 py-1 rounded hover:text-primary"
              >
                <span className="sr-only">Go to Teams</span>
                <span className="text-sm font-medium hover:text-white text-primary">Team</span>
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground  hover:text-white  transition-colors"
              >
                Connect with us
              </button>

              <Link
                href="/blogs"
                className="inline-flex items-center text-sm font-medium hover:text-primary"
              >
                <span className="text-sm font-medium text-foreground hover:text-white">Blogs</span>
              </Link>

              {/* Explore Project - real Button (action) */}
              <Button
                onClick={() => scrollToSection("project")}
                className="bg-teal-darker text-white bg-teal-dark rounded-full px-6 text-sm"
              >
                Explore Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu (drawer) */}
      <AnimatePresence>
        {isMounted && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 bg-background shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              <div className="flex flex-col gap-6">
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
                >
                  About
                </button>

                <Link
                  href="/teams"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-black hover:text-primary transition-colors text-left py-2 w-full"
                >
                  Team
                </Link>

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2"
                >
                  Connect with us
                </button>

                <Link
                  href="/blogs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left py-2 w-full"
                >
                  Blogs
                </Link>

                <div className="mt-4">
                  <Button
                    onClick={() => scrollToSection("project")}
                    className="bg-teal text-white hover:bg-teal-dark rounded-full px-8 py-6 text-base w-full"
                  >
                    Explore Project
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMounted && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
