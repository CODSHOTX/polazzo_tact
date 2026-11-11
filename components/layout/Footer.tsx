'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_CAPABILITIES } from '@/data/navigation';
import { Icon } from '@/components/ui/Icon';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-inverse-surface w-full border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-6 py-12 w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand Anchor & Incorporation */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-28">
              <Image
                src="/images/logo.png"
                alt="Polazzo Tact Nig. Ltd. Corporate Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm uppercase tracking-widest text-inverse-on-surface font-bold text-base leading-tight">
                Polazzo Tact
              </span>
              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-semibold">
                Nig. Ltd. • RC: 1087410
              </span>
            </div>
          </div>
          <p className="text-surface-container-highest font-body-sm text-body-sm leading-relaxed">
            Nigeria&apos;s trusted premier general contractor and engineering vanguard. Delivering landmark
            building construction, industrial facilities, and technical excellence nationwide.
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 bg-surface-container-highest/20 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider rounded-DEFAULT font-bold">
              Redefining Construction
            </span>
          </div>
        </div>

        {/* Column 2: Core Capabilities */}
        <div>
          <h4 className="font-headline-sm text-headline-sm text-inverse-on-surface text-base font-bold mb-4 uppercase tracking-wider border-b border-tertiary pb-2">
            Core Capabilities
          </h4>
          <ul className="space-y-2.5">
            {FOOTER_CAPABILITIES.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-surface-container-highest font-body-sm text-body-sm hover:text-primary-fixed transition-colors duration-150 flex items-center gap-1.5"
                >
                  <Icon name="chevron_right" className="text-[14px]" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Regional Engineering Hubs */}
        <div>
          <h4 className="font-headline-sm text-headline-sm text-inverse-on-surface text-base font-bold mb-4 uppercase tracking-wider border-b border-tertiary pb-2">
            Operational Centers
          </h4>
          <div className="space-y-4 text-surface-container-highest font-body-sm text-body-sm">
            <div>
              <div className="text-secondary-fixed font-bold font-label-md text-label-md uppercase mb-0.5">
                Lagos
              </div>
              <p>Plot 15, Ereke House, CIPM, Building CDB, Alausa, Ikeja Lagos State, Nigeria</p>
              <p className="text-tertiary-fixed-dim text-xs mt-0.5">Direct: +234 803 970 2524</p>
            </div>
            <div>
              <div className="text-secondary-fixed font-bold font-label-md text-label-md uppercase mb-0.5">
                Abuja
              </div>
              <p>52, Gbazango Extension, Kubwa, Abuja FCT, Nigeria.</p>
              <p className="text-tertiary-fixed-dim text-xs mt-0.5">Direct: info@polazzotact.com.ng</p>
            </div>
            <div>
              <div className="text-secondary-fixed font-bold font-label-md text-label-md uppercase mb-0.5">
                Oyo
              </div>
              <p>4th Floor, Derila Building, Iwo Road, Ibadan, Oyo State, Nigeria.</p>
              <p className="text-tertiary-fixed-dim text-xs mt-0.5">Direct: info@polazzotact.com.ng</p>
            </div>
          </div>
        </div>

        {/* Column 4: Engineering Dispatch & Newsletter */}
        <div>
          <h4 className="font-headline-sm text-headline-sm text-inverse-on-surface text-base font-bold mb-4 uppercase tracking-wider border-b border-tertiary pb-2">
            Industry Briefing
          </h4>
          <p className="text-surface-container-highest font-body-sm text-body-sm mb-4">
            Receive quarterly intelligence reports on Nigerian infrastructure indices, construction cost
            metrics, and project case studies.
          </p>

          {subscribed ? (
            <div className="p-3 bg-primary/20 border border-primary text-secondary-fixed text-label-sm font-semibold rounded-DEFAULT">
              Thank you for subscribing to Polazzo Tact Infrastructure Gazette.
            </div>
          ) : (
            <form className="space-y-2" onSubmit={handleSubscribe}>
              <input
                className="w-full h-10 px-3 bg-surface-container-lowest text-on-surface rounded-DEFAULT text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="corporate@company.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider font-bold py-2.5 rounded-DEFAULT transition-all active:opacity-80"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Sub-Footer / Copyright & Legal */}
      <div className="border-t border-tertiary/40 bg-inverse-surface/80 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-surface-container-highest font-body-sm text-body-sm">
            &copy; 2024 Polazzo Tact Nig. Ltd. RC: 1087410. All Rights Reserved. Heavy Infrastructure &amp;
            Engineering Excellence.
          </p>
          <div className="flex items-center gap-6 text-label-sm font-label-sm text-tertiary-fixed-dim">
            <Link className="hover:text-primary-fixed transition-colors" href="/about/our-company">
              Safety Code of Conduct
            </Link>
            <span>•</span>
            <Link className="hover:text-primary-fixed transition-colors" href="/#contact">
              Tender Submissions
            </Link>
            <span>•</span>
            <a className="hover:text-primary-fixed transition-colors" href="#top">
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
