import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CORE_PILLARS } from '@/data/company';
import { Icon } from '@/components/ui/Icon';

export const AboutSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-surface-container-lowest border-b border-surface-container-highest"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
            <Icon name="corporate_fare" className="text-sm" />
            <span>Corporate Overview</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            About Polazzo Tact Nig. Ltd.
          </h2>
          <div className="w-16 h-1 bg-primary mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Body Narrative & 4 Pillars Bento */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed font-medium">
              Established as a premier general contracting firm providing comprehensive construction services
              for a diverse pool of clients cutting across wide varieties of industries in Nigeria. We combine
              cutting-edge technology, rigorous project management, and sustainable building methodologies.
            </p>
            <p className="font-body-md text-body-md text-tertiary leading-relaxed">
              From initial site feasibility and geotechnical surveys to full-scale architectural fabrication,
              structural civil execution, and turnkey handover, Polazzo Tact Nig. Ltd. embodies operational
              precision. Headquartered with full operational capability across Lagos and Abuja, we serve
              multi-national conglomerates, public infrastructure authorities, and private real estate investors
              with uncompromising dedication.
            </p>

            {/* 4 Pillars Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {CORE_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`p-4 bg-surface-container-low border-l-4 ${pillar.borderClass} rounded-DEFAULT`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={pillar.icon} className={`${pillar.iconColorClass} text-[20px]`} />
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-base">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-tertiary">{pillar.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about/our-company"
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold uppercase tracking-wider hover:gap-3 transition-all"
            >
              <span>Learn More About Us</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>

          {/* Right Side: Structural Graphic & Photo Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-56 bg-surface-container overflow-hidden rounded-DEFAULT border border-outline-variant shadow-sm">
                <Image
                  src="/images/drafting-desk.jpg"
                  alt="Close up architectural drafting desk with blueprints, laser distance meter, construction safety helmet, and scale ruler in a bright Nigerian engineering design studio."
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-inverse-surface text-inverse-on-surface rounded-DEFAULT border-l-4 border-primary">
                <div className="font-headline-md text-headline-md font-bold text-secondary-fixed">
                  RC: 1087410
                </div>
                <p className="font-body-sm text-body-sm text-tertiary-fixed-dim mt-1">
                  Incorporated with the Corporate Affairs Commission (CAC) of the Federal Republic of Nigeria.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-6 bg-surface-container-high rounded-DEFAULT border border-surface-container-highest">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="architecture" className="text-primary text-3xl" />
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Turnkey Ready
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-tertiary">
                  From schematic architectural draft to certified structural commissioning.
                </p>
              </div>
              <div className="relative h-56 bg-surface-container overflow-hidden rounded-DEFAULT border border-outline-variant shadow-sm">
                <Image
                  src="/images/steel-erection.jpg"
                  alt="Heavy steel beam erection on an industrial plant site with Nigerian ironworkers securing structural joints using pneumatic tools against a crisp clear sky in Lagos industrial area."
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
