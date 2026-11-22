import {motion} from 'motion/react';
import {SALON_IMAGES} from '../data/salonData';
import {SalonImage} from './SalonImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-[#FAF7F2] py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Image */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            className="relative lg:col-span-6"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 hidden h-full w-full rounded-sm border border-[#C6A46A]/35 md:block"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#F4EEE5] lg:h-full">
              <SalonImage
                src={SALON_IMAGES.aboutInterior}
                alt="Warm ivory and champagne gold vanity suite inside Begum Tareen Beauty Salon"
                fallbackLabel="Begum Tareen Salon"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          {/* Right Editorial Copy */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="flex flex-col justify-center lg:col-span-6 lg:py-4"
          >
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
              <span aria-hidden="true" className="h-[1px] w-8 bg-[#C6A46A]" />
              <span>About Our Salon</span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,3.4vw,3.1rem)] font-medium leading-[1.12] text-[#30241F]">
              Beauty, Grace &amp; Confidence
            </h2>

            <p className="mt-6 text-base leading-[1.8] text-[#68584D] sm:text-[17px]">
              Begum Tareen Beauty Salon is a beauty destination in Ghazikot
              Township, Mansehra, dedicated to helping women feel beautiful,
              confident, and special. From everyday beauty care to memorable
              bridal moments, our salon offers an elegant atmosphere where
              beauty and personal care come together.
            </p>

            <div className="my-7 border-y border-[#C6A46A]/30 py-5">
              <p className="font-serif text-2xl italic leading-snug text-[#30241F] sm:text-[26px]">
                Your beauty. Your confidence. Your moment.
              </p>
            </div>

            <div>
              <a
                href="#services"
                className="inline-flex min-h-[46px] items-center justify-center rounded-sm border border-[#C6A46A] bg-transparent px-7 py-3 text-xs font-medium tracking-[0.14em] text-[#30241F] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C6A46A] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
              >
                Discover Our Salon
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
