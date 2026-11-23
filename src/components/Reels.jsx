import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

const reelsData = [
  {
    id: 1,
    video: '/images/reels/reel1.mp4',
    poster: '/images/reels/reel1_thumb.jpg',
    title: 'Hot Coffee & दोGhut Sips',
    handle: '@2ghut_',
    url: 'https://www.instagram.com/reel/Dfzui49Ki10/?bqrl=MWd5MXF4dTE2MXAwcQ==',
  },
  {
    id: 2,
    video: '/images/reels/reel2.mp4',
    poster: '/images/reels/reel2_thumb.jpg',
    title: 'दोGhut ki Chai Moments',
    handle: '@2ghut_',
    url: 'https://www.instagram.com/reel/Df7cDCqhu-I/?knvt=bXI5NWx2aDQ5Zm1n',
  },
  {
    id: 3,
    video: '/images/reels/reel3.mp4',
    poster: '/images/reels/reel3_thumb.jpg',
    title: 'Authentic Dum Chai Brewing',
    handle: '@2ghut_',
    url: 'https://www.instagram.com/reel/DgA9ONhz7f_/?dmpr=b2l4ejd0YWZ2ejYz',
  },
  {
    id: 4,
    video: '/images/reels/reel4.mp4',
    poster: '/images/reels/reel4_thumb.jpg',
    title: 'Shaheen Bagh Vibe & Chai',
    handle: '@2ghut_',
    url: 'https://www.instagram.com/reel/Dfuc9dIzzbl/?jplx=OWp4ZnBjM2s5OXM=',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const reelCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

function ReelCard({ reel }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: '200px 0px 200px 0px', once: false });
  const videoRef = useRef(null);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);

  useEffect(() => {
    if (isInView && !hasStartedLoading) {
      setHasStartedLoading(true);
    }
  }, [isInView, hasStartedLoading]);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <motion.a
      ref={cardRef}
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={reelCardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative block aspect-9/16 w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl cursor-pointer bg-black/40 border border-beige/10"
    >
      {/* Running continuous looping video - lazy loaded when near viewport */}
      <div className="absolute inset-0">
        <img
          src={reel.poster}
          alt={reel.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {hasStartedLoading && (
          <video
            ref={videoRef}
            src={reel.video}
            poster={reel.poster}
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
      </div>

      {/* Instagram Handle Badge at Top */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs text-white border border-white/10">
        <Instagram className="h-3.5 w-3.5 text-pink-400" />
        <span className="font-medium text-[11px]">{reel.handle}</span>
      </div>

      {/* Bottom Caption & Instagram Link */}
      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-10">
        <p className="text-white text-xs sm:text-sm font-medium drop-shadow-md truncate">
          {reel.title}
        </p>
        <div className="flex items-center gap-1 mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] text-beige/70 font-light group-hover:text-beige transition-colors">
          <span>Watch on Instagram</span>
          <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.a>
  );
}

export default function Reels() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-brand py-24 md:py-32"
      id="reels"
    >
      {/* Background dotted parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <div
          className="h-[150%] w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-beige) 1px, transparent 1px),
                              radial-gradient(circle at 80% 50%, var(--color-beige) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-beige font-normal tracking-tight">
            Catch Our Reels
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 md:mt-6 max-w-2xl text-beige/60 text-base md:text-lg leading-relaxed"
          >
            Watch the magic unfold as we brew authentic दोGhut ki chai and handcrafted
            treats with love and tradition.
          </motion.p>
        </motion.div>

        {/* 4 Running Reels Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:max-w-7xl lg:grid-cols-4"
        >
          {reelsData.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
