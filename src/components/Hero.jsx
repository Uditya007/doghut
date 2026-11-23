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

const fireflies = [
  { id: 1, x: '-15%', y: '10%', size: 5, driftX: 18, driftY: 22, duration: 3.8, delay: 0.1 },
  { id: 2, x: '10%', y: '-20%', size: 4, driftX: -14, driftY: 18, duration: 4.2, delay: 0.8 },
  { id: 3, x: '45%', y: '-25%', size: 6, driftX: 20, driftY: -16, duration: 3.4, delay: 1.5 },
  { id: 4, x: '85%', y: '-15%', size: 4, driftX: -16, driftY: 20, duration: 4.5, delay: 0.4 },
  { id: 5, x: '108%', y: '15%', size: 6, driftX: 14, driftY: -22, duration: 3.6, delay: 1.2 },
  { id: 6, x: '112%', y: '55%', size: 4, driftX: -18, driftY: 15, duration: 4.0, delay: 2.1 },
  { id: 7, x: '95%', y: '90%', size: 5, driftX: 16, driftY: -18, duration: 3.5, delay: 0.6 },
  { id: 8, x: '60%', y: '105%', size: 4, driftX: -15, driftY: -20, duration: 4.8, delay: 1.9 },
  { id: 9, x: '25%', y: '110%', size: 6, driftX: 18, driftY: 16, duration: 3.9, delay: 0.3 },
  { id: 10, x: '-10%', y: '85%', size: 4, driftX: -14, driftY: -18, duration: 4.4, delay: 1.7 },
  { id: 11, x: '-20%', y: '50%', size: 5, driftX: 15, driftY: 14, duration: 3.7, delay: 2.4 },
  { id: 12, x: '20%', y: '30%', size: 3, driftX: 10, driftY: -12, duration: 3.2, delay: 0.9 },
  { id: 13, x: '75%', y: '35%', size: 4, driftX: -12, driftY: 14, duration: 4.1, delay: 1.4 },
  { id: 14, x: '50%', y: '70%', size: 3, driftX: 12, driftY: -10, duration: 3.6, delay: 2.0 },
];

const sparkles = [
  { id: 1, x: '5%', y: '-10%', size: 14, duration: 2.8, delay: 0.2 },
  { id: 2, x: '92%', y: '5%', size: 16, duration: 3.2, delay: 1.1 },
  { id: 3, x: '105%', y: '75%', size: 12, duration: 2.6, delay: 1.8 },
  { id: 4, x: '-8%', y: '70%', size: 15, duration: 3.0, delay: 0.7 },
  { id: 5, x: '50%', y: '-15%', size: 13, duration: 2.9, delay: 1.5 },
];

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
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/hero-friends.webp')` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand/60 via-brand/75 to-brand/85" />
      </motion.div>

      {/* Hanging Festive String Bulbs in Upper Area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
        className="absolute top-0 inset-x-0 z-10 pointer-events-none select-none flex justify-center overflow-hidden"
      >
        <img
          src="/images/string-lights.webp"
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
          {/* Warm Ambient Logo Aura */}
          <div className="absolute inset-0 -m-8 sm:-m-12 rounded-full bg-gradient-radial from-amber-400/20 via-amber-500/10 to-transparent blur-2xl pointer-events-none" />

          {/* Fireflies floating and glittering around the logo */}
          <div className="absolute inset-0 pointer-events-none select-none">
            {fireflies.map((f) => (
              <motion.span
                key={f.id}
                style={{ left: f.x, top: f.y, width: f.size, height: f.size }}
                className="absolute rounded-full"
                animate={{
                  x: [0, f.driftX, -f.driftX * 0.7, 0],
                  y: [0, -f.driftY, f.driftY * 0.6, 0],
                  opacity: [0.15, 0.95, 0.3, 1, 0.2],
                  scale: [0.7, 1.35, 0.85, 1.25, 0.7],
                }}
                transition={{
                  duration: f.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: f.delay,
                }}
              >
                <span className="block w-full h-full rounded-full bg-amber-100 shadow-[0_0_6px_#fde047,0_0_12px_#f59e0b,0_0_20px_#d97706]" />
              </motion.span>
            ))}

            {/* Glittering Sparkles */}
            {sparkles.map((s) => (
              <motion.div
                key={s.id}
                style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
                className="absolute pointer-events-none"
                animate={{
                  scale: [0, 1.2, 0],
                  rotate: [0, 90, 180],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: s.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: s.delay,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.95)]"
                >
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </motion.div>
            ))}
          </div>

          <img
            src="/doghut-logo-transparent.png"
            alt="दोghut"
            className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none relative z-10"
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
