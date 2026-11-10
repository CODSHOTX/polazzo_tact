import React from 'react';
import { ADVANTAGE_PILLARS } from '@/data/company';
import { Icon } from '@/components/ui/Icon';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-surface-container-high border-b border-surface-container-highest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
            <Icon name="military_tech" className="text-sm" />
            <span>The Polazzo Advantage</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Why Institutional Clients Choose Polazzo Tact
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 mb-4" />
          <p className="font-body-md text-body-md text-tertiary">
            A disciplined engineering approach designed to de-risk complex commercial developments and
            infrastructure execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className={`bg-surface-container-lowest p-6 rounded-DEFAULT border-t-4 ${pillar.borderClass} shadow-sm`}
            >
              <div
                className={`w-12 h-12 ${pillar.iconBgClass} ${pillar.iconColorClass} rounded-DEFAULT flex items-center justify-center mb-4`}
              >
                <Icon name={pillar.icon} className="text-2xl" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-lg mb-2">
                {pillar.title}
              </h3>
              <p className="font-body-sm text-body-sm text-tertiary">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
