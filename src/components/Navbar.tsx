import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';

const NAV_LINKS = [
  {label: 'Home', href: '#home'},
  {label: 'About', href: '#about'},
  {label: 'Services', href: '#services'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Reviews', href: '#reviews'},
  {label: 'Contact', href: '#contact'},
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#C6A46A]/25 bg-[#FAF7F2]/95 shadow-[0_4px_24px_-12px_rgba(48,36,31,0.12)] backdrop-blur-md'
          : 'border-b border-transparent bg-[#FAF7F2]/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-5 py-3.5 md:px-10 md:py-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex flex-col whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] rounded-sm"
        >
          <span className="font-serif text-xl font-semibold tracking-[0.14em] text-[#30241F] sm:text-2xl">
            BEGUM TAREEN
          </span>
          <span className="text-[10px] font-medium tracking-[0.28em] text-[#9B8A7A] uppercase">
            Beauty Salon
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="relative py-1 text-sm font-medium tracking-wide text-[#30241F]/85 transition-colors duration-200 hover:text-[#30241F] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#C6A46A] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#booking');
            }}
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-[#30241F] px-5 py-2.5 text-xs font-medium tracking-[0.12em] text-[#FAF7F2] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#44332C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
          >
            Book Appointment
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#C6A46A]/35 text-[#30241F] transition-colors hover:bg-[#F4EEE5] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
            className="border-t border-[#C6A46A]/20 bg-[#FAF7F2] px-6 py-6 shadow-lg lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="border-b border-[#C6A46A]/15 py-3 text-base font-medium text-[#30241F] transition-colors hover:text-[#B89A65]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#booking');
                }}
                className="mt-5 inline-flex w-full items-center justify-center rounded-sm bg-[#30241F] px-6 py-3.5 text-xs font-medium tracking-[0.14em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#44332C]"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
