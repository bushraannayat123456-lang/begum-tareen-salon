import {ArrowUpRight} from 'lucide-react';
import {motion} from 'motion/react';
import {buildWhatsAppUrl, SERVICES} from '../data/salonData';
import {SalonImage} from './SalonImage';

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
}

export function ServicesSection({onBookService}: ServicesSectionProps) {
  return (
    <section id="services" className="bg-[#F4EEE5]/65 py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
            <span aria-hidden="true" className="h-[1px] w-6 bg-[#C6A46A]" />
            <span>Curated Services</span>
            <span aria-hidden="true" className="h-[1px] w-6 bg-[#C6A46A]" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] font-medium leading-tight text-[#30241F]">
            Our Beauty Services
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-[#68584D] sm:text-[17px]">
            Discover beauty services designed to enhance your natural elegance
            and make every occasion unforgettable.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{opacity: 0, y: 18}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{
                duration: 0.55,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-sm border border-[#C6A46A]/25 bg-[#FFFFFF] transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A46A]/60 hover:shadow-[0_18px_40px_-20px_rgba(48,36,31,0.16)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EEE5]">
                <SalonImage
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackLabel={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-xs font-medium tracking-[0.18em] text-[#B89A65] tabular-nums">
                  {service.indexLabel}
                </span>

                <h3 className="mt-2 font-serif text-2xl font-medium text-[#30241F]">
                  {service.title}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-[1.7] text-[#68584D]">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#C6A46A]/20 pt-5">
                  <button
                    type="button"
                    onClick={() => onBookService(service.title)}
                    className="inline-flex min-h-[40px] items-center justify-center rounded-sm bg-[#30241F] px-4 py-2 text-xs font-medium tracking-[0.1em] text-[#FAF7F2] uppercase transition-colors duration-200 hover:bg-[#44332C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Book This Service
                  </button>

                  <a
                    href={buildWhatsAppUrl(service.pricingInquiryText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1 text-xs font-medium tracking-wide text-[#B89A65] transition-colors hover:text-[#30241F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] rounded-sm whitespace-nowrap shrink-0"
                  >
                    <span>Ask for Pricing</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
