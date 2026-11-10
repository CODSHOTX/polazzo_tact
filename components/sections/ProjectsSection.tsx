import React from 'react';
import Link from 'next/link';
import { HOME_PROJECTS_LIMIT } from '@/data/projects';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { Icon } from '@/components/ui/Icon';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-surface-container-lowest border-b border-surface-container-highest"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
              <Icon name="domain" className="text-sm" />
              <span>Engineering Portfolio</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Featured Projects Across Nigeria
            </h2>
            <div className="w-16 h-1 bg-primary mt-3" />
          </div>
          <p className="font-body-md text-body-md text-tertiary max-w-md mt-4 md:mt-0">
            A showcase of iconic infrastructure, prestigious commercial complexes, and industrial assets
            engineered to the highest standards.
          </p>
        </div>

        <ProjectsGrid limit={HOME_PROJECTS_LIMIT} />

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="bg-inverse-surface hover:bg-primary text-inverse-on-surface font-label-lg text-label-lg px-7 py-3.5 rounded-DEFAULT font-bold tracking-wider uppercase transition-all active:scale-[0.98] inline-flex items-center gap-2"
          >
            <span>See More Projects</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
