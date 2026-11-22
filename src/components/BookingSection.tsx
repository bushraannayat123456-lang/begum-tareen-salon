import {FormEvent, useEffect, useState} from 'react';
import {CheckCircle2, ExternalLink, Phone} from 'lucide-react';
import {
  buildWhatsAppUrl,
  SALON_INFO,
  SERVICES,
} from '../data/salonData';

interface BookingSectionProps {
  preselectedService: string;
}

interface BookingFormState {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
}

const TIME_SLOTS = [
  '09:00 AM',
  '10:30 AM',
  '12:00 PM',
  '02:00 PM',
  '04:00 PM',
  '06:00 PM',
];

export function BookingSection({preselectedService}: BookingSectionProps) {
  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    service: preselectedService || SERVICES[0].title,
    preferredDate: '',
    preferredTime: '12:00 PM',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] =
    useState<BookingFormState | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({...prev, service: preselectedService}));
      setSubmittedUrl(null);
    }
  }, [preselectedService]);

  const todayIso = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const cleanDigits = form.phone.replace(/[^\d]/g, '');
    if (!form.phone.trim() || cleanDigits.length < 7) {
      nextErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (!form.service.trim()) {
      nextErrors.service = 'Please select a beauty service.';
    }
    if (!form.preferredDate) {
      nextErrors.preferredDate = 'Please choose your preferred date.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const lines = [
      `Assalam-o-Alaikum, I would like to request an appointment at ${SALON_INFO.name}.`,
      '',
      `Name: ${form.fullName.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Desired Service: ${form.service}`,
      `Preferred Date: ${form.preferredDate}`,
      `Preferred Time: ${form.preferredTime || 'Flexible'}`,
    ];

    if (form.message.trim()) {
      lines.push(`Notes: ${form.message.trim()}`);
    }

    lines.push('', 'Please let me know if this slot is available for confirmation.');

    const whatsappUrl = buildWhatsAppUrl(lines.join('\n'));
    setSubmittedSummary({...form});
    setSubmittedUrl(whatsappUrl);

    // Open WhatsApp in a new tab using a programmatic link click (avoids window.open popup blocking where possible)
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section
      id="booking"
      className="border-y border-[#C6A46A]/20 bg-[#F4EEE5]/75 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Guidance Column */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.22em] text-[#9B8A7A] uppercase">
              <span aria-hidden="true" className="h-[1px] w-8 bg-[#C6A46A]" />
              <span>Appointment Request</span>
            </div>

            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.15rem)] font-medium leading-[1.12] text-[#30241F]">
              Let&apos;s Make Your Beauty Appointment
            </h2>

            <p className="mt-5 text-base leading-[1.75] text-[#68584D] sm:text-[17px]">
              Ready for your next beauty moment? Get in touch with us to
              discuss your preferred service and appointment.
            </p>

            <div className="mt-8 space-y-4 border-t border-[#C6A46A]/25 pt-7 text-sm text-[#68584D]">
              <p>
                Submitting this form prepares your appointment request for
                WhatsApp so our salon team can confirm availability directly
                with you.
              </p>
              <p className="font-medium text-[#30241F]">
                {SALON_INFO.openingInfo} · {SALON_INFO.shortAddress}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SALON_INFO.phoneHref}
                className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-sm border border-[#30241F]/35 bg-transparent px-6 py-3 text-xs font-medium tracking-[0.14em] text-[#30241F] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#30241F] hover:text-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Call the Salon</span>
              </a>
              <span className="text-sm font-medium text-[#30241F] tabular-nums">
                {SALON_INFO.phoneDisplay}
              </span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-[#C6A46A]/30 bg-[#FFFFFF] p-6 shadow-[0_20px_50px_-28px_rgba(48,36,31,0.16)] sm:p-9">
              {submittedUrl && submittedSummary ? (
                <div className="py-4" role="status" aria-live="polite">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[#B89A65]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-[#30241F]">
                        Appointment Request Ready
                      </h3>
                      <p className="mt-2 text-sm leading-[1.7] text-[#68584D]">
                        Thank you, {submittedSummary.fullName}. Your request is
                        not confirmed automatically—please send the prepared
                        WhatsApp message below so our salon team can confirm
                        your appointment.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-sm border border-[#C6A46A]/25 bg-[#FAF7F2] p-5 text-sm text-[#30241F]">
                    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <dt className="text-xs tracking-wide text-[#9B8A7A] uppercase">
                          Service
                        </dt>
                        <dd className="mt-0.5 font-medium">
                          {submittedSummary.service}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs tracking-wide text-[#9B8A7A] uppercase">
                          Phone
                        </dt>
                        <dd className="mt-0.5 font-medium tabular-nums">
                          {submittedSummary.phone}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs tracking-wide text-[#9B8A7A] uppercase">
                          Preferred Date
                        </dt>
                        <dd className="mt-0.5 font-medium tabular-nums">
                          {submittedSummary.preferredDate}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs tracking-wide text-[#9B8A7A] uppercase">
                          Preferred Time
                        </dt>
                        <dd className="mt-0.5 font-medium tabular-nums">
                          {submittedSummary.preferredTime}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[#30241F] px-7 py-3.5 text-xs font-medium tracking-[0.14em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#44332C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] whitespace-nowrap shrink-0"
                    >
                      <span>Send Request on WhatsApp</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedUrl(null)}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#30241F]/30 px-5 py-3 text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase transition-colors hover:bg-[#F4EEE5] cursor-pointer"
                    >
                      Edit Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase"
                      >
                        Full Name <span className="text-[#B89A65]">*</span>
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({...form, fullName: e.target.value});
                          if (errors.fullName) {
                            setErrors({...errors, fullName: undefined});
                          }
                        }}
                        placeholder="Your full name"
                        className="mt-2 block w-full rounded-sm border border-[#C6A46A]/35 bg-[#FAF7F2]/60 px-4 py-3 text-sm text-[#30241F] placeholder:text-[#9B8A7A] focus:border-[#30241F] focus:bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#30241F]"
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase"
                      >
                        Phone Number <span className="text-[#B89A65]">*</span>
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          setForm({...form, phone: e.target.value});
                          if (errors.phone) {
                            setErrors({...errors, phone: undefined});
                          }
                        }}
                        placeholder="+92 3XX XXXXXXX"
                        className="mt-2 block w-full rounded-sm border border-[#C6A46A]/35 bg-[#FAF7F2]/60 px-4 py-3 text-sm text-[#30241F] placeholder:text-[#9B8A7A] focus:border-[#30241F] focus:bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#30241F]"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase"
                    >
                      Desired Service <span className="text-[#B89A65]">*</span>
                    </label>
                    <select
                      id="booking-service"
                      value={form.service}
                      onChange={(e) =>
                        setForm({...form, service: e.target.value})
                      }
                      className="mt-2 block w-full rounded-sm border border-[#C6A46A]/35 bg-[#FAF7F2]/60 px-4 py-3 text-sm text-[#30241F] focus:border-[#30241F] focus:bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#30241F]"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-date"
                        className="block text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase"
                      >
                        Preferred Date <span className="text-[#B89A65]">*</span>
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        required
                        min={todayIso}
                        value={form.preferredDate}
                        onChange={(e) => {
                          setForm({...form, preferredDate: e.target.value});
                          if (errors.preferredDate) {
                            setErrors({...errors, preferredDate: undefined});
                          }
                        }}
                        className="mt-2 block w-full rounded-sm border border-[#C6A46A]/35 bg-[#FAF7F2]/60 px-4 py-3 text-sm text-[#30241F] focus:border-[#30241F] focus:bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#30241F]"
                      />
                      {errors.preferredDate && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-time"
                        className="block text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase"
                      >
                        Preferred Time
                      </label>
                      <select
                        id="booking-time"
                        value={form.preferredTime}
                        onChange={(e) =>
                          setForm({...form, preferredTime: e.target.value})
                        }
                        className="mt-2 block w-full rounded-sm border border-[#C6A46A]/35 bg-[#FAF7F2]/60 px-4 py-3 text-sm text-[#30241F] focus:border-[#30241F] focus:bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#30241F]"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-message"
                      className="block text-xs font-medium tracking-[0.12em] text-[#30241F] uppercase"
                    >
                      Additional Message
                    </label>
                    <textarea
                      id="booking-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) =>
                        setForm({...form, message: e.target.value})
                      }
                      placeholder="Share your occasion details or any questions for our team..."
                      className="mt-2 block w-full rounded-sm border border-[#C6A46A]/35 bg-[#FAF7F2]/60 px-4 py-3 text-sm text-[#30241F] placeholder:text-[#9B8A7A] focus:border-[#30241F] focus:bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#30241F]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[50px] w-full items-center justify-center rounded-sm bg-[#30241F] px-8 py-3.5 text-xs font-medium tracking-[0.16em] text-[#FAF7F2] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#44332C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A46A] cursor-pointer"
                    >
                      Request Appointment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
