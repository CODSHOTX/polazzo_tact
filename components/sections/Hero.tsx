import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-surface-container-low engineering-grid border-b border-surface-container-highest overflow-hidden"
      id="home"
    >
      {/* Accent Top Mechanical Edge */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary-container to-primary" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Value Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest border border-outline-variant w-fit rounded-DEFAULT mb-6 shadow-sm">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-bold">
              Federal Republic of Nigeria &bull; RC: 1087410
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl font-bold tracking-tight text-on-background mb-6">
            Redefining Construction with{' '}
            <span className="text-primary border-b-4 border-secondary-container">
              Engineering Precision
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-tertiary mb-8 max-w-2xl leading-relaxed">
            Polazzo Tact Nig. Ltd. delivers world-class commercial, industrial, and infrastructure
            engineering across Nigeria with unmatched safety and craftsmanship.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="#projects"
              className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-7 py-3.5 rounded-DEFAULT font-bold tracking-wider uppercase transition-all shadow-md active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Explore Our Projects</span>
              <Icon name="view_quilt" className="text-[18px]" />
            </Link>

            <Link
              href="#services"
              className="bg-inverse-surface hover:bg-tertiary-container text-inverse-on-surface font-label-lg text-label-lg px-7 py-3.5 rounded-DEFAULT font-bold tracking-wider uppercase transition-all active:scale-[0.98] inline-flex items-center gap-2 border border-tertiary"
            >
              <span>Discover Our Services</span>
              <Icon name="build" className="text-[18px]" />
            </Link>
          </div>

          {/* Tectonic Spec Bar */}
          <div className="pt-6 border-t border-outline-variant flex flex-wrap gap-8 text-on-surface-variant">
            <div className="flex items-center gap-2">
              <Icon name="verified_user" className="text-primary text-[20px]" />
              <span className="font-label-md text-label-md font-semibold">Tier 1 Quality Assurance</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="shield" className="text-secondary-container text-[20px]" />
              <span className="font-label-md text-label-md font-semibold">Rigorous HSE Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="precision_manufacturing" className="text-primary text-[20px]" />
              <span className="font-label-md text-label-md font-semibold">Turnkey Structural Capability</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Assembly */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-surface-container-lowest border-2 border-inverse-surface rounded-DEFAULT shadow-[6px_6px_0px_#27313d] overflow-hidden p-2">
            {/* Live badge */}
            <div className="absolute top-4 left-4 z-10 bg-inverse-surface text-on-primary px-3 py-1 text-label-sm font-label-sm uppercase font-bold tracking-wider border-l-4 border-primary">
              Active Infrastructure Site
            </div>

            <div className="relative h-80 md:h-96 w-full overflow-hidden bg-surface-container">
              <Image
                src="/images/hero-site.jpg"
                alt="A modern massive civil engineering and industrial construction site in Nigeria with heavy yellow cranes, reinforced concrete framing, steel structural girders, and Nigerian project engineers wearing high-visibility orange safety vests and white hardhats under bright natural daylight."
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Technical Spec Pod below image */}
            <div className="p-4 bg-surface-container-lowest grid grid-cols-2 gap-4 border-t border-outline-variant mt-2">
              <div className="border-l-2 border-primary pl-3">
                <span className="font-label-sm text-label-sm uppercase text-tertiary block">
                  Current Lead Focus
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Industrial &amp; Civil
                </span>
              </div>
              <div className="border-l-2 border-secondary-container pl-3">
                <span className="font-label-sm text-label-sm uppercase text-tertiary block">
                  Operational Reach
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Pan-Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
