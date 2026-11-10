'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { Icon } from '@/components/ui/Icon';

const FILTER_TABS: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Industrial', value: 'industrial' },
  { label: 'Civil Works', value: 'civil' },
  { label: 'Residential', value: 'residential' },
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeCategory);

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

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 border-b border-outline-variant pb-4 mb-8">
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-4 py-2 text-label-md font-label-md uppercase tracking-wider rounded-DEFAULT transition-all ${
                  isActive
                    ? 'font-bold bg-primary text-on-primary shadow-sm'
                    : 'font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT overflow-hidden group hover:border-primary transition-all shadow-sm"
            >
              <div className="relative h-60 overflow-hidden bg-surface-container">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-inverse-surface/90 text-on-primary text-label-sm font-label-sm uppercase px-2.5 py-1 font-bold z-10">
                  {project.categoryLabel}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-primary text-label-sm font-label-sm font-bold mb-1">
                  <Icon name="location_on" className="text-[16px]" />
                  <span>{project.location}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="font-body-sm text-body-sm text-tertiary mb-4">{project.description}</p>
                <div className="pt-3 border-t border-surface-container-highest flex justify-between items-center text-label-sm font-label-sm text-on-surface-variant font-semibold">
                  <span>{project.scope}</span>
                  <span className="text-primary font-bold">{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
