import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {FAQ_ITEMS} from '../data/salonData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#FAF7F2] py-20 md:py-24">
      <div className="mx-auto max-w-[920px] px-5 md:px-10">
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
            <span aria-hidden="true" className="h-[1px] w-6 bg-[#C6A46A]" />
            <span>Questions &amp; Answers</span>
            <span aria-hidden="true" className="h-[1px] w-6 bg-[#C6A46A]" />
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-medium leading-tight text-[#30241F]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-[#C6A46A]/25 border-y border-[#C6A46A]/25">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#B89A65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] cursor-pointer"
                >
                  <span className="font-serif text-xl font-medium text-[#30241F] sm:text-2xl">
                    {item.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-[#B89A65] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{opacity: 0, height: 0}}
                      animate={{opacity: 1, height: 'auto'}}
                      exit={{opacity: 0, height: 0}}
                      transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-sm leading-[1.8] text-[#68584D] sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
