'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ABOUT_PAGES } from '@/data/about';
import { Icon } from '@/components/ui/Icon';

export const AboutSubNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="bg-surface-container-lowest border-b border-outline-variant">
      <nav
        aria-label="About pages"
        className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto"
      >
        {ABOUT_PAGES.map((page) => {
          const active = pathname === page.href;
          return (
            <Link
              key={page.href}
              href={page.href}
              aria-current={active ? 'page' : undefined}
              className={`inline-flex items-center gap-2 px-4 py-4 whitespace-nowrap font-label-lg text-label-lg border-b-2 transition-colors ${
                active
                  ? 'border-primary text-primary'
                  : 'border-transparent text-tertiary hover:text-primary hover:border-outline-variant'
              }`}
            >
              <Icon name={page.icon} className="text-[18px]" />
              <span>{page.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
