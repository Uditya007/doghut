import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.webp',
    title: 'दोGhut Flagship Outlet & Kulhad Chai',
    alt: 'Shaheen Bagh Flagship Outlet',
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.webp',
    title: 'Night Ambiance & Illuminated Facade',
    alt: 'Ahmedabad Outlet Storefront at Night',
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.webp',
    title: 'Customer Love Sticky Wall',
    alt: 'Wall of Love Sticky Notes by Visitors',
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.webp',
    title: 'Signature Chai Heritage Wall Mural',
    alt: 'Hand-painted Wall Mural inside Store',
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.webp',
    title: 'Evening Vibe & Real Chai Moments',
    alt: 'Evening Chai Gathering at दोGhut',
  },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);
  const [carouselRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  // Modal carousel
  const [modalRef, modalApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsRef = useRef([]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const modalPrev = () => modalApi && modalApi.scrollPrev();
  const modalNext = () => modalApi && modalApi.scrollNext();

  const openLightbox = (id) => {
    setSelectedId(id);
    const index = galleryImages.findIndex((img) => img.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (modalApi && selectedId !== null) {
      const index = galleryImages.findIndex((img) => img.id === selectedId);
      if (index !== -1) {
        modalApi.scrollTo(index, true);
        setCurrentIndex(index);
      }
    }
  }, [modalApi, selectedId]);

  useEffect(() => {
    if (!modalApi) return;
    const onSelect = () => {
      const idx = modalApi.selectedScrollSnap();
      setCurrentIndex(idx);
      thumbnailsRef.current[idx]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    };

    modalApi.on('select', onSelect);
    return () => modalApi.off('select', onSelect);
  }, [modalApi]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedId(null);
      if (e.key === 'ArrowLeft') modalApi?.scrollPrev();
      if (e.key === 'ArrowRight') modalApi?.scrollNext();
    };
    if (selectedId !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, modalApi]);

  return (
    <section className="relative overflow-hidden bg-beige py-16 md:py-32" id="gallery">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%235c040e' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-14 md:mb-18 text-center"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand/60 block mb-2">
            EXPERIENCE THE VIBE
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand font-normal tracking-tight">
            Our Gallery
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 md:mt-5 max-w-xl text-brand/70 text-base md:text-lg leading-relaxed"
          >
            A glimpse into the soulful ambiance, handcrafted murals, and heartfelt moments at दोGhut.
          </motion.p>
        </motion.div>

        {/* Carousel Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="relative group/carousel max-w-6xl mx-auto"
        >
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl" ref={carouselRef}>
            <div className="flex -ml-3 sm:-ml-4">
              {galleryImages.map((image, idx) => (
                <div
                  key={image.id}
                  className="pl-3 sm:pl-4 flex-[0_0_62%] sm:flex-[0_0_45%] lg:flex-[0_0_33.333%]"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md sm:shadow-lg border border-brand/10 bg-brand/5"
                    onClick={() => openLightbox(image.id)}
                  >
                    <div className="aspect-[3/4] w-full overflow-hidden bg-brand/5">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3.5 sm:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-white font-heading text-xs sm:text-base font-medium line-clamp-1">
                        {image.title}
                      </span>
                      <div className="mt-1 sm:mt-2 inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-beige/80">
                        <ZoomIn className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        <span>Click to view</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (Desktop/Tablet) */}
          <button
            onClick={scrollPrev}
            className="hidden sm:flex absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-beige text-brand shadow-lg border border-brand/15 hover:bg-white transition-all opacity-90 hover:opacity-100 z-10"
            aria-label="Previous gallery image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden sm:flex absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-beige text-brand shadow-lg border border-brand/15 hover:bg-white transition-all opacity-90 hover:opacity-100 z-10"
            aria-label="Next gallery image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 flex h-dvh w-screen flex-col bg-brand-dark/95 backdrop-blur-md"
          >
            {/* Top Close bar */}
            <div className="flex shrink-0 items-center justify-between px-5 py-4 md:px-8 md:py-6">
              <span className="text-xs sm:text-sm font-mono text-beige/70 uppercase tracking-widest">
                {currentIndex + 1} / {galleryImages.length}
              </span>
              <button
                onClick={() => setSelectedId(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-beige/80 transition-colors hover:bg-beige/15 hover:text-beige focus:outline-none"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Main Image Slider */}
            <div className="flex min-h-0 flex-1 items-center justify-center relative px-4">
              <div className="w-full max-w-4xl overflow-hidden" ref={modalRef}>
                <div className="flex">
                  {galleryImages.map((image) => (
                    <div
                      key={image.id}
                      className="flex-[0_0_100%] flex flex-col items-center justify-center px-4 md:px-8"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-[58vh] sm:max-h-[calc(100dvh-15rem)] w-auto max-w-full rounded-xl sm:rounded-2xl object-contain shadow-2xl border border-beige/10"
                      />
                      <p className="mt-3 text-center text-sm md:text-base font-heading text-beige/90">
                        {image.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev / Next in modal */}
              <button
                onClick={modalPrev}
                className="absolute left-3 md:left-6 flex h-12 w-12 items-center justify-center rounded-full bg-beige/15 text-beige backdrop-blur-sm hover:bg-beige/25 transition-colors"
                aria-label="Previous modal image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={modalNext}
                className="absolute right-3 md:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-beige/15 text-beige backdrop-blur-sm hover:bg-beige/25 transition-colors"
                aria-label="Next modal image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom thumbnail strip */}
            <div className="shrink-0 px-5 py-4 md:px-8 md:py-6">
              <div className="mx-auto flex max-w-md justify-center gap-2.5 overflow-x-auto no-scrollbar">
                {galleryImages.map((image, idx) => (
                  <button
                    key={image.id}
                    ref={(el) => (thumbnailsRef.current[idx] = el)}
                    onClick={() => modalApi?.scrollTo(idx)}
                    aria-label={`View ${image.alt}`}
                    className={`relative h-14 w-12 shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                      currentIndex === idx
                        ? 'opacity-100 ring-2 ring-beige scale-105'
                        : 'opacity-40 hover:opacity-75'
                    }`}
                  >
                    <img src={image.src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
