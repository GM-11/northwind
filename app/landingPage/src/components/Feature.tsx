import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const Feature = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} id="project" className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${"/assets/gallery4.jpg"})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/70 via-transparent to-teal-dark/90"></div>
        </div>
      </motion.div>

      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl ml-auto text-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              A Serene
              <br />
              New Address
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90"
            >
              Discover refined living,
              <br />
              nestled in nature.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="bg-amber-50 border-2 border-black/50 text-black  hover:bg-amber-200/20 duration-200 hover:text-primary rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
            >
              Explore Project
            </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
