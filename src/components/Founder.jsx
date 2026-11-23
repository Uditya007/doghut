import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const storyData = {
  name: 'दोGhut Family',
  tagline: 'Our Story',
  heading: 'Mai hu दोGhut ki chai',
  quote: 'Bol toh paati nahi, batau kese ki apke qaabil bani hu?',
  bio: 'With beloved outlets in Shaheen Bagh (Delhi), Jamia Nagar (Delhi), and Ahmedabad (Gujarat), दोGhut is dedicated to authentic, soul-warming tea and artisanal rabdi buns. Every cup of Irani Dum Tea and every fresh bun is handcrafted with honest tradition and heartfelt hospitality.',
};

const textAnim = {
  hidden: { opacity: 0, y: 25 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Founder() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-brand py-24 md:py-32"
      id="founder"
    >
      {/* Background dotted parallax */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="h-[150%] w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-beige) 1px, transparent 1px),
                              radial-gradient(circle at 80% 50%, var(--color-beige) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
        {/* Brand Logo & Story Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-8 flex flex-col items-center"
        >
          <img
            src="/doghut-logo-transparent.png"
            alt="दोghut"
            className="h-20 sm:h-24 w-auto object-contain mb-4 select-none drop-shadow"
          />
          <span className="inline-block rounded-full bg-beige/10 px-4 py-1.5 text-xs sm:text-sm font-medium tracking-widest uppercase text-beige/90">
            {storyData.tagline}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={textAnim}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="mb-6 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-beige font-normal tracking-tight"
        >
          {storyData.heading}
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="mx-auto mb-8 h-px w-20 bg-beige/30 origin-center"
        />

        {/* Quote */}
        <motion.p
          variants={textAnim}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: true }}
          className="mb-6 text-xl sm:text-2xl md:text-3xl font-serif italic text-beige/95 leading-relaxed max-w-2xl mx-auto"
        >
          "{storyData.quote}"
        </motion.p>

        {/* Story Body */}
        <motion.p
          variants={textAnim}
          initial="hidden"
          whileInView="visible"
          custom={0.5}
          viewport={{ once: true }}
          className="text-beige/75 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          {storyData.bio}
        </motion.p>

        {/* 2 Outlets Badges */}
        <motion.div
          variants={textAnim}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          viewport={{ once: true }}
          className="inline-flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-beige/15"
        >
          <a
            href="#locations"
            className="inline-flex items-center gap-2 rounded-full bg-beige px-5 py-2.5 text-brand text-xs sm:text-sm font-medium shadow hover:bg-white transition-colors duration-300"
          >
            <span>📍 Shaheen Bagh, Delhi</span>
          </a>
          <a
            href="#locations"
            className="inline-flex items-center gap-2 rounded-full bg-beige px-5 py-2.5 text-brand text-xs sm:text-sm font-medium shadow hover:bg-white transition-colors duration-300"
          >
            <span>📍 Jamia Nagar, Delhi</span>
          </a>
          <a
            href="#locations"
            className="inline-flex items-center gap-2 rounded-full bg-beige px-5 py-2.5 text-brand text-xs sm:text-sm font-medium shadow hover:bg-white transition-colors duration-300"
          >
            <span>📍 Ahmedabad, Gujarat</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
