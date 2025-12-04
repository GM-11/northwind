// src/components/PreLoader.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  /** Called after preloader fades out and main content should show */
  onFinish?: () => void;
  /** Duration (in seconds) the preloader should remain visible after playback starts */
  durationSeconds?: number;
  /** Path under public/ for the video file (default: /preloader.mp4) */
  src?: string;
  /** If true, video will be muted to allow autoplay on mobile/browsers */
  muted?: boolean;
}

export default function PreLoader({
  onFinish,
  durationSeconds = 5,
  src = "/assets/videos/preLoaderF.mp4",
  muted = true,
}: PreloaderProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(true); // controls AnimatePresence
  const hideTimeoutRef = useRef<number | null>(null);
  const finishTimeoutRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    let startedAt = 0;

    const startTimerAfterStart = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      startedAt = Date.now();

      // Ensure we wait exactly durationSeconds from start
      const ms = Math.max(0, durationSeconds * 1000);
      // Clear any existing
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = window.setTimeout(() => {
        // Trigger fade-out
        setIsVisible(false);
      }, ms);
    };

    // If video element exists, try to play it (autoplay may be blocked)
    if (video) {
      // If the video is already playing or ready, start the timer immediately
      if (!video.paused) {
        startTimerAfterStart();
      }

      // Listen for play event to start the timer
      const onPlay = () => startTimerAfterStart();
      const onCanPlay = () => {
        // Try to play so that onPlay fires (some browsers require user gesture otherwise)
        const p = video.play();
        if (p && typeof p.catch === "function") {
          p.catch(() => {
            // autoplay blocked — still start timer visually (fallback)
            startTimerAfterStart();
          });
        }
      };

      video.addEventListener("play", onPlay);
      video.addEventListener("canplay", onCanPlay);

      // attempt to autoplay immediately
      const tryPlay = async () => {
        try {
          await video.play();
          // play succeeded -> will trigger onPlay
        } catch (err) {
          // autoplay failed; still start the timer visually so preloader doesn't hang
          startTimerAfterStart();
        }
      };

      tryPlay();

      return () => {
        video.removeEventListener("play", onPlay);
        video.removeEventListener("canplay", onCanPlay);
        if (hideTimeoutRef.current) {
          window.clearTimeout(hideTimeoutRef.current);
        }
      };
    } else {
      // No video element (unlikely) — fallback to duration timer
      if (!startedRef.current) {
        startedRef.current = true;
        hideTimeoutRef.current = window.setTimeout(() => setIsVisible(false), durationSeconds * 1000);
      }

      return () => {
        if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
      };
    }
  }, [durationSeconds]);

  // When isVisible becomes false (fade-out starts), wait for exit animation to finish then call onFinish
  useEffect(() => {
    if (!isVisible) {
      // duration should match motion.div exit duration below (0.7s)
      finishTimeoutRef.current = window.setTimeout(() => {
        onFinish?.();
      }, 750);
    }

    return () => {
      if (finishTimeoutRef.current) {
        window.clearTimeout(finishTimeoutRef.current);
      }
    };
  }, [isVisible, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          aria-hidden="true"
        >
          {/* Video element fills the screen */}
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            playsInline
            muted={muted}
            // don't loop — we rely on duration
            preload="auto"
            // prevent controls from showing
            controls={false}
          />
          {/* optional overlay content (logo/text) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* If you want to show logo over video, enable below */}
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
