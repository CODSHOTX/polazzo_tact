import React from 'react';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/services';
import { Icon } from '@/components/ui/Icon';

export const ServicesSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-surface-container-low border-b border-surface-container-highest"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
              <Icon name="construction" className="text-sm" />
              <span>Comprehensive Solutions</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
              Core Engineering &amp; Construction Services
            </h2>
            <div className="w-16 h-1 bg-primary mt-3" />
          </div>
          <p className="font-body-md text-body-md text-tertiary max-w-md mt-4 md:mt-0">
            Precision-driven services managed by registered COREN engineers, structural specialists, and
            certified project managers.
          </p>
        </div>

        {/* Bento Grid for 5 Services + 1 Specialized Procurement Pillar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            if (service.isSpecial) {
              return (
                <div
                  key={service.id}
                  className="bg-inverse-surface text-inverse-on-surface border-2 border-secondary-container rounded-DEFAULT p-6 flex flex-col justify-between hover:shadow-lg transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm font-bold px-3 py-1 uppercase tracking-wider">
                    {service.specialBadge}
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-DEFAULT flex items-center justify-center mb-5 mt-2">
                      <Icon name={service.icon} className="text-2xl" />
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
                      {service.numberTag}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-tertiary-container font-bold mt-1 mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body-md text-body-md text-tertiary-fixed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 font-body-sm text-body-sm text-tertiary-fixed-dim mb-6">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Icon name="check_circle" className="text-[16px] text-secondary-fixed" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-tertiary">
                    <Link
                      className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary-fixed font-bold hover:underline"
                      href="#contact"
                    >
                      <span>{service.ctaLabel}</span>
                      <Icon name="chevron_right" className="text-[16px]" />
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full ${service.accentBarClass}`} />
                <div>
                  <div
                    className={`w-12 h-12 ${service.iconBgClass} ${service.iconColorClass} rounded-DEFAULT flex items-center justify-center mb-5`}
                  >
                    <Icon name={service.icon} className="text-2xl" />
                  </div>
                  <span className={`font-label-sm text-label-sm uppercase tracking-wider ${service.textColorClass} font-bold`}>
                    {service.numberTag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-tertiary mb-4">{service.description}</p>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant mb-6">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Icon name="check_circle" className={`text-[16px] ${service.iconColorClass}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-surface-container-highest">
                  <Link
                    className={`inline-flex items-center gap-2 font-label-md text-label-md ${service.textColorClass} font-bold hover:underline`}
                    href="#contact"
                  >
                    <span>{service.ctaLabel}</span>
                    <Icon name="chevron_right" className="text-[16px]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
