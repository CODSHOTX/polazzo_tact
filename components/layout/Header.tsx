'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/data/navigation';
import { Icon } from '@/components/ui/Icon';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  return (
    <header className="bg-surface-container-lowest top-0 z-50 border-b border-outline-variant shadow-sm sticky">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
        {/* Corporate Identity & Brand Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center gap-3 group active:scale-[0.98] transition-transform duration-100"
        >
          <div className="relative h-10 md:h-12 w-28 md:w-36">
            <Image
              src="/images/logo.png"
              alt="Polazzo Tact Nig. Ltd. Corporate Logo"
              fill
              sizes="(min-width: 768px) 144px, 112px"
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface font-bold leading-tight">
              Polazzo Tact Nig. Ltd.
            </span>
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
              Redefining Construction
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            if (link.subItems) {
              return (
                <div
                  key={link.href}
                  className="relative inline-flex items-center"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setAboutDropdownOpen((prev) => !prev)}
                    aria-expanded={aboutDropdownOpen}
                    aria-haspopup="true"
                    className={`font-label-lg text-label-lg bg-transparent cursor-pointer focus:outline-none hover:text-primary transition-colors pb-1 flex items-center gap-1 border-b-2 ${
                      active ? 'text-primary border-primary' : 'text-on-surface border-transparent'
                    }`}
                  >
                    <span>{link.label}</span>
                    <Icon
                      name="expand_more"
                      className={`text-[18px] transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {aboutDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                      <div className="w-60 bg-surface-container-lowest border border-outline-variant border-t-2 border-t-primary shadow-lg rounded-DEFAULT py-2">
                        {link.subItems.map((item) => {
                          const itemActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMenus}
                              aria-current={itemActive ? 'page' : undefined}
                              className={`flex items-center justify-between px-4 py-2.5 font-label-lg text-label-lg hover:bg-surface-container hover:text-primary transition-colors ${
                                itemActive ? 'text-primary bg-surface-container-low' : 'text-on-surface'
                              }`}
                            >
                              <span>{item.label}</span>
                              <Icon name="chevron_right" className="text-[16px] text-tertiary" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`font-label-lg text-label-lg pb-1 border-b-2 hover:text-primary transition-colors duration-150 active:scale-[0.98] ${
                  active ? 'text-primary border-primary' : 'text-on-surface border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/#contact"
            className="bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-5 py-2.5 rounded-DEFAULT uppercase tracking-wider font-bold transition-all shadow-sm active:scale-[0.98] inline-flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle Navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-on-surface hover:text-primary"
        >
          <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) =>
            link.subItems ? (
              <div key={link.href} className="py-1">
                <span
                  className={`block font-label-lg text-label-lg py-2 ${
                    isActive(link.href) ? 'text-primary font-bold' : 'text-on-surface'
                  }`}
                >
                  {link.label}
                </span>
                <div className="flex flex-col border-l-2 border-outline-variant ml-1">
                  {link.subItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenus}
                      className={`pl-4 py-2 font-label-lg text-label-lg hover:text-primary ${
                        pathname === item.href ? 'text-primary font-bold' : 'text-tertiary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className={`font-label-lg text-label-lg py-2 hover:text-primary ${
                  isActive(link.href) ? 'text-primary font-bold' : 'text-on-surface'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/#contact"
            onClick={closeMenus}
            className="mt-3 bg-primary text-on-primary font-label-lg text-label-lg px-4 py-2.5 rounded-DEFAULT font-bold uppercase inline-flex items-center justify-center gap-2"
          >
            <span>Request a Quote</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      )}
    </header>
  );
};
