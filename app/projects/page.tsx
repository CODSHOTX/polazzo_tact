import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { Icon } from '@/components/ui/Icon';
import { SELECTED_PROJECTS, SELECTED_PROJECTS_INTRO } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Featured and selected construction, civil works, residential and commercial projects delivered by Polazzo Tact Nigeria Limited across Nigeria.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        eyebrowIcon="domain"
        title="Our"
        highlight="Projects"
        description="Commercial, industrial, civil and residential projects delivered across Nigeria with engineering precision."
        imageSrc="/images/Residential2.jpeg"
        imageAlt="Completed residential apartment building in Lekki Phase 1, Lagos."
      />

      {/* Featured Projects */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
              <Icon name="photo_library" className="text-sm" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary mt-3" />
          </div>

          <ProjectsGrid />
        </div>
      </section>

      {/* Other Selected Projects */}
      <section id="selected-projects" className="py-20 bg-surface-container-low engineering-grid scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
                <Icon name="checklist" className="text-sm" />
                <span>Track Record</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold uppercase">
                Other Selected Projects
              </h2>
              <div className="w-16 h-1 bg-primary mt-3 mb-5" />
              <p className="font-body-lg text-body-lg text-tertiary leading-relaxed">{SELECTED_PROJECTS_INTRO}</p>
            </div>
            <div className="shrink-0 p-5 bg-inverse-surface rounded-DEFAULT border-l-4 border-secondary-container">
              <div className="font-headline-lg text-headline-lg text-secondary-container">
                {SELECTED_PROJECTS.length}
              </div>
              <div className="font-label-md text-label-md uppercase tracking-wider text-tertiary-fixed-dim">
                Selected Projects
              </div>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SELECTED_PROJECTS.map((project, index) => (
              <li
                key={project.title}
                className="flex gap-4 p-5 bg-surface-container-lowest border border-outline-variant border-l-4 border-l-primary rounded-DEFAULT hover:shadow-md transition-shadow"
              >
                <span className="flex items-center justify-center w-10 h-10 shrink-0 bg-primary-fixed text-primary font-headline-sm font-bold rounded-DEFAULT">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  {project.badge && (
                    <span className="inline-block mb-2 px-2 py-0.5 bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-bold uppercase tracking-wider rounded-DEFAULT">
                      {project.badge}
                    </span>
                  )}
                  <h3 className="font-body-md text-body-md text-on-surface font-semibold leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-start gap-1.5 mt-2 text-primary font-label-md text-label-md font-semibold">
                    <Icon name="location_on" className="text-[16px] shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 p-8 bg-inverse-surface rounded-DEFAULT border-l-4 border-primary">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface font-bold">
                Have a project in mind?
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
