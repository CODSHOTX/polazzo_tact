import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { Icon } from '@/components/ui/Icon';
import { KEY_STAFF, TEAM_INTRO } from '@/data/about';
import { StaffMember } from '@/types';

export const metadata: Metadata = {
  title: 'Our Key Pillars | Polazzo Tact Nig. Ltd.',
  description: 'Meet the key staff members behind Polazzo Tact Nigeria Limited.',
};

const LEADERSHIP_COUNT = 2;

const initials = (name: string) => {
  const parts = name.split(' ');
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
};

const StaffCard = ({ member, index, featured }: { member: StaffMember; index: number; featured?: boolean }) => (
  <article
    className={`relative flex items-center gap-4 p-5 rounded-DEFAULT border transition-shadow hover:shadow-md ${
      featured
        ? 'bg-inverse-surface border-inverse-surface border-l-4 border-l-secondary-container'
        : 'bg-surface-container-lowest border-outline-variant border-l-4 border-l-primary'
    }`}
  >
    <span
      className={`absolute top-3 right-4 font-label-md text-label-md ${
        featured ? 'text-tertiary-fixed-dim' : 'text-tertiary'
      }`}
    >
      {String(index + 1).padStart(2, '0')}
    </span>
    <div
      className={`flex items-center justify-center shrink-0 rounded-full font-headline-sm font-bold ${
        featured
          ? 'w-16 h-16 text-xl bg-secondary-container text-on-secondary-fixed'
          : 'w-12 h-12 text-base bg-primary-fixed text-primary'
      }`}
      aria-hidden="true"
    >
      {initials(member.name)}
    </div>
    <div className="min-w-0 pr-6">
      <h3
        className={`font-label-lg uppercase tracking-wide font-bold ${
          featured ? 'text-headline-sm text-inverse-on-surface' : 'text-label-lg text-on-surface'
        }`}
      >
        {member.title} {member.name}
      </h3>
      <div className="flex flex-wrap items-center gap-2 mt-1">
        <span
          className={`font-body-sm text-body-sm ${featured ? 'text-secondary-fixed' : 'text-primary'} font-semibold`}
        >
          {member.role}
        </span>
        {member.credential && (
          <span
            className={`px-2 py-0.5 text-label-sm font-label-sm font-bold rounded-DEFAULT ${
              featured
                ? 'bg-tertiary text-inverse-on-surface'
                : 'bg-surface-container text-on-surface-variant'
            }`}
          >
            {member.credential}
          </span>
        )}
      </div>
    </div>
  </article>
);

export default function KeyPillarsPage() {
  const leadership = KEY_STAFF.slice(0, LEADERSHIP_COUNT);
  const management = KEY_STAFF.slice(LEADERSHIP_COUNT);

  return (
    <>
      <PageHero
        parent="About"
        eyebrow="Our Key Pillars"
        eyebrowIcon="groups"
        title="Our"
        highlight="Team"
        description={TEAM_INTRO}
        imageSrc="/images/steel-erection.jpg"
        imageAlt="Steel beam erection on a construction site."
      />

      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
              <Icon name="badge" className="text-sm" />
              <span>List of Key Staff Members</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Executive Leadership</h2>
            <div className="w-16 h-1 bg-primary mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {leadership.map((member, index) => (
              <StaffCard key={member.name} member={member} index={index} featured />
            ))}
          </div>

          <div className="max-w-3xl mb-10">
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
              Directors, Managers &amp; Department Heads
            </h2>
            <div className="w-12 h-1 bg-secondary-container mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {management.map((member, index) => (
              <StaffCard key={member.name} member={member} index={index + LEADERSHIP_COUNT} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
