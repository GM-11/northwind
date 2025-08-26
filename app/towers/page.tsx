"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AmaltasTower from "./components/AmaltasTower";
import BanyanTower from "./components/BanyanTower";
import CedarTower from "./components/CedarTower";
import useIsMobile from "@/hooks/useIsMobile";
import NavBar from "../components/NavBar";
import Preloading from "./components/Preloading";

const Towers = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  // Always show Preloading at the center of the screen
  // (This will render it above everything else)
  const preloadingOverlay = (
    <div className="fixed inset-0 flex items-end justify-center z-50 pointer-events-none">
      <Preloading />
    </div>
  );
  const { isMobile } = useIsMobile(768);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<number>(-1);
  const [canvasSize, setCanvasSize] = useState({ width: 1920, height: 1080 });
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);


  const components = [
    <AmaltasTower key="amaltas" />,
    <BanyanTower key="banyan" />,
    <CedarTower key="cedar" />,
    <Preloading key="preloading" />,
  ];

  const { scrollYProgress } = useScroll();

  // Ye useEffect canvas size update krne ke lie taaki zoom pr bhi frames thik dikhe
  useEffect(() => {
    const updateCanvasSize = () => {
      if (ref.current && containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const canvas = ref.current;

        const dpr = window.devicePixelRatio || 1;

        // Set the display size (css pixels)
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.scale(dpr, dpr);
        }

        setCanvasSize({ width: rect.width, height: rect.height });
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  // Ye useEffect frames load krne ke lie
  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const loadPromises: Promise<void>[] = [];

      for (let i = 1; i <= 240; i++) {
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject();
          
          img.src = isMobile ? `/assets/videos/towers/mobile/${i}.webp` : `/assets/videos/towers/${i}.webp`;
          loadedImages.push(img);
        });
        loadPromises.push(promise);
      }

      try {
        await Promise.allSettled(loadPromises);
        setImages(loadedImages);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [isMobile]);


  // ye callback canvas pr frames draw krne ke lie
  const render = useCallback(
    (index: number) => {
      if (!imagesLoaded || !images[index - 1] || !ref.current) return;

      const canvas = ref.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

        const img = images[index - 1];
        if (img.complete && img.width > 0 && img.height > 0) {
          const canvasAspect = canvasSize.width / canvasSize.height;
          const imgAspect = img.width / img.height;

          let drawWidth, drawHeight, offsetX, offsetY;

          if (canvasAspect > imgAspect) {
            drawWidth = canvasSize.width;
            drawHeight = drawWidth / imgAspect;
            offsetX = 0;
            offsetY = (canvasSize.height - drawHeight) / 2;
          } else {
            drawHeight = canvasSize.height;
            drawWidth = drawHeight * imgAspect;
            offsetX = (canvasSize.width - drawWidth) / 2;
            offsetY = 0;
          }

          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      }
    },
    [images, imagesLoaded, canvasSize]
  );

  // YE AAPKA FORWARD AUR REVERSE SCROLLING KE LIE, 0-1 pr 1-240 tk and 1-0 pr 240-1 tk, iska ye matlab h.
  // useTransform maps [0, 1] which is scrolling range to [1, 240] which is frames range.
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 240]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (!imagesLoaded) return;

    const frameIndex = Math.round(Number(latest));
    render(frameIndex);

    if (frameIndex >= 50 && frameIndex < 130) {
      setCurrent(0);
    } else if (frameIndex >= 130 && frameIndex < 180) {
      setCurrent(1);
    } else if (frameIndex >= 180 && frameIndex <= 240) {
      setCurrent(2); 
    } else {
      setCurrent(-1);
    }
  });


  // ye first frame jo 3 buildings ka h, use load krne ke lie
  useEffect(() => {
    if (imagesLoaded) {
      render(1);
    }
  }, [render, imagesLoaded]);

  // ye bas dekhne ke lie h console me scroll ke hissab se kon sa frame live hai abhi.
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", () => {
    });
    return unsubscribe;
  }, [scrollYProgress]);
  return (
    <div
      ref={scrollContainerRef}
      className={`w-screen h-[500vh] relative`}
    >
      <NavBar />
      <div
        ref={containerRef}
        className="w-screen h-screen bg-secondary sticky top-0"
      >
        

        <canvas
          ref={ref}
          className="w-full h-full object-cover"
        />

        <AnimatePresence mode="wait">
          {current >= 0 && imagesLoaded && (
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 z-10"
            >
              {components[current]}
            </motion.div>
          )}
        </AnimatePresence>

        
      </div>
      {/* Show Preloading overlay while images are loading */}
      {imagesLoaded && preloadingOverlay}
    </div>
  );
};

export default Towers;
