import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Clock } from 'lucide-react';

const outlets = [
  {
    id: 1,
    tag: 'Flagship Outlet',
    name: 'Shaheen Bagh, Delhi',
    city: 'New Delhi',
    address: 'E-136/1 Azad Road, Near Shaheen bagh police Station, Okhla, ND-110025',
    timing: '10:00 AM - 12:00 AM (Daily)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=E-136%2F1+Azad+Road%2C+Near+Shaheen+bagh+police+Station%2C+Okhla%2C+ND-110025',
    image: '/images/stores/outlet-shaheen-bagh.webp',
  },
  {
    id: 2,
    tag: 'Delhi Outlet',
    name: 'Jamia Nagar, Delhi',
    city: 'New Delhi',
    address: 'Jamia Nagar, Okhla, New Delhi - 110025',
    timing: '10:00 AM - 12:00 AM (Daily)',
    mapLink: 'https://maps.app.goo.gl/mrHrqtjaKUabYtTE6?g_st=ic',
    image: '/images/stores/outlet-jamia-nagar.webp',
  },
  {
    id: 3,
    tag: 'Gujarat Outlet',
    name: 'Ahmedabad',
    city: 'Ahmedabad, Gujarat',
    address: 'Ahmedabad, Gujarat',
    timing: '9:00 AM - 11:00 PM (Daily)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=Ahmedabad+Gujarat+doghut',
    image: '/images/stores/outlet-ahmedabad.webp',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Locations() {
  return (
    <section className="relative overflow-hidden bg-beige py-24 md:py-32" id="locations">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      {/* Skyline mask image at bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-brand-dark opacity-10"
        style={{
          maskImage: "url('/city-skyline.svg')",
          maskRepeat: 'repeat-x',
          maskPosition: 'left 0 bottom -22.3%',
          maskSize: 'auto 100%',
          WebkitMaskImage: "url('/city-skyline.svg')",
          WebkitMaskRepeat: 'repeat-x',
          WebkitMaskPosition: 'left 0 bottom -22.3%',
          WebkitMaskSize: 'auto 100%',
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-14 md:mb-18 text-center"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand/60 block mb-2">
            3 EXCLUSIVE OUTLETS
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand font-normal tracking-tight">
            Our Outlets
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 md:mt-5 max-w-xl text-brand/70 text-base md:text-lg leading-relaxed"
          >
            Visit us in <strong>Shaheen Bagh (Delhi)</strong>, <strong>Jamia Nagar (Delhi)</strong>, and <strong>Ahmedabad</strong> for authentic Irani Dum Tea and fresh Rabdi Buns.
          </motion.p>
        </motion.div>

        {/* 3 Outlets Side by Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {outlets.map((outlet) => (
            <motion.div key={outlet.id} variants={cardVariants} className="group relative">
              <div className="relative h-64 sm:h-80 md:h-[440px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-end p-4 sm:p-6 md:p-8 border border-brand/10 max-w-sm sm:max-w-none mx-auto w-full">
                {/* Background Store Image */}
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium uppercase tracking-wider bg-beige/90 text-brand backdrop-blur-md shadow">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand" />
                    {outlet.tag}
                  </span>
                </div>

                {/* Content at Bottom */}
                <div className="relative z-10 text-beige">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-white mb-1 sm:mb-2">
                    {outlet.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-sm text-beige/80 line-clamp-1 sm:line-clamp-2 mb-2 sm:mb-3 leading-relaxed">
                    {outlet.address}
                  </p>

                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-beige/70 mb-3 sm:mb-5">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>{outlet.timing}</span>
                  </div>

                  <motion.a
                    href={outlet.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 w-full py-2 sm:py-3 px-4 sm:px-5 rounded-full bg-brand text-beige hover:bg-brand-dark transition-colors duration-300 text-xs sm:text-sm font-medium shadow-md border border-beige/20"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </motion.a>
                </div>

                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-beige/0 group-hover:border-beige/30 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
