import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    id: 1,
    name: 'Hyderabadi Dum Tea',
    description: 'Slow-brewed Hyderabadi Dum Tea served in traditional clay kulhads. Real Chai. No Shortcuts.',
    image: '/images/food/chai-dum-tea.png',
  },
  {
    id: 2,
    name: 'Multigrain Rabdi Bun',
    description: 'Nutty, creamy, wholesome. Artisanal multigrain bun loaded with velvety reduced rabdi & pistachio crunch.',
    image: '/images/food/bun-multigrain.png',
  },
  {
    id: 3,
    name: 'Chocolate Rabdi Bun',
    description: 'Rich, indulgent, classic. Premium dark chocolate drizzle over thick creamy rabdi inside a warm bun.',
    image: '/images/food/bun-chocolate.png',
  },
  {
    id: 4,
    name: 'Strawberry Rabdi Bun',
    description: 'Fresh, creamy, fruity. Tangy-sweet real strawberry glaze layered over velvety traditional rabdi.',
    image: '/images/food/bun-strawberry.png',
  },
  {
    id: 5,
    name: 'Blueberry Rabdi Bun',
    description: 'Tangy, creamy, refreshing. Burst of real blueberries folded into luxurious slow-cooked rabdi.',
    image: '/images/food/bun-blueberry.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  },
};

function FoodCard({ item, isActive, onClick }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative w-full cursor-pointer perspective-1000 aspect-square max-w-[120px] sm:max-w-[160px] md:max-w-none mx-auto"
      onClick={onClick}
    >
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key="info"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-brand p-3 text-center shadow-xl text-beige select-none"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="mb-1 text-xs sm:text-base font-heading text-beige font-semibold line-clamp-1">
              {item.name}
            </h3>
            <p className="text-[10px] sm:text-xs leading-tight text-beige/85 line-clamp-3">
              {item.description}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-2 h-px w-8 bg-beige/30 origin-center"
            />
          </motion.div>
        ) : (
          <motion.div
            key="image"
            initial={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeIn' }}
            className="relative h-full w-full flex items-center justify-center p-1 sm:p-2 md:p-4 transition-all duration-300"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* ONLY photo without background, floating cleanly with drop shadow */}
            <motion.img
              src={item.image}
              alt=""
              whileHover={{ scale: 1.1, y: -4 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="h-full w-full max-h-[110px] sm:max-h-[145px] md:max-h-none object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_16px_24px_rgba(0,0,0,0.2)] transition-all duration-300 pointer-events-none select-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function WhatWeServe() {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative overflow-hidden bg-beige py-20 md:py-32" id="serve">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12 md:mb-18 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand font-normal tracking-tight">
            What We Serve
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-3 md:mt-5 max-w-2xl text-brand/70 text-sm md:text-lg leading-relaxed"
          >
            Real Chai. No Shortcuts. Authentic slow-brewed Hyderabadi Dum Tea paired with our signature artisanal Rabdi Buns.
          </motion.p>
        </motion.div>

        {/* 5 Photos Grid — Compact, proportional and petite on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-7 max-w-[280px] sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1 [&>*:last-child]:max-w-[120px] sm:[&>*:last-child]:max-w-[160px] md:[&>*:last-child]:max-w-none [&>*:last-child]:mx-auto sm:[&>*:last-child]:mx-0 [&>*:last-child]:w-full"
        >
          {items.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
