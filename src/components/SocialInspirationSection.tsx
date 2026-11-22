import {MessageCircle} from 'lucide-react';
import {motion} from 'motion/react';
import {buildWhatsAppUrl, SALON_IMAGES} from '../data/salonData';
import {SalonImage} from './SalonImage';

const INSPIRATION_LOOKS = [
  {
    src: SALON_IMAGES.bridalMakeup,
    alt: 'Bridal makeup detail with luminous highlight and traditional gold jewelry',
    caption: 'Bridal Glamour',
  },
  {
    src: SALON_IMAGES.beautyTreatments,
    alt: 'Luxury beauty brushes and rose quartz skincare tools on travertine stone',
    caption: 'Curated Artistry',
  },
  {
    src: SALON_IMAGES.galleryCloseup,
    alt: 'Natural glowing complexion with champagne shimmer eyeshadow',
    caption: 'Radiant Finish',
  },
  {
    src: SALON_IMAGES.specialOccasion,
    alt: 'Evening celebration makeup and soft cascading waves',
    caption: 'Special Moments',
  },
];

export function SocialInspirationSection() {
  const whatsappInspirationLink = buildWhatsAppUrl(
    'Assalam-o-Alaikum! I would like to connect with Begum Tareen Beauty Salon regarding your beauty looks and upcoming availability.'
  );

  return (
    <section className="bg-[#FAF7F2] py-20 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
              <span aria-hidden="true" className="h-[1px] w-8 bg-[#C6A46A]" />
              <span>Editorial Lookbook</span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-tight text-[#30241F]">
              Beauty Moments &amp; Inspiration
            </h2>
            <p className="mt-3 max-w-xl text-base leading-[1.7] text-[#68584D]">
              Discover our beauty inspiration, looks, and special moments.
            </p>
          </div>

          <a
            href={whatsappInspirationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm border border-[#C6A46A] px-6 py-2.5 text-xs font-medium tracking-[0.14em] text-[#30241F] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C6A46A] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

        {/* 4-Column Lookbook Strip (official social links can be connected here later) */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {INSPIRATION_LOOKS.map((look, idx) => (
            <motion.div
              key={look.caption}
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-40px'}}
              transition={{
                duration: 0.5,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#F4EEE5]"
            >
              <SalonImage
                src={look.src}
                alt={look.alt}
                fallbackLabel={look.caption}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#30241F]/75 via-[#30241F]/20 to-transparent p-4">
                <p className="font-serif text-lg font-medium text-[#FAF7F2]">
                  {look.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
