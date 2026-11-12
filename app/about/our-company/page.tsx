import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { Icon } from '@/components/ui/Icon';
import {
  WHO_WE_ARE,
  SPECIALIZATIONS,
  VISION,
  MISSION,
  COMPANY_VALUES,
  VALUES_STATEMENT,
  STRATEGY,
  WHY_US,
  WHY_US_STATEMENT,
  PARTNER,
} from '@/data/about';

export const metadata: Metadata = {
  title: 'Our Company',
  description:
    'Who we are, our vision, mission, values and strategy, why clients choose Polazzo Tact Nigeria Limited, and our reliable partners.',
  alternates: { canonical: '/about/our-company' },
};

const SectionHeading = ({ eyebrow, icon, title }: { eyebrow: string; icon: string; title: string }) => (
  <div className="max-w-3xl mb-10">
    <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
      <Icon name={icon} className="text-sm" />
      <span>{eyebrow}</span>
    </div>
    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">{title}</h2>
    <div className="w-16 h-1 bg-primary mt-3" />
  </div>
);

export default function OurCompanyPage() {
  return (
    <>
      <PageHero
        parent="About"
        eyebrow="Our Company"
        eyebrowIcon="corporate_fare"
        title="Polazzo Tact"
        highlight="Nig. Ltd."
        description="A general contracting firm delivering building construction, facilities maintenance, mechanical and electrical installations, materials supply and real estate development across Nigeria."
        imageSrc="/images/hero-site.jpg"
        imageAlt="Active Polazzo Tact construction site in Nigeria."
      />

      {/* Who We Are */}
      <section id="who-we-are" className="py-20 bg-surface-container-lowest scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Who We Are" icon="apartment" title="A Major Player in Nigerian Construction" />
            <div className="space-y-5">
              {WHO_WE_ARE.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'font-body-lg text-body-lg text-on-surface leading-relaxed font-medium'
                      : 'font-body-md text-body-md text-tertiary leading-relaxed'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="relative h-64 overflow-hidden rounded-DEFAULT border border-outline-variant shadow-sm">
              <Image
                src="/images/drafting-desk.jpg"
                alt="Architectural drafting desk with blueprints and a safety helmet."
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-surface-container-low border-l-4 border-primary rounded-DEFAULT">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-4">
                We Specialize In
              </h3>
              <ul className="space-y-3">
                {SPECIALIZATIONS.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 shrink-0 bg-primary-fixed text-primary rounded-DEFAULT">
                      <Icon name={item.icon} className="text-[20px]" />
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-surface-container-low engineering-grid scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-8 md:p-10 bg-inverse-surface text-inverse-on-surface rounded-DEFAULT border-l-4 border-secondary-container shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <Icon name="visibility" className="text-secondary-container text-3xl" />
              <h2 className="font-headline-md text-headline-md">
                Our <span className="text-secondary-container">Vision</span>
              </h2>
            </div>
            <p className="font-body-lg text-body-lg leading-relaxed text-surface-container-highest">{VISION}</p>
          </article>
          <article className="p-8 md:p-10 bg-primary text-on-primary rounded-DEFAULT border-l-4 border-inverse-surface shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <Icon name="flag" className="text-secondary-fixed text-3xl" />
              <h2 className="font-headline-md text-headline-md">
                Our <span className="text-secondary-fixed">Mission</span>
              </h2>
            </div>
            <p className="font-body-lg text-body-lg leading-relaxed text-primary-fixed">{MISSION}</p>
          </article>
        </div>
      </section>

      {/* Values & Strategy */}
      <section id="values" className="py-20 bg-surface-container-lowest scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our Values" icon="diamond" title="The Crux of Our Foundation" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {COMPANY_VALUES.map((value) => (
                <div
                  key={value.title}
                  className="p-5 bg-surface-container-low border-t-4 border-primary rounded-DEFAULT text-center"
                >
                  <Icon name={value.icon} className="text-primary text-4xl mb-2" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wide text-base">
                    {value.title}
                  </h3>
                </div>
              ))}
            </div>
            <p className="font-body-md text-body-md text-tertiary leading-relaxed">{VALUES_STATEMENT}</p>
          </div>

          <div id="strategy" className="lg:col-span-5 scroll-mt-24">
            <SectionHeading eyebrow="Our Strategy" icon="insights" title="Sustainable, Cost-Effective Delivery" />
            <div className="p-8 bg-surface-container-high border-l-4 border-secondary-container rounded-DEFAULT">
              <Icon name="format_quote" className="text-secondary text-4xl mb-2" />
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">{STRATEGY}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="bg-surface-container-lowest border-t border-surface-container-highest scroll-mt-24">
        <div className="bg-inverse-surface">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="font-headline-xl text-headline-xl text-inverse-on-surface">
              <span className="text-secondary-container">Why</span> Us?
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3">
          {WHY_US.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`py-6 md:py-0 md:px-8 ${index === 0 ? 'md:pl-0' : 'border-t md:border-t-0 md:border-l border-secondary-container'} ${
                index === WHY_US.length - 1 ? 'md:pr-0' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon name={pillar.icon} className="text-primary text-[22px]" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase tracking-wide">
                  {pillar.title}
                </h3>
              </div>
              <div className="space-y-4">
                {pillar.paragraphs.map((paragraph, i) => (
                  <p key={i} className="font-body-md text-body-md text-tertiary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="bg-tertiary-container">
          <div className="max-w-7xl mx-auto px-6 py-10 flex items-start gap-4">
            <Icon name="format_quote" className="text-secondary-container text-4xl shrink-0" />
            <p className="font-headline-md text-headline-md text-secondary-container max-w-3xl font-medium">
              {WHY_US_STATEMENT}
            </p>
          </div>
        </div>
      </section>

      {/* Reliable Partners */}
      <section id="partners" className="py-20 bg-surface-container-low scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Reliable Partners" icon="handshake" title="Our Strategic Partnership" />

          <div className="grid grid-cols-1 md:grid-cols-2 shadow-md">
            <article className="p-8 md:p-12 bg-secondary-container text-on-secondary-fixed md:[clip-path:polygon(0_6%,100%_0,100%_100%,0_94%)]">
              <h3 className="font-headline-lg text-headline-lg leading-tight mb-6">
                reliable <span className="text-on-secondary-fixed-variant">partners</span>
                <br />
                committed <span className="text-on-secondary-fixed-variant">experts</span>
              </h3>
              <p className="font-body-md text-body-md leading-relaxed">{PARTNER.about}</p>
            </article>

            <article className="p-8 md:p-12 bg-primary-container text-on-primary md:[clip-path:polygon(0_0,100%_6%,100%_94%,0_100%)]">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="security" className="text-secondary-fixed text-4xl" />
                <h3 className="font-headline-md text-headline-md leading-tight">
                  The <span className="text-on-primary-fixed font-bold">{PARTNER.name}</span> Advantage
                </h3>
              </div>
              <p className="font-body-md text-body-md leading-relaxed text-primary-fixed">{PARTNER.advantage}</p>
            </article>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 p-8 bg-inverse-surface rounded-DEFAULT border-l-4 border-primary">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface font-bold">
                Ready to start your next project?
              </h3>
              <p className="font-body-sm text-body-sm text-tertiary-fixed-dim mt-1">
                Speak with our project team about your construction goals.
              </p>
            </div>
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-DEFAULT uppercase tracking-wider font-bold transition-all inline-flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
