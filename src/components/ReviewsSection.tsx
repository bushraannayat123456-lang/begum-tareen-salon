import {ExternalLink, MapPin, Star} from 'lucide-react';
import {motion} from 'motion/react';
import {SALON_INFO} from '../data/salonData';

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#F4EEE5]/75 py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
            <span aria-hidden="true" className="h-[1px] w-6 bg-[#C6A46A]" />
            <span>Verified Google Rating</span>
            <span aria-hidden="true" className="h-[1px] w-6 bg-[#C6A46A]" />
          </div>

          <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] font-medium leading-tight text-[#30241F]">
            Loved by Our Customers
          </h2>
        </div>

        {/* Prominent Verified Google Rating Card */}
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-60px'}}
          transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
          className="mx-auto mt-12 max-w-4xl rounded-sm border border-[#C6A46A]/35 bg-[#FFFFFF] p-8 shadow-[0_20px_50px_-28px_rgba(48,36,31,0.16)] md:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            {/* Score Column */}
            <div className="flex flex-col items-center border-b border-[#C6A46A]/25 pb-8 text-center md:col-span-5 md:border-b-0 md:border-r md:pb-0 md:pr-8">
              <div
                className="flex items-center gap-1.5 text-[#C6A46A]"
                aria-label="4.9 out of 5 stars"
              >
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-[#C6A46A]" />
                ))}
              </div>

              <div className="mt-4 font-serif text-6xl font-medium tracking-tight text-[#30241F] tabular-nums">
                {SALON_INFO.rating}{' '}
                <span className="text-3xl font-normal text-[#9B8A7A]">/ 5</span>
              </div>

              <p className="mt-2 text-sm font-medium tracking-wide text-[#68584D] tabular-nums">
                {SALON_INFO.reviewCount} Google Reviews
              </p>
            </div>

            {/* Verified Listing Context & CTA */}
            <div className="flex flex-col justify-center md:col-span-7 md:pl-4">
              <p className="font-serif text-2xl font-medium leading-snug text-[#30241F]">
                Trusted across Mansehra for bridal &amp; occasion beauty
              </p>
              <p className="mt-3 text-sm leading-[1.75] text-[#68584D] sm:text-base">
                Rated {SALON_INFO.rating} out of 5 stars across{' '}
                {SALON_INFO.reviewCount} customer reviews on Google for{' '}
                {SALON_INFO.name} in Ghazikot Township, Mansehra.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-[#68584D]">
                <MapPin className="h-4 w-4 shrink-0 text-[#C6A46A]" aria-hidden="true" />
                <span>{SALON_INFO.shortAddress}</span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={SALON_INFO.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm bg-[#30241F] px-6 py-3 text-xs font-medium tracking-[0.14em] text-[#FAF7F2] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#44332C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
                >
                  <span>Read Our Google Reviews</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <a
                  href="#booking"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-sm border border-[#30241F]/30 px-6 py-3 text-xs font-medium tracking-[0.14em] text-[#30241F] uppercase transition-all duration-200 hover:bg-[#30241F] hover:text-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
                >
                  Book Your Visit
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
