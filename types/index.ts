export type ProjectCategory = 'all' | 'commercial' | 'industrial' | 'civil' | 'residential';

export interface NavLink {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
  accent: 'secondary' | 'primary';
}

export interface CorePillar {
  title: string;
  description: string;
  icon: string;
  borderClass: string;
  iconColorClass: string;
}

export interface ServiceItem {
  id: string;
  numberTag: string;
  title: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
  icon: string;
  accentBarClass: string;
  iconBgClass: string;
  iconColorClass: string;
  textColorClass: string;
  isSpecial?: boolean;
  specialBadge?: string;
  cardBgClass?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'commercial' | 'industrial' | 'civil' | 'residential';
  categoryLabel: string;
  location: string;
  description: string;
  scope: string;
  status: string;
  imageSrc: string;
  imageAlt: string;
}

export interface AdvantagePillar {
  title: string;
  description: string;
  icon: string;
  borderClass: string;
  iconBgClass: string;
  iconColorClass: string;
}

export interface RegionalHub {
  title: string;
  address: string;
  phone?: string;
  email?: string;
  hours?: string;
  rcNumber?: string;
  borderClass: string;
  icon: string;
  iconClass: string;
}
