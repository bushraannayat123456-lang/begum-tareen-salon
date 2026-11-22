export const SALON_INFO = {
  name: 'Begum Tareen Beauty Salon',
  shortName: 'BEGUM TAREEN',
  subtitle: 'BEAUTY SALON',
  category: 'Beauty Salon',
  rating: '4.9',
  reviewCount: 806,
  address: 'House #7, Ghazi Kot Sector E, Ghazikot Township, Mansehra, Pakistan',
  shortAddress: 'Ghazi Kot Sector E, Ghazikot Township, Mansehra, Pakistan',
  phoneDisplay: '+92 336 8812347',
  phoneHref: 'tel:+923368812347',
  whatsappNumber: '923368812347',
  plusCode: '8645+RX Mansehra, Pakistan',
  openingInfo: 'Opens at 9:00 AM (Monday)',
  googleDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Begum+Tareen+Beauty+Salon+8645%2BRX+Mansehra+Pakistan',
  googleReviewsUrl:
    'https://www.google.com/search?q=Begum+Tareen+Beauty+Salon+Ghazikot+Township+Mansehra+reviews',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Begum+Tareen+Beauty+Salon,+Ghazi+Kot+Sector+E,+Ghazikot+Township,+Mansehra,+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed',
} as const;

export const SALON_IMAGES = {
  heroBridal: '/src/assets/images/hero_bridal_editorial_clean_1795363639604.jpg',
  aboutInterior: '/src/assets/images/about_salon_interior_1795363619797.jpg',
  bridalMakeup: '/src/assets/images/service_bridal_makeup_1795363619295.jpg',
  partyMakeup: '/src/assets/images/service_party_makeup_1795363620280.jpg',
  hairStyling: '/src/assets/images/service_hair_styling_1795363619427.jpg',
  facialSkincare: '/src/assets/images/service_facial_skincare_1795363621278.jpg',
  beautyTreatments: '/src/assets/images/service_beauty_treatments_1795363619545.jpg',
  specialOccasion: '/src/assets/images/service_special_occasion_1795363619362.jpg',
  bridalBanner: '/src/assets/images/feature_bridal_banner_1795363619647.jpg',
  galleryCloseup: '/src/assets/images/gallery_makeup_closeup_1795363619822.jpg',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface ServiceItem {
  id: string;
  indexLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  pricingInquiryText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'bridal-makeup',
    indexLabel: '01.',
    title: 'Bridal Makeup',
    description: 'Elegant bridal beauty looks for your most unforgettable day.',
    image: SALON_IMAGES.bridalMakeup,
    imageAlt: 'South Asian bride receiving luxury bridal makeup artistry at Begum Tareen Beauty Salon',
    pricingInquiryText:
      'Assalam-o-Alaikum, I would like to ask about pricing and availability for Bridal Makeup at Begum Tareen Beauty Salon.',
  },
  {
    id: 'party-makeup',
    indexLabel: '02.',
    title: 'Party Makeup',
    description: 'Glamorous makeup looks for celebrations, parties, and special occasions.',
    image: SALON_IMAGES.partyMakeup,
    imageAlt: 'Glamorous evening party makeup look with warm bronze shimmer and rosewood lips',
    pricingInquiryText:
      'Assalam-o-Alaikum, I would like to ask about pricing and availability for Party Makeup at Begum Tareen Beauty Salon.',
  },
  {
    id: 'hair-styling',
    indexLabel: '03.',
    title: 'Hair Styling',
    description: 'Beautiful hairstyles designed to complement your look and occasion.',
    image: SALON_IMAGES.hairStyling,
    imageAlt: 'Sculpted bridal and occasion updo hairstyle adorned with delicate gold and pearl pins',
    pricingInquiryText:
      'Assalam-o-Alaikum, I would like to ask about pricing and availability for Hair Styling at Begum Tareen Beauty Salon.',
  },
  {
    id: 'facial-skincare',
    indexLabel: '04.',
    title: 'Facial & Skincare',
    description: 'Relaxing beauty care focused on a refreshed and radiant appearance.',
    image: SALON_IMAGES.facialSkincare,
    imageAlt: 'Serene luxury facial and botanical skincare treatment in a calm ivory salon suite',
    pricingInquiryText:
      'Assalam-o-Alaikum, I would like to ask about pricing and availability for Facial & Skincare at Begum Tareen Beauty Salon.',
  },
  {
    id: 'beauty-treatments',
    indexLabel: '05.',
    title: 'Beauty Treatments',
    description: 'Personalized beauty services to help you feel polished and confident.',
    image: SALON_IMAGES.beautyTreatments,
    imageAlt: 'Curated luxury beauty treatment tools and skincare essentials on warm travertine stone',
    pricingInquiryText:
      'Assalam-o-Alaikum, I would like to ask about pricing and availability for Beauty Treatments at Begum Tareen Beauty Salon.',
  },
  {
    id: 'special-occasion-beauty',
    indexLabel: '06.',
    title: 'Special Occasion Beauty',
    description: 'Complete beauty styling for celebrations, events, and memorable moments.',
    image: SALON_IMAGES.specialOccasion,
    imageAlt: 'Celebratory special occasion beauty portrait with radiant makeup and soft waves',
    pricingInquiryText:
      'Assalam-o-Alaikum, I would like to ask about pricing and availability for Special Occasion Beauty at Begum Tareen Beauty Salon.',
  },
];

export type GalleryCategory = 'All' | 'Bridal' | 'Makeup' | 'Hair' | 'Beauty';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  subtitle: string;
  image: string;
  alt: string;
  layoutClass: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Bridal',
  'Makeup',
  'Hair',
  'Beauty',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-bridal-portrait',
    title: 'Signature Ivory Bridal',
    category: 'Bridal',
    subtitle: 'Luminous bridal complexion & traditional gold detailing',
    image: SALON_IMAGES.heroBridal,
    alt: 'Pakistani bride styled in ivory silk with warm champagne gold eye makeup',
    layoutClass: 'md:col-span-2 md:row-span-2 aspect-[3/4] md:aspect-auto',
  },
  {
    id: 'g-makeup-artistry',
    title: 'Champagne Glow Finish',
    category: 'Makeup',
    subtitle: 'Soft sunlit shimmer and natural skin texture',
    image: SALON_IMAGES.galleryCloseup,
    alt: 'Close-up editorial beauty portrait featuring radiant champagne eye shimmer',
    layoutClass: 'md:col-span-1 md:row-span-1 aspect-[4/3] md:aspect-[3/4]',
  },
  {
    id: 'g-hair-updo',
    title: 'Sculpted Pearl Updo',
    category: 'Hair',
    subtitle: 'Textured braided chignon with floral gold pins',
    image: SALON_IMAGES.hairStyling,
    alt: 'Intricate braided updo hairstyle with pearl hair accessories',
    layoutClass: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
  },
  {
    id: 'g-bridal-touches',
    title: 'Bridal Finishing Touches',
    category: 'Bridal',
    subtitle: 'Warm bronze artistry for the wedding day',
    image: SALON_IMAGES.bridalMakeup,
    alt: 'Bridal makeup application with soft brush and glowing complexion',
    layoutClass: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
  },
  {
    id: 'g-party-glam',
    title: 'Evening Rosewood Glam',
    category: 'Makeup',
    subtitle: 'Candlelit celebration makeup & sleek waves',
    image: SALON_IMAGES.partyMakeup,
    alt: 'Evening party makeup with soft smoky eyes and rosewood lips',
    layoutClass: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
  },
  {
    id: 'g-salon-sanctuary',
    title: 'The Salon Sanctuary',
    category: 'Beauty',
    subtitle: 'Warm travertine & champagne brass studio in Mansehra',
    image: SALON_IMAGES.aboutInterior,
    alt: 'Begum Tareen Beauty Salon luxury vanity mirrors and cream seating',
    layoutClass: 'md:col-span-2 md:row-span-1 aspect-[16/9]',
  },
  {
    id: 'g-skincare-ritual',
    title: 'Botanical Radiance Ritual',
    category: 'Beauty',
    subtitle: 'Calming facial care for luminous, refreshed skin',
    image: SALON_IMAGES.facialSkincare,
    alt: 'Relaxing facial and skincare ritual with warm towels',
    layoutClass: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
  },
  {
    id: 'g-occasion-look',
    title: 'Celebration Elegance',
    category: 'Hair',
    subtitle: 'Soft cascading curls paired with radiant blush tones',
    image: SALON_IMAGES.specialOccasion,
    alt: 'Special occasion beauty styling with soft curls and pearl earrings',
    layoutClass: 'md:col-span-1 md:row-span-1 aspect-[4/3]',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How can I book an appointment?',
    answer:
      'You can submit your preferred service, date, and time using our Appointment Request form above, which prepares a formatted WhatsApp message directly for our salon at +92 336 8812347. You may also call us directly to request your preferred slot. Our team will confirm availability with you personally.',
  },
  {
    question: 'Where is Begum Tareen Beauty Salon located?',
    answer:
      'We are located at House #7, Ghazi Kot Sector E, Ghazikot Township, Mansehra, Pakistan (Google Maps Plus Code: 8645+RX Mansehra, Pakistan). You can view our interactive map and open Google Maps directions in the Contact section below.',
  },
  {
    question: 'How can I contact the salon?',
    answer:
      'You can reach Begum Tareen Beauty Salon by phone or WhatsApp at +92 336 8812347. According to our Google listing, the salon opens at 9:00 AM on Monday.',
  },
  {
    question: 'How can I enquire about bridal makeup?',
    answer:
      'Select "Bridal Makeup" in our booking form or click "Enquire About Bridal Makeup" to message us directly on WhatsApp (+92 336 8812347) with your event date and preferences.',
  },
  {
    question: 'How can I ask about service prices?',
    answer:
      'For current pricing and personalized service recommendations, please tap "Ask for Pricing" on any service card to message us on WhatsApp, or call +92 336 8812347 to speak with our team directly.',
  },
];
