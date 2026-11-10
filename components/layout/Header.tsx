'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-surface-container-lowest top-0 z-50 border-b border-outline-variant shadow-sm sticky">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
        {/* Corporate Identity & Brand Logo */}
        <Link
          href="#home"
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
          <Link
            href="#home"
            className="text-primary border-b-2 border-primary font-label-lg text-label-lg pb-1 hover:text-primary transition-colors duration-150 active:scale-[0.98]"
          >
            Home
          </Link>

          {/* Interactive About Dropdown */}
          <div
            className="relative inline-flex items-center"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAboutDropdownOpen((prev) => !prev)}
              aria-label="About section navigation"
              className="font-label-lg text-label-lg text-on-surface bg-transparent border-0 cursor-pointer focus:outline-none hover:text-primary transition-colors py-1 pr-5 flex items-center gap-1"
            >
              <span>About</span>
              <Icon
                name="expand_more"
                className={`text-[16px] text-tertiary transition-transform ${
                  aboutDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-surface-container-lowest border border-outline-variant shadow-lg rounded-DEFAULT py-2 z-50">
                <Link
                  href="#about"
                  className="block px-4 py-2 text-label-md text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  Our Company
                </Link>
                <Link
                  href="#about"
                  className="block px-4 py-2 text-label-md text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  Our Key Pillars
                </Link>
                <Link
                  href="#about"
                  className="block px-4 py-2 text-label-md text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  Our Corporate Profile
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#projects"
            className="text-on-surface font-label-lg text-label-lg pb-1 hover:text-primary transition-colors duration-150 active:scale-[0.98]"
          >
            Projects
          </Link>

          <Link
            href="#services"
            className="text-on-surface font-label-lg text-label-lg pb-1 hover:text-primary transition-colors duration-150 active:scale-[0.98]"
          >
            Our Services
          </Link>

          <Link
            href="#contact"
            className="text-on-surface font-label-lg text-label-lg pb-1 hover:text-primary transition-colors duration-150 active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </nav>

        {/* Primary Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
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
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-on-surface hover:text-primary"
        >
          <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant px-6 py-4 flex flex-col gap-4">
          <Link
            href="#home"
            onClick={closeMobileMenu}
            className="font-label-lg text-label-lg text-primary font-bold py-1"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={closeMobileMenu}
            className="font-label-lg text-label-lg text-on-surface py-1 hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={closeMobileMenu}
            className="font-label-lg text-label-lg text-on-surface py-1 hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="#services"
            onClick={closeMobileMenu}
            className="font-label-lg text-label-lg text-on-surface py-1 hover:text-primary"
          >
            Our Services
          </Link>
          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="font-label-lg text-label-lg text-on-surface py-1 hover:text-primary"
          >
            Contact Us
          </Link>
          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="mt-2 bg-primary text-on-primary font-label-lg text-label-lg px-4 py-2.5 rounded-DEFAULT font-bold uppercase inline-flex items-center justify-center gap-2"
          >
            <span>Request a Quote</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      )}
    </header>
  );
};
