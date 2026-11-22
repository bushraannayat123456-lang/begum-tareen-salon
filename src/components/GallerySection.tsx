import {useCallback, useEffect, useMemo, useState} from 'react';
import {ChevronLeft, ChevronRight, Expand, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryCategory,
} from '../data/salonData';
import {SalonImage} from './SalonImage';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowLeft') {
        showPrev();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="bg-[#FAF7F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
              <span aria-hidden="true" className="h-[1px] w-8 bg-[#C6A46A]" />
              <span>Portfolio</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] font-medium leading-tight text-[#30241F]">
              The Beauty Gallery
            </h2>
            <p className="mt-3 max-w-xl text-base leading-[1.7] text-[#68584D] sm:text-[17px]">
              A glimpse of beauty, elegance, and special moments.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Gallery categories"
            className="flex flex-wrap items-center gap-2 border-b border-[#C6A46A]/25 pb-2"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[40px] rounded-sm px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] ${
                    isActive
                      ? 'bg-[#30241F] text-[#FAF7F2]'
                      : 'bg-transparent text-[#68584D] hover:bg-[#F4EEE5] hover:text-[#30241F]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-4">
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.35, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1]}}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative overflow-hidden rounded-sm bg-[#F4EEE5] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] cursor-pointer ${
                activeCategory === 'All'
                  ? item.layoutClass
                  : 'aspect-[4/3] md:aspect-auto'
              }`}
            >
              <SalonImage
                src={item.image}
                alt={item.alt}
                fallbackLabel={item.title}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Subtle Editorial Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-[#30241F]/80 via-[#30241F]/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="flex justify-end">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-[#FAF7F2]/90 text-[#30241F]">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.18em] text-[#C6A46A] uppercase">
                    {item.category}
                  </p>
                  <p className="mt-1 font-serif text-xl font-medium text-[#FAF7F2]">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {activeItem && lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#30241F]/92 p-4 backdrop-blur-sm md:p-8"
            onClick={closeLightbox}
          >
            <div
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-sm border border-[#C6A46A]/35 bg-[#FAF7F2]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-[#C6A46A]/20 px-5 py-3.5">
                <div className="flex items-center gap-2 text-xs text-[#68584D]">
                  <span className="font-medium tracking-[0.16em] text-[#B89A65] uppercase">
                    {activeItem.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>

                <button
                  type="button"
                  aria-label="Close gallery lightbox"
                  onClick={closeLightbox}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-[#30241F] transition-colors hover:bg-[#F4EEE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Image Viewport */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#30241F]/5 p-3 sm:p-6">
                <SalonImage
                  src={activeItem.image}
                  alt={activeItem.alt}
                  fallbackLabel={activeItem.title}
                  className="max-h-[65vh] w-auto max-w-full rounded-sm object-contain"
                />

                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={showPrev}
                      className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-[#C6A46A]/40 bg-[#FAF7F2]/90 text-[#30241F] shadow-sm transition-colors hover:bg-[#30241F] hover:text-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] cursor-pointer sm:left-5"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={showNext}
                      className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-[#C6A46A]/40 bg-[#FAF7F2]/90 text-[#30241F] shadow-sm transition-colors hover:bg-[#30241F] hover:text-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] cursor-pointer sm:right-5"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption Footer */}
              <div className="border-t border-[#C6A46A]/20 bg-[#FAF7F2] px-6 py-4">
                <h3 className="font-serif text-2xl font-medium text-[#30241F]">
                  {activeItem.title}
                </h3>
                <p className="mt-1 text-sm text-[#68584D]">{activeItem.subtitle}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
