import { NavLink } from '@/types';
import { ABOUT_PAGES } from '@/data/about';

export const TOP_UTILITY_INFO = {
  phone: '+234 800 POLAZZO',
  phoneHref: 'tel:+234800POLAZZO',
  email: 'info@polazzotact.com',
  emailHref: 'mailto:info@polazzotact.com',
  rcNumber: 'RC: 1087410',
  locations: 'Lagos / Abuja, Nigeria',
  tagline: 'Redefining Construction',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    subItems: ABOUT_PAGES.map(({ label, href }) => ({ label, href })),
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Contact Us', href: '/#contact' },
];

export const FOOTER_CAPABILITIES = [
  { label: 'Civil Engineering', href: '/#services' },
  { label: 'Building Construction', href: '/#services' },
  { label: 'Industrial Procurement', href: '/#services' },
  { label: 'Project Management', href: '/#services' },
  { label: 'Quality & Safety Policy', href: '/about/our-company' },
  { label: 'Terms & Compliance', href: '/about/corporate-profile' },
];
