import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: custom, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.2, delay: 1, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      id="hero"
    >
      {/* Background with Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute inset-0"
        >
          {/* Desktop high quality horizontal background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
            style={{ backgroundImage: `url('/images/hero-store.jpg')` }}
          />
          {/* Mobile crystal sharp portrait background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: `url('/images/hero-store-mobile.jpg')` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand/50 via-brand/70 to-brand/85" />
      </motion.div>

      {/* Hanging Festive String Bulbs in Upper Area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        className="absolute top-0 inset-x-0 z-10 pointer-events-none select-none flex justify-center overflow-hidden"
      >
        <img
          src="/images/string-lights.png"
          alt=""
          className="w-full max-w-7xl h-auto object-cover sm:object-contain object-top max-h-[16vh] sm:max-h-[22vh] md:max-h-[26vh] filter drop-shadow-[0_8px_25px_rgba(255,180,60,0.4)]"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: contentY, scale }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          className="relative mb-6 flex flex-col items-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <img
            src="/doghut-logo-transparent.png"
            alt="दोghut"
            className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none"
          />
          <h1 className="sr-only">दोghut</h1>
        </motion.div>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="text-xl sm:text-2xl md:text-3xl font-heading text-beige font-light tracking-wide max-w-lg px-2"
        >
          Mai hu दोGhut ki chai.
        </motion.p>

        <motion.div
          variants={dividerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-beige/60 to-transparent origin-center"
        />

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3 cursor-pointer"
            onClick={() => {
              document.querySelector('#serve')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-beige/50 font-medium">
              Explore
            </span>
            <div className="relative h-10 w-6 rounded-full border border-beige/30">
              <motion.div
                animate={{ y: [2, 14, 2], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="absolute left-1/2 top-2 h-2 w-1 -translate-x-1/2 rounded-full bg-beige/60"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-20 pointer-events-none" />
    </section>
  );
}
