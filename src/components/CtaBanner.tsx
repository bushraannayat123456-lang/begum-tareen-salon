export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#30241F] py-20 text-[#FAF7F2] md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,164,106,0.16),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-[960px] px-5 text-center md:px-10">
        <div className="mx-auto max-w-2xl border border-[#C6A46A]/35 px-6 py-12 sm:px-12 sm:py-14">
          <p className="text-xs font-medium tracking-[0.24em] text-[#C6A46A] uppercase">
            Begum Tareen Beauty Salon
          </p>

          <h2 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.1rem)] font-medium leading-[1.12] text-[#FAF7F2]">
            Your Next Beautiful Moment Starts Here
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-[1.75] text-[#FAF7F2]/85 sm:text-base">
            Make your special moments even more beautiful. Contact Begum Tareen
            Beauty Salon to plan your next beauty appointment.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#booking"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#C6A46A] px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-[#30241F] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2] whitespace-nowrap shrink-0"
            >
              Book an Appointment
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#C6A46A]/60 px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-[#FAF7F2] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#30241F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2] whitespace-nowrap shrink-0"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
