import { MetricItem, CorePillar, AdvantagePillar, RegionalHub } from '@/types';

export const METRICS_DATA: MetricItem[] = [
  {
    value: '150+',
    label: 'Projects Delivered',
    detail: 'Turnkey Excellence',
    accent: 'secondary',
  },
  {
    value: '99.8%',
    label: 'Safety Record',
    detail: 'Zero Harm HSE Goal',
    accent: 'primary',
  },
  {
    value: '15+',
    label: 'Years Experience',
    detail: 'Engineering Heritage',
    accent: 'secondary',
  },
  {
    value: '100%',
    label: 'Tier 1 QA/QC',
    detail: 'Standardized Testing',
    accent: 'primary',
  },
];

export const CORE_PILLARS: CorePillar[] = [
  {
    title: 'Quality & Standards',
    description: 'Strict adherence to British Standards (BS) and Nigerian Industrial Standards (NIS).',
    icon: 'verified',
    borderClass: 'border-primary',
    iconColorClass: 'text-primary',
  },
  {
    title: 'Timely Delivery',
    description: 'Critical-path scheduling and resource leveling guaranteeing on-schedule handover.',
    icon: 'schedule',
    borderClass: 'border-secondary-container',
    iconColorClass: 'text-secondary',
  },
  {
    title: 'HSE Policy',
    description: 'Proactive hazard identification, zero-accident protocols, and eco-sustainable footprints.',
    icon: 'health_and_safety',
    borderClass: 'border-primary',
    iconColorClass: 'text-primary',
  },
  {
    title: 'Client-Centric Execution',
    description: 'Transparent value-engineering, open-book cost accounting, and agile milestone reporting.',
    icon: 'handshake',
    borderClass: 'border-inverse-surface',
    iconColorClass: 'text-inverse-surface',
  },
];

export const ADVANTAGE_PILLARS: AdvantagePillar[] = [
  {
    title: 'Certified Standards',
    description: 'Full compliance with COREN standards, ISO quality guidelines, and Nigerian Federal Ministry of Works building codes.',
    icon: 'verified',
    borderClass: 'border-primary',
    iconBgClass: 'bg-primary-fixed',
    iconColorClass: 'text-primary',
  },
  {
    title: 'Modern Equipment Fleet',
    description: 'Directly owned earthmovers, high-reach tower cranes, batching units, and diagnostic surveying instruments eliminating site delays.',
    icon: 'commute',
    borderClass: 'border-secondary-container',
    iconBgClass: 'bg-secondary-fixed',
    iconColorClass: 'text-secondary-fixed-variant',
  },
  {
    title: 'Uncompromising HSE',
    description: 'A zero-compromise site safety culture with certified safety officers assigned to every active project across the country.',
    icon: 'security',
    borderClass: 'border-inverse-surface',
    iconBgClass: 'bg-surface-container-highest',
    iconColorClass: 'text-inverse-surface',
  },
  {
    title: 'Transparent Costing',
    description: 'Rigorous Bill of Quantities (BOQ) preparation, real-time expenditure audits, and value-engineering that protect client budgets.',
    icon: 'price_check',
    borderClass: 'border-primary',
    iconBgClass: 'bg-primary-fixed',
    iconColorClass: 'text-primary',
  },
];

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    title: 'Lagos Office',
    address: 'Plot 15, Ereke House, CIPM, Building CDB, Alausa, Ikeja Lagos State, Nigeria.',
    phone: 'Tel: +234 (0) 803 970 2524 / +234 (0) 905 955 8962',
    hours: 'Mon - Fri: 8:00am - 6:00pm',
    borderClass: 'border-primary',
    icon: 'location_city',
    iconClass: 'text-primary',
  },
  {
    title: 'Abuja Office',
    address: '52, Gbazango Extension, Kubwa, Abuja FCT, Nigeria.',
    phone: 'Tel: +234 (0) 803 970 2524 / +234 (0) 905 955 8962',
    rcNumber: 'RC: 1087410',
    borderClass: 'border-secondary-container',
    icon: 'account_balance',
    iconClass: 'text-secondary',
  },
  {
    title: 'Oyo Office',
    address: '4th Floor, Derila Building, Iwo Road, Ibadan, Oyo State, Nigeria.',
    phone: 'Tel: +234 (0) 803 970 2524 / +234 (0) 905 955 8962',
    hours: 'Mon - Fri: 8:00am - 6:00pm',
    borderClass: 'border-secondary-container',
    icon: 'location_city',
    iconClass: 'text-secondary',
  }
];

export const EMERGENCY_HOTLINE = {
  title: '24/7 Contractor Emergency Hotline',
  phone: '+234 (0) 803 970 2524',
  icon: 'emergency',
};
