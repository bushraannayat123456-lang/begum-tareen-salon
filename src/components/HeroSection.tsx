import {Star} from 'lucide-react';
import {motion} from 'motion/react';
import {SALON_IMAGES, SALON_INFO} from '../data/salonData';
import {SalonImage} from './SalonImage';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF7F2] pt-24 md:pt-28"
    >
      {/* Subtle luxury warm gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,164,106,0.12),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-12 pt-6 md:px-10 md:pb-16 md:pt-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Editorial Column */}
          <motion.div
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6 lg:py-8"
          >
            <div className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
              <span aria-hidden="true" className="h-[1px] w-8 bg-[#C6A46A]" />
              <span>Beauty · Elegance · Confidence</span>
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,4.6vw,4.35rem)] font-medium leading-[1.07] tracking-tight text-[#30241F]">
              Where Beauty Becomes an{' '}
              <span className="italic font-normal text-[#B89A65]">Art</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#68584D] sm:text-[17px]">
              Experience beauty, elegance, and personalized care at Begum Tareen
              Beauty Salon. Discover the perfect look for your special moments
              with professional beauty services designed to make you feel
              confident and beautiful.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#30241F] px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-[#FAF7F2] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#44332C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
              >
                Book Your Appointment
              </a>
              <a
                href="#services"
                className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#30241F]/35 bg-transparent px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-[#30241F] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#30241F] hover:bg-[#30241F] hover:text-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>

          {/* Right Editorial Bridal Image */}
          <motion.div
            initial={{opacity: 0, scale: 0.98}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}}
            className="order-1 relative lg:order-2 lg:col-span-6"
          >
            {/* Subtle asymmetrical champagne-gold frame accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full rounded-sm border border-[#C6A46A]/45 md:block"
            />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#F4EEE5] shadow-[0_24px_60px_-24px_rgba(48,36,31,0.22)] lg:aspect-auto lg:h-[600px]">
              <SalonImage
                src={SALON_IMAGES.heroBridal}
                alt="Luxury Pakistani bridal makeup and styling at Begum Tareen Beauty Salon in Mansehra"
                loading="eager"
                fallbackLabel="Bridal Editorial"
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#30241F]/30 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width verified trust strip below hero split */}
      <div className="border-y border-[#C6A46A]/25 bg-[#F4EEE5]/75">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 divide-y divide-[#C6A46A]/20 px-5 sm:grid-cols-2 sm:divide-y-0 sm:divide-x md:px-10 lg:grid-cols-4">
          <div className="flex items-center gap-3 py-5 sm:pr-6">
            <div className="flex items-center gap-0.5 text-[#C6A46A]" aria-hidden="true">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-[#C6A46A]" />
              ))}
            </div>
            <p className="text-sm font-medium text-[#30241F] tabular-nums">
              {SALON_INFO.rating} Google Rating
            </p>
          </div>

          <div className="flex items-center py-5 sm:px-6">
            <p className="text-sm font-medium text-[#30241F] tabular-nums">
              {SALON_INFO.reviewCount} Customer Reviews
            </p>
          </div>

          <div className="flex items-center py-5 sm:pr-6 lg:px-6">
            <p className="text-sm font-medium text-[#30241F]">
              Ghazikot Township, Mansehra
            </p>
          </div>

          <div className="flex items-center py-5 sm:pl-6">
            <p className="text-sm font-medium text-[#30241F]">
              {SALON_INFO.openingInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
