import { motion } from "framer-motion";

import Image from "next/image";


const MotionImage = motion(Image); ////very important to avoid name conflict


const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-light/20 via-transparent to-mint-light/20 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6"
            >
              North Wind Estates
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-primary font-medium mb-6 sm:mb-8"
            >
              "Breeze of Change"
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base"
            >
              <p>
                It is a statement of refined living. Built on the foundation of trust,
                transparency, and timeless design, the estate represents a
                commitment to creating spaces that blend luxury with
                functionality.
              </p>
              <p>
                Every detail at North Wind Estate is curated with
                precision - from the architectural planning to the finishing touches.
                The focus is not only on building structures but on designing a
                community that resonates with elegance, comfort, and long-term
                value.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center h-100vh"
          >
          <video
          className="object-cover h-[500px] rounded-lg shadow-elevated"
          muted
          autoPlay
          loop
          playsInline
          src={"/assets/videos/verticalLoader.mp4"}
        />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
