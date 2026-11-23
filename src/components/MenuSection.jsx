import React from 'react';
import { motion } from 'framer-motion';

const beverageItems = [
  {
    id: 1,
    name: 'Do Ghut Dum Tea',
    notes: 'RICH / AROMATIC / TIMELESS',
    highlight: 'Real Chai. No Shortcuts.',
  },
  {
    id: 2,
    name: 'Hand Beaten Coffee',
    notes: 'FROTHY / VELVETY / NOSTALGIC',
    highlight: 'Classic Whipped Brew',
  },
];

const specialtyItems = [
  {
    id: 3,
    name: 'Benne Dosa',
    notes: 'CRISPY / BUTTERY GOLDEN / AUTHENTIC',
    highlight: 'Loaded with Pure Butter',
  },
];

const rabdiBuns = [
  {
    id: 4,
    name: 'Multigrain Rabdi Bun',
    notes: 'NUTTY / CREAMY / WHOLESOME',
  },
  {
    id: 5,
    name: 'Chocolate Rabdi Bun',
    notes: 'RICH / INDULGENT / CLASSIC',
  },
  {
    id: 6,
    name: 'Strawberry Rabdi Bun',
    notes: 'FRESH / CREAMY / FRUITY',
  },
  {
    id: 7,
    name: 'Blueberry Rabdi Bun',
    notes: 'TANGY / CREAMY / REFRESHING',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function MenuSection() {
  return (
    <section className="relative bg-beige py-16 md:py-28" id="menu">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

      <div className="container relative z-10 mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative rounded-3xl bg-[#fdfbf7] border-2 border-brand/20 p-5 sm:p-8 md:p-12 shadow-xl shadow-brand/10 overflow-hidden"
        >
          {/* Inner vintage border */}
          <div className="absolute inset-2 sm:inset-3 border border-brand/15 rounded-2xl pointer-events-none" />

          {/* Main Title Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 sm:w-20 bg-brand/30" />
              <h2 className="font-heading text-lg sm:text-2xl tracking-[0.3em] text-brand uppercase font-semibold">
                MENU
              </h2>
              <div className="h-px w-12 sm:w-20 bg-brand/30" />
            </div>
          </div>

          {/* SECTION 1: CHAI & COFFEE */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <h3 className="font-heading text-base sm:text-xl font-bold tracking-[0.25em] text-brand uppercase">
                CHAI & COFFEE
              </h3>
              <div className="h-px flex-1 bg-brand/20" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {beverageItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="group relative rounded-xl bg-beige/60 hover:bg-[#ece4d6] p-3.5 sm:p-4.5 transition-all duration-300 border border-brand/10 hover:border-brand/25 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-semibold text-brand tracking-tight">
                        {item.name}
                      </h4>
                      {item.highlight && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium italic text-brand bg-brand/10 border border-brand/15 font-serif shrink-0">
                          "{item.highlight}"
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-brand/60 uppercase mt-1">
                      {item.notes}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* SECTION 2: SPECIALTIES */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <h3 className="font-heading text-base sm:text-xl font-bold tracking-[0.25em] text-brand uppercase">
                SPECIALTIES
              </h3>
              <div className="h-px flex-1 bg-brand/20" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {specialtyItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="group relative rounded-xl bg-beige/60 hover:bg-[#ece4d6] p-3.5 sm:p-4.5 transition-all duration-300 border border-brand/10 hover:border-brand/25 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-semibold text-brand tracking-tight">
                        {item.name}
                      </h4>
                      {item.highlight && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium italic text-brand bg-brand/10 border border-brand/15 font-serif shrink-0">
                          "{item.highlight}"
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-brand/60 uppercase mt-1">
                      {item.notes}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* SECTION 3: RABDI BUNS */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
              <div className="flex items-center gap-3 flex-1">
                <h3 className="font-heading text-base sm:text-xl font-bold tracking-[0.25em] text-brand uppercase">
                  RABDI BUNS
                </h3>
                <div className="h-px flex-1 bg-brand/20" />
              </div>
              <span className="hidden sm:inline-block text-[11px] font-serif italic text-brand/70 shrink-0">
                "Same Bun. Different Vibes."
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2.5 sm:space-y-3"
            >
              {rabdiBuns.map((bun) => (
                <motion.div
                  key={bun.name}
                  variants={itemVariants}
                  className="group relative rounded-xl bg-beige/60 hover:bg-[#ece4d6] p-3 sm:p-4 transition-all duration-300 border border-brand/10 hover:border-brand/25 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm sm:text-base font-semibold text-brand tracking-tight truncate">
                      {bun.name}
                    </h4>
                    <p className="text-[9px] sm:text-xs font-semibold tracking-wider text-brand/60 uppercase mt-0.5">
                      {bun.notes}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slogan Footer */}
          <div className="text-center pt-5 border-t border-brand/15">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-6 sm:w-12 bg-brand/30" />
              <p className="font-serif italic text-lg sm:text-2xl font-semibold text-brand tracking-wide">
                "Ek Ghut, Mood Set."
              </p>
              <div className="h-px w-6 sm:w-12 bg-brand/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
