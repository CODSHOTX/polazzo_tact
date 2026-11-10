import React from 'react';
import { METRICS_DATA } from '@/data/company';

export const MetricsBar: React.FC = () => {
  return (
    <div className="bg-inverse-surface text-inverse-on-surface border-t-2 border-primary">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {METRICS_DATA.map((item, index) => {
          const isLast = index === METRICS_DATA.length - 1;
          const accentColor =
            item.accent === 'secondary' ? 'text-secondary-fixed' : 'text-primary-fixed';

          return (
            <div
              key={item.label}
              className={`flex items-center gap-4 ${
                !isLast ? 'border-r border-tertiary/40 pr-4' : ''
              }`}
            >
              <span className={`font-headline-lg text-headline-lg font-bold ${accentColor}`}>
                {item.value}
              </span>
              <div>
                <div className="font-label-lg text-label-lg font-bold uppercase tracking-wider text-surface-container-lowest">
                  {item.label}
                </div>
                <div className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                  {item.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
