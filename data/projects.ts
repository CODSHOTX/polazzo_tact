import { ProjectItem, SelectedProject } from '@/types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'victoria-island-tower',
    title: 'Kesington Adebunkunola Adebutu Foundation (KAAF) HQ',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Iperu Ogun State',
    description:
      '',
    scope: 'Scope: Turnkey EPC',
    status: 'Status: Completed',
    imageSrc: '/images/project-commercial1.jpg',
    imageAlt:
      'Modern high-rise commercial glass tower exterior in Victoria Island Lagos Nigeria, clean architectural lines with solar shading fins, reflecting tropical blue sky and palm trees during late afternoon golden hour.',
  },
  {
    id: 'ikeja-logistics-hub',
    title: 'Consolidated Breweries Limited',
    category: 'industrial',
    categoryLabel: 'Industrial',
    location: 'Ijebu Ode, OgunState',
    description:
      '',
    scope: 'Scope: Structural & MEP',
    status: 'Status: Operational',
    imageSrc: '/images/project-industrial1.jpg',
    imageAlt:
      'State-of-the-art mega industrial distribution center and logistics warehouse in Ikeja Lagos Nigeria featuring wide-span steel frame construction, automated loading docks, and heavy duty concrete apron.',
  },
  {
    id: 'lekki-prime-estate',
    title: 'Private Residential Building,',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Ikoyi, Lagos State',
    description:
      '',
    scope: 'Scope: Civil & Building',
    status: 'Status: Delivered',
    imageSrc: '/images/project-residential.jpg',
    imageAlt:
      'Luxury contemporary residential villas in Lekki Phase 1 Lagos Nigeria with clean white minimalist facades, landscaped gardens, private driveways, and warm ambient architectural exterior lighting.',
  },
  {
    id: 'abuja-executive-complex',
    title: 'Culvert and Retaining Wall',
    category: 'civil',
    categoryLabel: 'Civil Works',
    location: '',
    description:
      'CULVERT AND RETAINING WALL UNDER CONSTRUCTION',
    scope: 'Scope: Prime Contractor',
    status: 'Status: Ongoing',
    imageSrc: '/images/project-civil1.jpg',
    imageAlt:
      'Federal institutional administrative building and executive complex in Abuja Central Business District Nigeria, featuring massive architectural concrete columns, expansive glass facades, and formal ceremonial plaza.',
  },
  {
    id: 'unity-close-lekki',
    title: 'No. 5 Unity Close, African Lane, off Admiralty Way',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Lekki Phase 1, Lagos',
    description: '',
    status: 'Status: Completed',
    imageSrc: '/images/Residential2.jpeg',
    imageAlt:
      'Completed four-storey residential apartment building with textured sand-coloured facade, dark window frames and wrought-iron balconies in Lekki Phase 1, Lagos.',
  },
  {
    id: 'abacha-road-mararaba',
    title: '5 Bedroom Fully Detached Duplex, Abacha Road',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Mararaba, Nasarawa State',
    description: '',
    status: 'Status: Ongoing',
    imageSrc: '/images/Residential3.png',
    imageAlt:
      'Duplex under construction in Mararaba with sandcrete block walls, timber lintel formwork and exposed reinforcement columns.',
  },
];

export const HOME_PROJECTS_LIMIT = 4;

export const SELECTED_PROJECTS_INTRO =
  'Polazzo Tact Nigeria Limited members were involved in the following either as major contractors, sub-contractors, project managers or as team leads.';

export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    title: 'Expansion of General Aviation Terminal, Murtala Muhammed International Airport (MMIA)',
    location: 'Lagos State',
  },
  { title: 'Company Construction at Coleman Technical Industries Limited', location: 'Ogun State' },
  { title: 'Renovation of Park Inn Hotel by Radisson', location: 'Ogun State' },
  {
    title: 'Construction of Central Auditorium Theatre and Administrative Block, Nigerian Law School',
    location: 'Victoria Island, Lagos State',
  },
  { title: 'Commercial Complex Construction of Incar Plaza', location: 'Abuja, FCT' },
  {
    title: 'Upgrade of Production Line Facilities at Nigerian Bottling Company (NBC)',
    location: 'Ikeja, Lagos State',
  },
  { title: 'Redevelopment Works at 1004 Housing Estate', location: 'Lagos State' },
  {
    title: 'Renovation and Civil Works at Novotel (now Golden Tulip) Hotel',
    location: 'Festac, Lagos State',
  },
  {
    title: 'Construction of Sir Kessington Adebutu Medical Laboratory/Clinic at the University of Lagos',
    location: 'Lagos State',
  },
  {
    title: 'Reinforced drainage and 1km flexible road construction at City of David Estate',
    location: 'Shimawa, Ogun State',
  },
  {
    title:
      'Laterite filling and grading of 2km roads and construction of 1,000 metres of hollow block drainage filled with concrete on both sides of the road at Treasure Park Estate',
    location: 'Shimawa, Ogun State',
  },
  {
    title:
      'Flood control, grading and stone base of 1.5km road, and construction of culvert, front fence and gate house for Adron Homes and Properties Limited',
    location: 'Chibiri, Kuje Area Council',
  },
  { title: 'Signage and marking of roads at Federal University Ebonyi', location: 'Ebonyi State' },
  {
    title: 'Marking of the tiered area of the Transcorp Hotel road extension',
    location: 'Federal Capital Territory, Abuja',
  },
  {
    title: 'Marking of the King Firm Plaza tiered floor and kerbs',
    location: 'Jahi District, FCT Abuja',
  },
  {
    title:
      'Construction of a 4-storey building with 10 apartments ranging from 4-bedroom to 1-bedroom units, with modern facilities, fully furnished, swimming pool, central gas plant and steady power supply',
    location: 'No. 5 Unity Close, African Lane, off Admiralty Way, Lekki Phase 1, Lagos',
    badge: 'Just Completed',
  },
  {
    title: 'Construction of perimeter fence on 62 hectares of land on the Lagos–Ibadan Expressway',
    location: 'Sanusi Village, Oluyole LGA, Ibadan, Oyo State',
  },
  {
    title:
      'Construction of 4 blocks of 3-bedroom flats and conversion of 2 semi-detached 4-bedroom duplexes into 4 blocks of 3-bedroom flats, with modern facilities and restructuring',
    location: 'No. 30A & 30B Soun Ajagungbade Estate, New Bodija, Ibadan, Oyo State',
  },
];
