/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import {MotionConfig} from 'motion/react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {AboutSection} from './components/AboutSection';
import {ServicesSection} from './components/ServicesSection';
import {BridalFeatureSection} from './components/BridalFeatureSection';
import {GallerySection} from './components/GallerySection';
import {ReviewsSection} from './components/ReviewsSection';
import {SocialInspirationSection} from './components/SocialInspirationSection';
import {BookingSection} from './components/BookingSection';
import {FaqSection} from './components/FaqSection';
import {ContactSection} from './components/ContactSection';
import {CtaBanner} from './components/CtaBanner';
import {Footer} from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Bridal Makeup');

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FAF7F2] text-[#30241F] selection:bg-[#C6A46A]/25">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection onBookService={handleBookService} />
          <BridalFeatureSection
            onEnquireBridal={() => handleBookService('Bridal Makeup')}
          />
          <GallerySection />
          <ReviewsSection />
          <SocialInspirationSection />
          <BookingSection preselectedService={selectedService} />
          <FaqSection />
          <ContactSection />
          <CtaBanner />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
