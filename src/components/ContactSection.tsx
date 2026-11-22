import {Clock, MapPin, MessageCircle, Navigation, Phone} from 'lucide-react';
import {buildWhatsAppUrl, SALON_INFO} from '../data/salonData';

export function ContactSection() {
  const whatsappGeneralUrl = buildWhatsAppUrl(
    'Assalam-o-Alaikum, I would like to get in touch with Begum Tareen Beauty Salon.'
  );

  return (
    <section id="contact" className="bg-[#F4EEE5]/65 py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Visit Our Salon */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
              <span aria-hidden="true" className="h-[1px] w-8 bg-[#C6A46A]" />
              <span>Location &amp; Contact</span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.15rem)] font-medium leading-tight text-[#30241F]">
              Visit Our Salon
            </h2>

            <p className="mt-3 font-serif text-2xl font-medium text-[#B89A65]">
              {SALON_INFO.name}
            </p>

            <div className="mt-8 space-y-6 border-t border-[#C6A46A]/25 pt-7">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-[#C6A46A]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-medium tracking-[0.14em] text-[#9B8A7A] uppercase">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-[1.7] text-[#30241F] sm:text-base">
                    {SALON_INFO.address}
                  </p>
                  <p className="mt-1 text-xs text-[#68584D]">
                    Google Maps Plus Code: {SALON_INFO.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-[#C6A46A]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-medium tracking-[0.14em] text-[#9B8A7A] uppercase">
                    Phone &amp; WhatsApp
                  </p>
                  <a
                    href={SALON_INFO.phoneHref}
                    className="mt-1 inline-block text-base font-medium text-[#30241F] transition-colors hover:text-[#B89A65] tabular-nums"
                  >
                    {SALON_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  className="mt-1 h-5 w-5 shrink-0 text-[#C6A46A]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-medium tracking-[0.14em] text-[#9B8A7A] uppercase">
                    Opening Information
                  </p>
                  <p className="mt-1 text-sm leading-[1.7] text-[#30241F] sm:text-base">
                    Opens at 9:00 AM Monday (per Google listing)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={SALON_INFO.phoneHref}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm bg-[#30241F] px-5 py-3 text-xs font-medium tracking-[0.12em] text-[#FAF7F2] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#44332C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm border border-[#C6A46A] bg-[#FAF7F2] px-5 py-3 text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C6A46A] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={SALON_INFO.googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-sm border border-[#30241F]/30 px-5 py-3 text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#30241F] hover:text-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
              >
                <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map centered on Ghazikot Township, Mansehra */}
          <div className="lg:col-span-7">
            <div className="relative h-[400px] w-full overflow-hidden rounded-sm border border-[#C6A46A]/35 bg-[#FAF7F2] shadow-[0_20px_50px_-28px_rgba(48,36,31,0.16)] lg:h-full lg:min-h-[460px]">
              <iframe
                title="Begum Tareen Beauty Salon location map in Ghazikot Township, Mansehra"
                src={SALON_INFO.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
