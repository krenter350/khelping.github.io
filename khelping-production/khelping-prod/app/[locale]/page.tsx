'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Link } from 'next-intl/navigation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import FeeComparison from '@/components/FeeComparison';
import TrustSection from '@/components/TrustSection';
import ShopLogos from '@/components/ShopLogos';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PainPoints />
      <HowItWorks />
      <FeeComparison />
      <TrustSection />
      <ShopLogos />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
      {/* Spacer for floating CTA */}
      <div className="h-16" />
    </main>
  );
}
