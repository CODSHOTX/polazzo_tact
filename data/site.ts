export const SITE_URL = 'https://www.polazzotact.com.ng';

export const SITE_NAME = 'Polazzo Tact Nig. Ltd.';

export const SITE_LEGAL_NAME = 'Polazzo Tact Nigeria Limited';

export const SITE_ALTERNATE_NAMES = [
  'Polazzo Tact Nigeria Limited',
  'Polazzo Tact Nig Ltd',
  'Polazzo Tact Nigeria Ltd',
  'Polazzo Tact',
  'PolazzoTact',
];

export const SITE_DESCRIPTION =
  'Polazzo Tact Nig. Ltd. (Polazzo Tact Nigeria Limited) is a general contractor delivering building construction, civil, industrial, MEP and infrastructure engineering across Lagos, Abuja and Ibadan, Nigeria. RC: 1087410.';

export const SITE_OG_IMAGE = '/images/heroimg.jpeg';

export const SITE_LOGO = '/images/logo.png';

export const SITE_ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/about/our-company', priority: 0.9, changeFrequency: 'yearly' },
  { path: '/projects', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about/corporate-profile', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/about/key-pillars', priority: 0.7, changeFrequency: 'yearly' },
] as const;
