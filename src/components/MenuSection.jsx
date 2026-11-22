import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

// Exactly 5 items in the curated text menu
const chaiItems = [
  {
    id: 1,
    name: 'Hyderabadi Dum Tea',
    price: '₹25',
    notes: 'RICH / AROMATIC / TIMELESS',
    highlight: 'Real Chai. No Shortcuts.',
  },
];

const rabdiBuns = [
  {
    id: 2,
    name: 'Multigrain Rabdi Bun',
    price: '₹80',
    notes: 'NUTTY / CREAMY / WHOLESOME',
  },
  {
    id: 3,
    name: 'Chocolate Rabdi Bun',
    price: '₹80',
    notes: 'RICH / INDULGENT / CLASSIC',
  },
  {
    id: 4,
    name: 'Strawberry Rabdi Bun',
    price: '₹80',
    notes: 'FRESH / CREAMY / FRUITY',
  },
  {
    id: 5,
    name: 'Blueberry Rabdi Bun',
    price: '₹80',
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

          {/* Top Header Row with Outlets */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-brand/70 uppercase gap-1.5 mb-5 sm:mb-8 border-b border-brand/10 pb-3 sm:pb-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-brand shrink-0" />
              PREMIUM CHAI & RABDI BUNS
            </span>
            <span className="flex items-center gap-1.5 text-brand">
              <MapPin className="w-3 h-3 text-brand shrink-0" />
              SHAHEEN BAGH &bull; AHMEDABAD
            </span>
          </div>

          {/* Main Title / Brand Logo Header */}
          <div className="text-center mb-7 sm:mb-10">
            <div className="inline-flex items-center justify-center gap-1.5 mb-1.5">
              <img
                src="/images/doghut-logo-transparent.png"
                alt="दोGhunt"
                className="h-10 sm:h-14 w-auto object-contain brightness-0 filter"
                style={{
                  filter:
                    'invert(10%) sepia(80%) saturate(4500%) hue-rotate(335deg) brightness(40%) contrast(100%)',
                }}
              />
              <span className="text-[10px] sm:text-xs font-bold text-brand align-top self-start -ml-0.5">™</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-10 sm:w-16 bg-brand/30" />
              <h2 className="font-heading text-sm sm:text-base tracking-[0.3em] text-brand uppercase font-medium">
                MENU
              </h2>
              <div className="h-px w-10 sm:w-16 bg-brand/30" />
            </div>
          </div>

          {/* SECTION 1: CHAI */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <h3 className="font-heading text-base sm:text-xl font-bold tracking-[0.25em] text-brand uppercase">
                CHAI
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
              {chaiItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="group relative rounded-xl bg-beige/60 hover:bg-[#ece4d6] p-3.5 sm:p-4.5 transition-all duration-300 border border-brand/10 hover:border-brand/25 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-semibold text-brand tracking-tight truncate">
                        {item.name}
                      </h4>
                      <span className="text-lg sm:text-xl font-heading font-bold text-brand shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5 sm:mt-1">
                      <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-brand/60 uppercase">
                        {item.notes}
                      </p>
                      {item.highlight && (
                        <span className="inline-block px-2 py-0.2 rounded-full text-[9px] sm:text-[10px] font-medium italic text-brand bg-brand/10 border border-brand/15 font-serif">
                          "{item.highlight}"
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* SECTION 2: RABDI BUNS */}
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
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-heading text-sm sm:text-base font-semibold text-brand tracking-tight truncate">
                        {bun.name}
                      </h4>
                      <span className="text-base sm:text-lg font-heading font-bold text-brand shrink-0">
                        {bun.price}
                      </span>
                    </div>
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
                "Ek Ghunt, Mood Set."
              </p>
              <div className="h-px w-6 sm:w-12 bg-brand/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
