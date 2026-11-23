import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import FranchiseModal from './FranchiseModal';

const franchiseData = {
  heading: 'Own a दोghut Outlet',
  email: 'Doghutofficial1@gmail.com',
  phone: '+918744946013',
  phoneDisplay: '+91 87449 46013',
  link: 'https://forms.gle/1mKqG3Gyeu2UGtsw8',
};

const routePoints = [
  { x: 40, y: 130 },
  { name: 'Shaheen Bagh (Delhi)', x: 180, y: 165, label: 'above', labelDy: -14, loop: true },
  { x: 330, y: 75 },
  { name: 'Jamia Nagar (Delhi)', x: 480, y: 165, label: 'below', loop: true },
  { x: 630, y: 75 },
  { name: 'Ahmedabad (Gujarat)', x: 780, y: 165, label: 'above', labelDy: -14, loop: true },
  { x: 920, y: 75 },
  { name: 'Your City Next', x: 1040, y: 165, label: 'below', loop: false },
  { x: 1160, y: 120 },
];

const generateSmoothPath = (pts) => {
  const segs = pts.slice(0, -1).map((curr, idx) => {
    const prev = pts[idx - 1] ?? curr;
    const next = pts[idx + 1];
    const nnext = pts[idx + 2] ?? next;
    return `C ${curr.x + (next.x - prev.x) / 6} ${curr.y + (next.y - prev.y) / 6} ${
      next.x - (nnext.x - curr.x) / 6
    } ${next.y - (nnext.y - curr.y) / 6} ${next.x} ${next.y}`;
  });
  return `M ${pts[0].x} ${pts[0].y} ${segs.join(' ')}`;
};

const getTextAnchor = (x) => (x < 120 ? 'start' : x > 1050 ? 'end' : 'middle');

function RouteMap() {
  const pathD = generateSmoothPath(routePoints);
  const namedPoints = routePoints.filter((pt) => pt.name);

  return (
    <div className="relative">
      {/* Mobile Swipe Hint */}
      <div className="flex md:hidden items-center justify-center gap-1.5 text-beige/50 text-xs mb-3 font-sans">
        <span>← Swipe to explore our outlet route →</span>
      </div>

      {/* Curved Route Map for both Mobile and Desktop */}
      <div className="no-scrollbar -mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
        <motion.svg
          viewBox="0 0 1180 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`दोghut outlets across ${namedPoints.map((p) => p.name).join(', ')}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="h-auto w-205 md:w-full min-w-[720px] select-none"
        >
          {/* Decorative Neon Green Accent Arcs */}
          <path
            d="M 1150 20 C 1175 80 1175 180 1150 240"
            stroke="#22c55e"
            strokeWidth={4.5}
            strokeLinecap="round"
            opacity={0.85}
          />
          <path
            d="M 30 245 C 18 245 10 235 10 215"
            stroke="#22c55e"
            strokeWidth={4.5}
            strokeLinecap="round"
            opacity={0.85}
          />

          {/* Curved connecting line */}
          <motion.path
            d={pathD}
            stroke="var(--color-beige)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeDasharray="9 11"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 0.85, transition: { duration: 1, ease: 'easeOut' } },
            }}
          />

          {/* Outlets markers and labels */}
          {namedPoints.map((point, index) => {
            const textY =
              (point.label === 'above' ? point.y - 34 - 14 : point.y + 30) +
              (point.labelDy ?? 0);

            return (
              <motion.g
                key={point.name}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.35 + index * 0.09,
                      ease: [0.25, 0.4, 0.25, 1],
                    },
                  },
                }}
              >
                {/* Pulsing ring for selected hubs */}
                {point.loop && (
                  <ellipse
                    cx={point.x}
                    cy={point.y - 15}
                    rx={32}
                    ry={26}
                    stroke="var(--color-beige)"
                    strokeOpacity={0.6}
                    strokeWidth={2}
                    strokeDasharray="7 9"
                  />
                )}

                {/* Pin marker */}
                <path
                  d="M 0 0 C -6 -11 -13 -17 -13 -25 A 13 13 0 1 1 13 -25 C 13 -17 6 -11 0 0 Z"
                  transform={`translate(${point.x} ${point.y})`}
                  fill="#e2572c"
                  filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.35))"
                />
                <circle
                  cx={point.x}
                  cy={point.y - 25}
                  r={4.5}
                  fill="var(--color-brand-dark)"
                  fillOpacity={0.65}
                />

                {/* City name text */}
                <text
                  x={point.x}
                  y={textY}
                  textAnchor={getTextAnchor(point.x)}
                  fill="var(--color-beige)"
                  className="font-heading font-medium tracking-wide"
                  fontSize={23}
                  fontWeight="600"
                >
                  {point.name}
                </text>
              </motion.g>
            );
          })}
        </motion.svg>
      </div>
    </div>
  );
}

const animVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Franchise() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const decorScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-brand-dark pt-20 pb-32 md:pt-24 md:pb-40"
      id="franchise"
    >
      {/* Background radial dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-beige) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Parallax circles */}
      <motion.div style={{ y: decorY }} className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ scale: decorScale }}
          className="absolute -top-20 -left-20 h-72 w-72 md:h-80 md:w-80 rounded-full bg-beige/5"
        />
        <motion.div
          style={{ scale: decorScale }}
          className="absolute -bottom-32 -right-32 h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-beige/5"
        />
        <div className="absolute top-1/2 left-1/2 h-48 w-48 md:h-60 md:w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-beige/10" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 md:h-96 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-beige/5" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Animated Route Map Curve */}
        <RouteMap />

        <div className="mx-auto mt-16 max-w-4xl text-center md:mt-20">
          <motion.h2
            variants={animVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, margin: '-100px' }}
            className="mb-6 font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-beige font-normal tracking-tight"
          >
            {franchiseData.heading}
          </motion.h2>

          <motion.div
            variants={animVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex gap-2 items-center rounded-lg p-2 group bg-beige px-8 py-3 text-brand hover:bg-white transition-all duration-300 font-medium shadow-md cursor-pointer"
            >
              Apply for Franchise
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.a
            href={`tel:${franchiseData.phone}`}
            variants={animVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.45}
            viewport={{ once: true }}
            className="mt-6 inline-flex items-center gap-2 text-base text-beige/80 transition-colors duration-300 hover:text-beige md:text-lg"
          >
            <Phone className="size-4" />
            {franchiseData.phoneDisplay}
          </motion.a>
        </div>
      </div>

      {/* Franchise Enquiry Modal Form */}
      <FranchiseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-beige"
          />
        </svg>
      </div>
    </section>
  );
}
