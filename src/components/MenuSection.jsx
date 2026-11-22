import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

// Exactly 5 items in the entire menu
const chaiItems = [
  {
    id: 1,
    name: 'Hyderabadi Dum Tea',
    price: '₹25',
    notes: 'RICH / AROMATIC / TIMELESS',
    highlight: 'Real Chai. No Shortcuts.',
    image: '/images/food/chai-dum-tea.png',
  },
];

const rabdiBuns = [
  {
    id: 2,
    name: 'Multigrain Rabdi Bun',
    price: '₹80',
    notes: 'NUTTY / CREAMY / WHOLESOME',
    image: '/images/food/bun-multigrain.png',
  },
  {
    id: 3,
    name: 'Chocolate Rabdi Bun',
    price: '₹80',
    notes: 'RICH / INDULGENT / CLASSIC',
    image: '/images/food/bun-chocolate.png',
  },
  {
    id: 4,
    name: 'Strawberry Rabdi Bun',
    price: '₹80',
    notes: 'FRESH / CREAMY / FRUITY',
    image: '/images/food/bun-strawberry.png',
  },
  {
    id: 5,
    name: 'Blueberry Rabdi Bun',
    price: '₹80',
    notes: 'TANGY / CREAMY / REFRESHING',
    image: '/images/food/bun-blueberry.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function MenuSection() {
  return (
    <section className="relative bg-beige py-20 md:py-32" id="menu">
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative rounded-3xl bg-[#fdfbf7] border-2 border-brand/20 p-4 sm:p-10 md:p-14 shadow-2xl shadow-brand/10 overflow-hidden"
        >
          {/* Inner subtle vintage frame */}
          <div className="absolute inset-1.5 sm:inset-3 border border-brand/15 rounded-2xl pointer-events-none" />

          {/* Top Header Row with 2 Outlets */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-brand/70 uppercase gap-2 mb-6 sm:mb-8 border-b border-brand/10 pb-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand shrink-0" />
              CURATED 5-ITEM SIGNATURE MENU
            </span>
            <span className="flex items-center gap-1.5 text-brand">
              <MapPin className="w-3.5 h-3.5 text-brand shrink-0" />
              SHAHEEN BAGH &bull; AHMEDABAD
            </span>
          </div>

          {/* Main Title / Brand Logo Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <img
                src="/images/doghut-logo-transparent.png"
                alt="दोGhunt"
                className="h-12 sm:h-16 w-auto object-contain brightness-0 filter"
                style={{
                  filter:
                    'invert(10%) sepia(80%) saturate(4500%) hue-rotate(335deg) brightness(40%) contrast(100%)',
                }}
              />
              <span className="text-xs font-bold text-brand align-top self-start -ml-1">™</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 sm:w-20 bg-brand/30" />
              <h2 className="font-heading text-lg sm:text-xl tracking-[0.3em] text-brand uppercase font-medium">
                MENU
              </h2>
              <div className="h-px w-12 sm:w-20 bg-brand/30" />
            </div>
          </div>

          {/* SECTION 1: CHAI (Item 1) */}
          <div className="mb-12 sm:mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 flex-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-[0.25em] text-brand uppercase">
                  CHAI
                </h3>
                <div className="h-px flex-1 bg-brand/20" />
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {chaiItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="group relative rounded-2xl bg-beige/80 hover:bg-[#ece4d6] p-5 sm:p-6 transition-all duration-300 border border-brand/10 hover:border-brand/25 shadow-sm hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-brand/5 p-1 flex-shrink-0 border border-brand/15">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-heading text-xl sm:text-2xl font-semibold text-brand tracking-tight">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand/60 uppercase mt-1">
                        {item.notes}
                      </p>
                      {item.highlight && (
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium italic text-brand bg-brand/10 border border-brand/15 font-serif">
                          "{item.highlight}"
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-brand/10 pt-3 sm:pt-0">
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-brand">
                      {item.price}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-brand/50">per kulhad</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* SECTION 2: RABDI BUNS (Items 2 to 5) */}
          <div className="mb-12 sm:mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 flex-1">
                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-[0.25em] text-brand uppercase">
                  RABDI BUNS
                </h3>
                <div className="h-px flex-1 bg-brand/20" />
              </div>
              <span className="hidden sm:inline-block text-xs font-serif italic text-brand/70 pl-4">
                "Same Bun. Different Vibes."
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
            >
              {rabdiBuns.map((bun) => (
                <motion.div
                  key={bun.name}
                  variants={itemVariants}
                  className="group relative rounded-2xl bg-beige/80 hover:bg-[#ece4d6] p-4 sm:p-5 transition-all duration-300 border border-brand/10 hover:border-brand/25 shadow-sm hover:shadow-md flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-brand/5 p-1 flex-shrink-0 border border-brand/15">
                      <img
                        src={bun.image}
                        alt={bun.name}
                        className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-semibold text-brand tracking-tight">
                        {bun.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-brand/60 uppercase mt-0.5">
                        {bun.notes}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0 pl-2">
                    <span className="text-xl sm:text-2xl font-heading font-bold text-brand">
                      {bun.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bun Visual Showcase Row */}
          <div className="mb-10 pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {rabdiBuns.map((bun) => (
                <div
                  key={`showcase-${bun.name}`}
                  className="text-center group bg-beige/60 hover:bg-beige rounded-xl p-3 border border-brand/10 hover:border-brand/30 transition-colors"
                >
                  <div className="w-full aspect-square overflow-hidden rounded-lg mb-2 bg-brand/5 flex items-center justify-center p-1">
                    <img
                      src={bun.image}
                      alt={bun.name}
                      className="w-full h-full object-contain rounded group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[11px] font-heading font-semibold text-brand tracking-wider uppercase line-clamp-1">
                    {bun.name.replace(' Rabdi Bun', '')}
                  </p>
                  <span className="text-[10px] text-brand/50 uppercase tracking-widest font-mono">
                    Rabdi Bun
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Slogan Footer */}
          <div className="text-center pt-6 border-t border-brand/15">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 sm:w-16 bg-brand/30" />
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl font-semibold text-brand tracking-wide">
                "Ek Ghunt, Mood Set."
              </p>
              <div className="h-px w-8 sm:w-16 bg-brand/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
