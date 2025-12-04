import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
      >
        
        
          <div className="sticky top-0 h-[100vh] w-full z-0">
        <video
          className="object-cover h-full w-full"
          muted
          autoPlay
          loop
          playsInline
          src={"/assets/videos/heroVideo1.mp4"}
        />
      </div>
          <div className="absolute inset-0 bg-gradient-to-b from-sky-light/30 via-transparent to-background/20"></div>
        
      </motion.div>
      
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide mb-4">
            NORTH WIND
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl tracking-[0.3em] text-white/90">
            ESTATES
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
