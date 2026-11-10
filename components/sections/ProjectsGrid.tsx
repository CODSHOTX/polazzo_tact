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

interface ProjectsGridProps {
  limit?: number;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ limit }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeCategory);
  const visibleProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <>
      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-outline-variant pb-4 mb-8">
        {FILTER_TABS.map((tab) => {
          const isActive = activeCategory === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveCategory(tab.value)}
              aria-pressed={isActive}
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
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT overflow-hidden group hover:border-primary transition-all shadow-sm flex flex-col"
          >
            <div className="relative h-60 overflow-hidden bg-surface-container">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-inverse-surface/90 text-on-primary text-label-sm font-label-sm uppercase px-2.5 py-1 font-bold z-10">
                {project.categoryLabel}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-1.5 text-primary text-label-sm font-label-sm font-bold mb-1">
                <Icon name="location_on" className="text-[16px]" />
                <span>{project.location}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-lg mb-2">
                {project.title}
              </h3>
              {project.description && (
                <p className="font-body-sm text-body-sm text-tertiary mb-4">{project.description}</p>
              )}
              <div className="mt-auto pt-3 border-t border-surface-container-highest flex justify-between items-center gap-2 text-label-sm font-label-sm text-on-surface-variant font-semibold">
                <span>{project.scope}</span>
                <span className="text-primary font-bold">{project.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
