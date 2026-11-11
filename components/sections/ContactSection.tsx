'use client';

import React, { startTransition, useActionState, useState } from 'react';
import { REGIONAL_HUBS, EMERGENCY_HOTLINE } from '@/data/company';
import { SERVICE_OPTIONS, InquiryField, InquiryState } from '@/data/contact';
import { sendInquiry } from '@/app/actions/contact';
import { Icon } from '@/components/ui/Icon';

const INITIAL_STATE: InquiryState = { status: 'idle' };

const inputClass = (hasError: boolean) =>
  `w-full px-3 bg-surface-container-lowest border rounded-DEFAULT text-on-surface font-body-md focus:outline-none transition-colors ${
    hasError ? 'border-error focus:border-error' : 'border-outline focus:border-primary'
  }`;

const FieldError = ({ message }: { message?: string }) =>
  message ? <p className="mt-1 font-body-sm text-body-sm text-error">{message}</p> : null;

interface InquiryFormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  details: string;
  nda: boolean;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormValues>({
    name: '',
    email: '',
    phone: '',
    service: 'building',
    location: '',
    details: '',
    nda: false,
  });

  const [state, submitInquiry, pending] = useActionState(sendInquiry, INITIAL_STATE);
  const [dismissedState, setDismissedState] = useState<InquiryState | null>(null);

  const submitted = state.status === 'success' && state !== dismissedState;
  const fieldError = (field: InquiryField) =>
    state !== dismissedState ? state.fieldErrors?.[field] : undefined;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = new FormData(e.currentTarget);
    startTransition(() => submitInquiry(payload));
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'building',
      location: '',
      details: '',
      nda: false,
    });
    setDismissedState(state);
  };

  return (
    <section
      className="py-20 bg-surface-container-low border-b border-surface-container-highest"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Corporate Addresses & Operations Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider font-bold mb-2">
                <Icon name="contact_support" className="text-sm" />
                <span>Get In Touch</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                Initiate Your Construction Consultation
              </h2>
              <div className="w-16 h-1 bg-primary mt-3 mb-4" />
              <p className="font-body-md text-body-md text-tertiary">
                Whether you are planning a landmark commercial high-rise, industrial processing plant, or
                procurement schedule, our technical engineering partners are ready to assist.
              </p>
            </div>

            {/* Dual Regional Hubs */}
            <div className="space-y-4">
              {REGIONAL_HUBS.map((hub) => (
                <div
                  key={hub.title}
                  className={`p-5 bg-surface-container-lowest border-l-4 ${hub.borderClass} rounded-DEFAULT shadow-sm`}
                >
                  <div className="flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface font-bold text-base mb-1">
                    <Icon name={hub.icon} className={hub.iconClass} />
                    <span>{hub.title}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-tertiary mb-2">{hub.address}</p>
                  <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-4">
                    {hub.phone && <span>{hub.phone}</span>}
                    {hub.email && <span>{hub.email}</span>}
                    <span>•</span>
                    {hub.hours && <span>{hub.hours}</span>}
                    {hub.rcNumber && <span>{hub.rcNumber}</span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contractor Hotline Strip */}
            <div className="p-5 bg-inverse-surface text-inverse-on-surface rounded-DEFAULT border-l-4 border-primary">
              <div className="flex items-center gap-3">
                <Icon name={EMERGENCY_HOTLINE.icon} className="text-secondary-container text-3xl" />
                <div>
                  <div className="font-label-md text-label-md text-secondary-fixed uppercase font-bold tracking-wider">
                    {EMERGENCY_HOTLINE.title}
                  </div>
                  <div className="font-headline-sm text-headline-sm text-surface-container-lowest font-bold">
                    {EMERGENCY_HOTLINE.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Integrated RFP & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-8 border border-outline-variant rounded-DEFAULT shadow-md">
              <div className="border-b border-surface-container-highest pb-4 mb-6">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Submit RFP / Project Inquiry
                </h3>
                <p className="font-body-sm text-body-sm text-tertiary">
                  Complete the technical brief below. A senior project manager will respond within 24
                  operational hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-surface-container-low border-l-4 border-primary rounded-DEFAULT space-y-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Icon name="check_circle" className="text-3xl" />
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Inquiry Received Successfully
                    </h4>
                  </div>
                  <p className="font-body-md text-body-md text-tertiary">
                    Thank you, <strong>{state.submittedName ?? formData.name}</strong>. Your technical brief has
                    been routed to the appropriate engineering desk at Polazzo Tact Nig. Ltd. A senior project
                    manager will contact you at <strong>{state.submittedEmail ?? formData.email}</strong> within 24
                    business hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 bg-primary text-on-primary font-label-md text-label-md uppercase px-6 py-2.5 rounded-DEFAULT font-bold tracking-wider hover:bg-primary-container transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {state.status === 'error' && state !== dismissedState && state.message && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 p-3 bg-error-container text-on-error-container border-l-4 border-error rounded-DEFAULT font-body-sm text-body-sm"
                    >
                      <Icon name="error" className="text-[18px] shrink-0" />
                      <span>{state.message}</span>
                    </div>
                  )}

                  {/* Honeypot: hidden from people, left empty by real users */}
                  <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                    <label htmlFor="inquiry-website">Website</label>
                    <input id="inquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1"
                      >
                        Your Name / Representative
                      </label>
                      <input
                        id="inquiry-name"
                        name="name"
                        className={`h-11 ${inputClass(!!fieldError('name'))}`}
                        placeholder="e.g. Engr. Babatunde Adeyemi"
                        required
                        maxLength={100}
                        autoComplete="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <FieldError message={fieldError('name')} />
                    </div>
                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1"
                      >
                        Corporate Email
                      </label>
                      <input
                        id="inquiry-email"
                        name="email"
                        className={`h-11 ${inputClass(!!fieldError('email'))}`}
                        placeholder="babatunde@organization.ng"
                        required
                        maxLength={200}
                        autoComplete="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <FieldError message={fieldError('email')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1"
                      >
                        Direct Phone Number
                      </label>
                      <input
                        id="inquiry-phone"
                        name="phone"
                        className={`h-11 ${inputClass(!!fieldError('phone'))}`}
                        placeholder="+234 803 000 0000"
                        required
                        maxLength={30}
                        autoComplete="tel"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <FieldError message={fieldError('phone')} />
                    </div>
                    <div>
                      <label
                        htmlFor="inquiry-service"
                        className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1"
                      >
                        Required Service Category
                      </label>
                      <select
                        id="inquiry-service"
                        name="service"
                        className={`h-11 ${inputClass(!!fieldError('service'))}`}
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <FieldError message={fieldError('service')} />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-location"
                      className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1"
                    >
                      Project Location in Nigeria
                    </label>
                    <input
                      id="inquiry-location"
                      name="location"
                      className={`h-11 ${inputClass(!!fieldError('location'))}`}
                      placeholder="e.g. Lekki Free Zone, Lagos / CBD Abuja / Port Harcourt"
                      maxLength={200}
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                    <FieldError message={fieldError('location')} />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-details"
                      className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold mb-1"
                    >
                      Project Details / Scope of Works
                    </label>
                    <textarea
                      id="inquiry-details"
                      name="details"
                      className={`py-3 ${inputClass(!!fieldError('details'))}`}
                      placeholder="Outline estimated square meterage, timeline expectations, architectural phase, or specific technical requirements..."
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                    <FieldError message={fieldError('details')} />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      className="h-4 w-4 rounded-DEFAULT text-primary border-outline focus:ring-0 cursor-pointer"
                      id="ndaCheck"
                      name="nda"
                      type="checkbox"
                      checked={formData.nda}
                      onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                    />
                    <label className="font-body-sm text-body-sm text-tertiary cursor-pointer" htmlFor="ndaCheck">
                      Request standard Mutual Non-Disclosure Agreement (NDA) prior to drawings exchange.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-DEFAULT font-bold tracking-wider uppercase transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                      type="submit"
                      disabled={pending}
                    >
                      <span>{pending ? 'Sending Inquiry…' : 'Submit RFP / Inquiry'}</span>
                      <Icon
                        name={pending ? 'progress_activity' : 'send'}
                        className={`text-[20px] ${pending ? 'animate-spin' : ''}`}
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
