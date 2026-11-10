import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { Icon } from '@/components/ui/Icon';
import { REGISTRATION_DETAILS, SPECIALIZATIONS } from '@/data/about';
import { REGIONAL_HUBS } from '@/data/company';

export const metadata: Metadata = {
  title: 'Our Corporate Profile | Polazzo Tact Nig. Ltd.',
  description: 'Statutory registration details of Polazzo Tact Nigeria Limited, including CAC RC number and TIN.',
};

export default function CorporateProfilePage() {
  return (
    <>
      <PageHero
        parent="About"
        eyebrow="Our Corporate Profile"
        eyebrowIcon="badge"
        title="Corporate"
        highlight="Profile"
        description="Statutory registration and identification details of Polazzo Tact Nigeria Limited."
        imageSrc="/images/project-commercial.jpg"
        imageAlt="Commercial building project by Polazzo Tact."
      />

      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
              <Icon name="verified" className="text-sm" />
              <span>Statutory Registration</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Polazzo Tact Nigeria Limited</h2>
            <div className="w-16 h-1 bg-primary mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REGISTRATION_DETAILS.map((detail) => (
              <article
                key={detail.label}
                className="p-8 bg-inverse-surface text-inverse-on-surface rounded-DEFAULT border-l-4 border-secondary-container shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-12 h-12 bg-secondary-container text-on-secondary-fixed rounded-DEFAULT">
                    <Icon name={detail.icon} className="text-2xl" />
                  </span>
                  <span className="font-label-lg text-label-lg uppercase tracking-wider text-tertiary-fixed-dim">
                    {detail.label}
                  </span>
                </div>
                <div className="font-headline-xl text-headline-xl text-secondary-fixed tracking-wide">
                  {detail.value}
                </div>
                <p className="font-body-sm text-body-sm text-tertiary-fixed-dim mt-3">{detail.authority}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container-low engineering-grid">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-surface-container-lowest border border-outline-variant border-t-4 border-t-primary rounded-DEFAULT">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-5 flex items-center gap-2">
              <Icon name="construction" className="text-primary" />
              Business Activities
            </h3>
            <ul className="space-y-3">
              {SPECIALIZATIONS.map((item) => (
                <li key={item.label} className="flex items-center gap-3 font-body-md text-body-md text-on-surface">
                  <Icon name={item.icon} className="text-primary text-[20px]" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-surface-container-lowest border border-outline-variant border-t-4 border-t-secondary-container rounded-DEFAULT">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-5 flex items-center gap-2">
              <Icon name="location_city" className="text-secondary" />
              Offices
            </h3>
            <div className="space-y-5">
              {REGIONAL_HUBS.map((hub) => (
                <div key={hub.title} className="flex items-start gap-3">
                  <Icon name={hub.icon} className={`${hub.iconClass} text-[22px] mt-0.5`} />
                  <div>
                    <div className="font-label-lg text-label-lg text-on-surface font-bold">{hub.title}</div>
                    <p className="font-body-sm text-body-sm text-tertiary mt-0.5">{hub.address}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/#contact"
              className="mt-8 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-5 py-2.5 rounded-DEFAULT uppercase tracking-wider font-bold transition-all inline-flex items-center gap-2"
            >
              <span>Contact Us</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
