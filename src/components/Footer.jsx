import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const footerContact = {
  email: 'doghut@gmail.com',
  phone: '+91 81085 18539',
  address: 'E-136/1 Azad Road, Near Shaheen bagh police Station, Okhla, ND-110025',
};

const quickLinks = [
  { name: 'What We Serve', href: '#serve' },
  { name: 'Our Reels', href: '#reels' },
  { name: 'Locations', href: '#locations' },
  { name: 'Our Story', href: '#founder' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Franchise', href: '#franchise' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export default function Footer() {
  const smoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1a1a1a] pt-20 md:pt-24 pb-8 text-beige">
      {/* Top curved divider */}
      <div className="absolute -top-px left-0 right-0 rotate-180 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            className="fill-beige"
          />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 gap-10 md:gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <motion.div variants={colVariants} className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/doghut-logo-transparent.png"
                alt="दोghut"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
            <p className="mb-2 max-w-md font-heading text-beige/90 text-base md:text-lg">
              Mai hu दोGhut ki chai.
            </p>
            <p className="mb-4 max-w-md text-beige/60 text-sm md:text-base italic">
              Bol toh paati nahi, batau kese ki apke qaabil bani hu?
            </p>
            <p className="mb-6 max-w-md text-beige/50 text-xs md:text-sm leading-relaxed">
              Crafted with authentic tradition, served fresh with all our heart in every sip.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/bennebaeofficial/"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-beige/10 text-beige/70 transition-colors duration-300 hover:bg-brand hover:text-white"
                aria-label="Follow दोghut on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={colVariants}>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-beige/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    className="text-sm text-beige/50 transition-colors duration-300 hover:text-beige block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={colVariants}>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-beige/80">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=E-136%2F1+Azad+Road%2C+Near+Shaheen+bagh+police+Station%2C+Okhla%2C+ND-110025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-beige/50 transition-colors duration-300 hover:text-beige"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0 text-beige/70 mt-1" />
                  <span className="text-sm leading-relaxed">{footerContact.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerContact.phone}`}
                  className="flex items-center gap-3 text-beige/50 transition-colors duration-300 hover:text-beige"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-beige/70" />
                  <span className="text-sm">{footerContact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerContact.email}`}
                  className="flex items-center gap-3 text-beige/50 transition-colors duration-300 hover:text-beige"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-beige/70" />
                  <span className="text-sm">{footerContact.email}</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Prominent Address at Bottom for Both Outlets */}
        <motion.div
          variants={colVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Outlet 1: Shaheen Bagh, Delhi */}
          <div className="rounded-2xl bg-white/5 border border-beige/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-beige/10 text-beige">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-heading text-beige text-base font-medium">Flagship Outlet — Shaheen Bagh</h5>
                <p className="text-xs sm:text-sm text-beige/60">
                  E-136/1 Azad Road, Near Shaheen bagh police Station, Okhla, ND-110025
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=E-136%2F1+Azad+Road%2C+Near+Shaheen+bagh+police+Station%2C+Okhla%2C+ND-110025"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-beige px-4 py-2 text-xs font-medium text-brand hover:bg-white transition-colors duration-300 shadow"
            >
              <span>Get Directions</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Outlet 2: Ahmedabad, Gujarat */}
          <div className="rounded-2xl bg-white/5 border border-beige/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-beige/10 text-beige">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h5 className="font-heading text-beige text-base font-medium">Ahmedabad Outlet — Gujarat</h5>
                <p className="text-xs sm:text-sm text-beige/60">
                  Ahmedabad, Gujarat
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ahmedabad+Gujarat+doghut"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-beige px-4 py-2 text-xs font-medium text-brand hover:bg-white transition-colors duration-300 shadow"
            >
              <span>Get Directions</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom copyright line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-beige/10 pt-8 text-center"
        >
          <p className="text-xs md:text-sm text-beige/30">
            © {new Date().getFullYear()} दोghut. All rights reserved. Made with ❤️,
            served with heart
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
