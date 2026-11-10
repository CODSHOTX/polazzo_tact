import { TopUtilityStrip } from '@/components/layout/TopUtilityStrip';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { MetricsBar } from '@/components/sections/MetricsBar';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* Top Utility Strip with Phone, Email, RC, Operational Hubs */}
      <TopUtilityStrip />

      {/* Main Sticky Navigation Header */}
      <Header />

      {/* Main Structural Cross-Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Operational Metrics Cadence Ticker */}
        <MetricsBar />

        {/* Corporate Profile & 4 Core Pillars */}
        <AboutSection />

        {/* Comprehensive Engineering & Construction Services */}
        <ServicesSection />

        {/* Filterable Engineering Projects Portfolio */}
        <ProjectsSection />

        {/* Institutional Client Advantages & Operational Pillars */}
        <WhyChooseUs />

        {/* Consultation, Regional Hubs & RFP Technical Submission */}
        <ContactSection />
      </main>

      {/* Multi-Column Corporate Footer & Legal Notice */}
      <Footer />
    </div>
  );
}
