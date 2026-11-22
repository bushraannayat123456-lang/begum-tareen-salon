import {motion} from 'motion/react';
import {SALON_IMAGES} from '../data/salonData';
import {SalonImage} from './SalonImage';

interface BridalFeatureSectionProps {
  onEnquireBridal: () => void;
}

export function BridalFeatureSection({
  onEnquireBridal,
}: BridalFeatureSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#30241F]">
      <div className="relative min-h-[520px] w-full md:min-h-[600px]">
        <SalonImage
          src={SALON_IMAGES.bridalBanner}
          alt="Pakistani bride wearing embroidered ivory veil and luxury bridal makeup"
          fallbackLabel="Bridal Elegance"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Measured warm espresso scrim for WCAG AA text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#30241F]/90 via-[#30241F]/65 to-[#30241F]/30"
        />

        <div className="relative mx-auto flex min-h-[520px] max-w-[1320px] items-center px-5 py-20 md:min-h-[600px] md:px-10">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.7, ease: [0.16, 1, 0.3, 1]}}
            className="max-w-xl"
          >
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-[#C6A46A] uppercase">
              <span aria-hidden="true" className="h-[1px] w-8 bg-[#C6A46A]" />
              <span>Bridal Studio</span>
            </div>

            <h2 className="font-serif text-[clamp(2.15rem,4vw,3.6rem)] font-medium leading-[1.1] tracking-wide text-[#FAF7F2]">
              Your Wedding Day. Your Timeless{' '}
              <span className="italic font-normal text-[#C6A46A]">Beauty.</span>
            </h2>

            <p className="mt-5 text-base leading-[1.75] text-[#FAF7F2]/90 sm:text-[17px]">
              Every bride deserves to feel extraordinary. Let your bridal beauty
              reflect your personality, elegance, and unforgettable moments.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onEnquireBridal}
                className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#C6A46A] px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-[#30241F] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2] whitespace-nowrap shrink-0 cursor-pointer"
              >
                Enquire About Bridal Makeup
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
