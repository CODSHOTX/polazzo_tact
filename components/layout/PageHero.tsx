import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

interface PageHeroProps {
  parent?: string;
  eyebrow: string;
  eyebrowIcon: string;
  title: string;
  highlight?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  parent,
  eyebrow,
  eyebrowIcon,
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="relative bg-inverse-surface overflow-hidden border-b-4 border-primary">
      <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/90 to-inverse-surface/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-label-md font-label-md text-tertiary-fixed-dim mb-6">
          <Link href="/" className="hover:text-secondary-fixed transition-colors">
            Home
          </Link>
          <Icon name="chevron_right" className="text-[14px]" />
          {parent && (
            <>
              <span>{parent}</span>
              <Icon name="chevron_right" className="text-[14px]" />
            </>
          )}
          <span className="text-secondary-fixed">{eyebrow}</span>
        </nav>

        <div className="inline-flex items-center gap-2 text-secondary-container font-label-md text-label-md uppercase tracking-wider font-bold mb-3">
          <Icon name={eyebrowIcon} className="text-sm" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-inverse-on-surface max-w-3xl">
          {title} {highlight && <span className="text-secondary-container">{highlight}</span>}
        </h1>
        <div className="w-16 h-1 bg-primary mt-4 mb-6" />
        <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};
