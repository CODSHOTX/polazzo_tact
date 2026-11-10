import React from 'react';
import { TOP_UTILITY_INFO } from '@/data/navigation';
import { Icon } from '@/components/ui/Icon';

export const TopUtilityStrip: React.FC = () => {
  return (
    <div className="bg-inverse-surface text-surface-container-high text-label-sm font-label-sm border-b border-tertiary">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-4">
        {/* Contact Links and RC Number */}
        <div className="flex items-center flex-wrap gap-6">
          <a
            className="inline-flex items-center gap-1.5 hover:text-primary-fixed transition-colors"
            href={TOP_UTILITY_INFO.phoneHref}
          >
            <Icon name="phone_in_talk" className="text-[16px] text-secondary-container" />
            <span>{TOP_UTILITY_INFO.phone}</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 hover:text-primary-fixed transition-colors"
            href={TOP_UTILITY_INFO.emailHref}
          >
            <Icon name="mail" className="text-[16px] text-secondary-container" />
            <span>{TOP_UTILITY_INFO.email}</span>
          </a>
          <span className="inline-flex items-center gap-1.5 text-tertiary-fixed-dim">
            <Icon name="verified" className="text-[16px]" />
            <span>{TOP_UTILITY_INFO.rcNumber}</span>
          </span>
        </div>

        {/* Operational Locations & Corporate Tagline */}
        <div className="flex items-center gap-4 text-tertiary-fixed-dim">
          <span className="inline-flex items-center gap-1">
            <Icon name="location_on" className="text-[15px] text-secondary-container" />
            <span>{TOP_UTILITY_INFO.locations}</span>
          </span>
          <span className="hidden sm:inline-block text-tertiary-container">|</span>
          <span className="text-secondary-fixed font-semibold tracking-wider uppercase">
            {TOP_UTILITY_INFO.tagline}
          </span>
        </div>
      </div>
    </div>
  );
};
