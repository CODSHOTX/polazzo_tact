import { ProjectItem } from '@/types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'victoria-island-tower',
    title: 'Victoria Island Commercial Tower',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Victoria Island, Lagos',
    description:
      '14-floor corporate office tower featuring energy-efficient curtain walling, 3-level underground parking, and smart building management systems.',
    scope: 'Scope: Turnkey EPC',
    status: 'Status: Completed',
    imageSrc: '/images/project-commercial.jpg',
    imageAlt:
      'Modern high-rise commercial glass tower exterior in Victoria Island Lagos Nigeria, clean architectural lines with solar shading fins, reflecting tropical blue sky and palm trees during late afternoon golden hour.',
  },
  {
    id: 'ikeja-logistics-hub',
    title: 'Ikeja Industrial Logistics Hub',
    category: 'industrial',
    categoryLabel: 'Industrial',
    location: 'Ikeja, Lagos State',
    description:
      '25,000 sqm clear-span structural steel facility with FM2 specification heavy-duty concrete flooring and temperature-controlled cold rooms.',
    scope: 'Scope: Structural & MEP',
    status: 'Status: Operational',
    imageSrc: '/images/project-industrial.jpg',
    imageAlt:
      'State-of-the-art mega industrial distribution center and logistics warehouse in Ikeja Lagos Nigeria featuring wide-span steel frame construction, automated loading docks, and heavy duty concrete apron.',
  },
  {
    id: 'lekki-prime-estate',
    title: 'Lekki Prime Residential Estate',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Lekki Peninsula, Lagos',
    description:
      'Master-planned luxury residential enclave consisting of 42 contemporary detached villas, central water treatment, and paved access network.',
    scope: 'Scope: Civil & Building',
    status: 'Status: Delivered',
    imageSrc: '/images/project-residential.jpg',
    imageAlt:
      'Luxury contemporary residential villas in Lekki Phase 1 Lagos Nigeria with clean white minimalist facades, landscaped gardens, private driveways, and warm ambient architectural exterior lighting.',
  },
  {
    id: 'abuja-executive-complex',
    title: 'Abuja Executive Corporate Complex',
    category: 'civil',
    categoryLabel: 'Civil Works',
    location: 'Central Area, Abuja FCT',
    description:
      'Multi-tiered institutional headquarters featuring integrated acoustic auditoriums, dual power redundancy, and ballistic blast-resistant glazing.',
    scope: 'Scope: Prime Contractor',
    status: 'Status: Handed Over',
    imageSrc: '/images/project-civil.jpg',
    imageAlt:
      'Federal institutional administrative building and executive complex in Abuja Central Business District Nigeria, featuring massive architectural concrete columns, expansive glass facades, and formal ceremonial plaza.',
  },
];
