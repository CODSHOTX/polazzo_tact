export const SERVICE_OPTIONS = [
  { value: 'building', label: 'Building Construction (Commercial / Residential)' },
  { value: 'industrial', label: 'Industrial Engineering Construction' },
  { value: 'mep', label: 'Electrical & Mechanical Installation (MEP)' },
  { value: 'fm', label: 'General Facilities Management' },
  { value: 'real_estate', label: 'Real Estate Development' },
  { value: 'procurement', label: 'Heavy Equipment & Material Procurement' },
] as const;

export type InquiryField = 'name' | 'email' | 'phone' | 'service' | 'location' | 'details';

export interface InquiryState {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<InquiryField, string>>;
  submittedName?: string;
  submittedEmail?: string;
}
