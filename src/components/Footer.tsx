import {ArrowUp} from 'lucide-react';
import {SALON_INFO} from '../data/salonData';

const QUICK_LINKS = [
  {label: 'Home', href: '#home'},
  {label: 'About', href: '#about'},
  {label: 'Services', href: '#services'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Reviews', href: '#reviews'},
  {label: 'Contact', href: '#contact'},
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="border-t border-[#C6A46A]/25 bg-[#FAF7F2] text-[#30241F]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-[0.14em] text-[#30241F]">
                {SALON_INFO.shortName}
              </span>
              <span className="text-[11px] font-medium tracking-[0.28em] text-[#9B8A7A] uppercase">
                {SALON_INFO.subtitle}
              </span>
            </div>
            <p className="mt-4 font-serif text-xl italic text-[#68584D]">
              &ldquo;Beauty, elegance, and confidence.&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.18em] text-[#9B8A7A] uppercase">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#68584D] transition-colors hover:text-[#30241F]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3">
            <p className="text-xs font-medium tracking-[0.18em] text-[#9B8A7A] uppercase">
              Contact
            </p>
            <div className="mt-4 space-y-2.5 text-sm leading-[1.7] text-[#68584D]">
              <p>
                <a
                  href={SALON_INFO.phoneHref}
                  className="font-medium text-[#30241F] transition-colors hover:text-[#B89A65] tabular-nums"
                >
                  {SALON_INFO.phoneDisplay}
                </a>
              </p>
              <p>{SALON_INFO.shortAddress}</p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="md:col-span-2 md:flex md:flex-col md:items-end">
            <a
              href="#booking"
              className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[#30241F] px-5 py-2.5 text-xs font-medium tracking-[0.12em] text-[#FAF7F2] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#44332C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
            >
              Book Your Appointment
            </a>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#C6A46A]/25 pt-8 sm:flex-row">
          <p className="text-xs text-[#68584D]">
            &copy; 2026 Begum Tareen Beauty Salon. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-sm border border-[#C6A46A]/35 px-4 py-2 text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase transition-colors hover:bg-[#F4EEE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#B89A65]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
