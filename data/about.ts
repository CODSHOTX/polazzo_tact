import { CompanyValue, WhyUsPillar, StaffMember, RegistrationDetail } from '@/types';

export const ABOUT_PAGES = [
  { label: 'Our Company', href: '/about/our-company', icon: 'corporate_fare' },
  { label: 'Our Key Pillars', href: '/about/key-pillars', icon: 'groups' },
  { label: 'Our Corporate Profile', href: '/about/corporate-profile', icon: 'badge' },
];

export const WHO_WE_ARE = [
  'The company was established as a general contracting firm that provides various construction services for a diverse pool of clients cutting across the broad varieties of industries in Nigeria.',
  'POLAZZO TACT NIGERIA LIMITED has a team of seasoned professionals with ample experience garnered over several years of practice in the construction industry.',
  'We are committed to building a strong reputation for delivering top quality services, while taking time and cost constraints into consideration in our decision-making. Combined with the wealth of experience in the core aspects of construction, our extensive knowledge of the Nigerian market singles us out as a major player in the industry.',
  'At POLAZZO TACT NIG. LTD., we are one hundred percent innovation-driven and pursue excellence in our services. We understand, consider and interact with our clients as partners to ensure that their construction goals are achieved and our values are not compromised.',
  'Our unique and flexible project management systems, coupled with value engineering, ensure positive outcomes in our projects regardless of size or scope. Our goal is to be one of the leading contracting firms for turnkey projects; undertaking projects from conception to commissioning on time and on budget.',
];

export const SPECIALIZATIONS = [
  { label: 'Building Construction', icon: 'apartment' },
  { label: 'General Facilities Maintenance', icon: 'home_repair_service' },
  { label: 'Mechanical & Electrical Installations', icon: 'electrical_services' },
  { label: 'Supply of Construction Materials & Equipment', icon: 'local_shipping' },
  { label: 'Real Estate Developments', icon: 'real_estate_agent' },
];

export const VISION =
  'To be the construction contractors of choice, always exceeding our clients’ expectations.';

export const MISSION =
  'To positively reshape the construction and infrastructure landscape of Nigeria, thereby making the country a better place.';

export const COMPANY_VALUES: CompanyValue[] = [
  { title: 'Integrity', icon: 'verified_user' },
  { title: 'Innovation', icon: 'lightbulb' },
  { title: 'Quality + Excellence', icon: 'workspace_premium' },
];

export const VALUES_STATEMENT =
  'These values form the crux of our foundation and are important components of the corporate culture we uphold. The values are evident in our organization, our services and our style of service delivery.';

export const STRATEGY =
  'Our strategy is to deliver sustainable and cost-effective projects through maintaining a strong and selective construction capability focused on higher added-value contracts for our clients.';

export const WHY_US: WhyUsPillar[] = [
  {
    title: 'Reliability',
    icon: 'handshake',
    paragraphs: [
      'The news of disappointed clients and unreliable contractors are not uncommon in the Nigerian construction industry.',
      'Matters of clients disbursing excessive funds upfront and getting unsatisfactory works in return, or of contractors who purposefully drag the projects till or beyond the deadline, are not unheard of.',
      'We take pride in leaving positive and lasting impressions on any entity we interact with whilst doing business, be it partners, clients, or project users.',
    ],
  },
  {
    title: 'Integrity',
    icon: 'balance',
    paragraphs: [
      'As old-fashioned as we might seem to be because of this, the modus operandi at POLAZZO TACT NIGERIA LIMITED is founded on the basis of doing the right thing always, and that applies in business as well as in life.',
      'Bearing the interest of the clients at heart, our style of operation enables us to give necessary, informed and experience-backed advice to our clients at every stage of a project without compromising integrity.',
    ],
  },
  {
    title: 'Honesty',
    icon: 'verified',
    paragraphs: [
      'We uphold extreme honesty in all our dealings and always avoid cutting corners in carrying out our projects.',
      'Fairness and honesty is evident in all our operations either as the sole contractor or with other partners, suppliers, and most importantly, our clients.',
      'At POLAZZO TACT NIGERIA LIMITED we love what we do and we believe that honesty is the only, and not just the best, policy to excel at it.',
    ],
  },
];

export const WHY_US_STATEMENT =
  'We understand the risk our clients take by entrusting their resources in our hands and we respect that.';

export const PARTNER = {
  name: 'SILVERDOT',
  parent: 'LOKO Technology Nigeria',
  about:
    'SILVERDOT is a registered company in Nigeria that deals in electronic security. The company has been involved in the supply, installation and continued provision of effective solutions in the security systems sector of the construction industry.',
  advantage:
    'As a result of its determination to consistently ensure excellent service delivery to its diverse clientele, and the need to extend its business tentacles and capacity, POLAZZO TACT NIGERIA LIMITED has established a working partnership with SILVERDOT, a subsidiary of LOKO Technology Nigeria; one of the largest leading manufacturers of electronic security products in Nigeria.',
};

export const TEAM_INTRO =
  'Behind every project is a team of skilled professionals committed to excellence, integrity and innovation.';

export const KEY_STAFF: StaffMember[] = [
  { title: 'Bldr.', name: 'Olanrewaju M. Quadri', credential: 'MNIOB', role: 'Managing Director' },
  { title: 'Mrs.', name: 'Olaronke O. Quadri', role: 'Executive Director' },
  { title: 'QS.', name: 'Olaoulu O. Soademi', role: 'Construction Director' },
  { title: 'Engr.', name: 'Charles B. Ajayi', credential: 'MNSE', role: 'Construction Director' },
  { title: 'Bldr.', name: 'Festus Taiwo', credential: 'MNIOB', role: 'Construction Manager' },
  { title: 'Arc.', name: 'Ajibola A. Akanji', role: 'Construction Manager' },
  { title: 'Mr.', name: 'Opeyemi S. Quadri', role: 'HR Director' },
  { title: 'Barr.', name: 'Oluwafemi O. Fabunmi', role: 'Company Secretary' },
  { title: 'Mr.', name: 'Ephrem Ekpo', role: 'Materials & Safety Manager' },
  { title: 'Mr.', name: 'Samuel Oyefade', role: 'Head, Masonry Department' },
  { title: 'Mr.', name: 'Salimon Salaudeen', role: 'Head, Carpentry Department' },
  { title: 'Mr.', name: 'Abubakar Mohammed', role: 'Head, Steel Department' },
  { title: 'QS.', name: 'Danjuma A. Quadri', role: 'Construction Manager' },
  { title: 'Mr.', name: 'Abdullateef Adediran', role: 'Procurement Manager' },
];

export const REGISTRATION_DETAILS: RegistrationDetail[] = [
  {
    label: 'CAC Registration Number',
    value: 'RC 1087110',
    authority: 'Corporate Affairs Commission (CAC), Federal Republic of Nigeria',
    icon: 'account_balance',
  },
  {
    label: 'Tax Identification Number',
    value: '5540754-0001',
    authority: 'Federal Republic of Nigeria',
    icon: 'receipt_long',
  },
];
