'use server';

import { Resend } from 'resend';
import { SERVICE_OPTIONS, InquiryField, InquiryState } from '@/data/contact';

const DEFAULT_TO_EMAIL = 'info@polazzotact.com.ng';
const DEFAULT_FROM_EMAIL = 'Polazzo Tact Website <onboarding@resend.dev>';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-.\s]{7,30}$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const readField = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
};

// Echoes only the name and the fixed service label, never free text, so the form
// cannot be used to deliver arbitrary content to third-party inboxes.
const buildAutoReply = (name: string, serviceLabel: string, inbox: string) => {
  const safeName = escapeHtml(name);
  const html = `
    <div style="font-family:Arial,sans-serif;color:#121c27;max-width:640px">
      <div style="border-top:4px solid #a53700;padding-top:16px">
        <h2 style="margin:0 0 4px">Thank you for contacting Polazzo Tact Nig. Ltd.</h2>
        <p style="margin:0 0 16px;color:#565d64;text-transform:uppercase;letter-spacing:1px;font-size:12px">Redefining Construction</p>
      </div>
      <p>Dear ${safeName},</p>
      <p>We have received your inquiry regarding <strong>${escapeHtml(serviceLabel)}</strong>. Your request has been routed to the appropriate engineering desk, and a senior project manager will contact you within 24 business hours.</p>
      <p>If you have drawings, site photos or additional details to share, simply reply to this email.</p>
      <p style="margin-top:24px">Kind regards,<br /><strong>Polazzo Tact Nigeria Limited</strong><br /><a href="mailto:${inbox}" style="color:#a53700">${inbox}</a></p>
      <p style="margin-top:24px;font-size:12px;color:#8f7065">You are receiving this message because this email address was submitted through the contact form on the Polazzo Tact website. If this wasn't you, please ignore this email.</p>
    </div>`;

  const text = [
    `Dear ${name},`,
    '',
    `We have received your inquiry regarding ${serviceLabel}. Your request has been routed to the appropriate engineering desk, and a senior project manager will contact you within 24 business hours.`,
    '',
    'If you have drawings, site photos or additional details to share, simply reply to this email.',
    '',
    'Kind regards,',
    'Polazzo Tact Nigeria Limited',
    inbox,
    '',
    "You are receiving this message because this email address was submitted through the contact form on the Polazzo Tact website. If this wasn't you, please ignore this email.",
  ].join('\n');

  return { html, text };
};

export async function sendInquiry(_prevState: InquiryState, formData: FormData): Promise<InquiryState> {
  // Hidden honeypot field: real users never fill it, most spam bots do.
  if (readField(formData, 'website')) {
    return { status: 'success' };
  }

  const name = readField(formData, 'name');
  const email = readField(formData, 'email');
  const phone = readField(formData, 'phone');
  const service = readField(formData, 'service');
  const location = readField(formData, 'location');
  const details = readField(formData, 'details');
  const nda = formData.get('nda') === 'on';

  const serviceLabel = SERVICE_OPTIONS.find((option) => option.value === service)?.label;

  const fieldErrors: Partial<Record<InquiryField, string>> = {};
  if (name.length < 2 || name.length > 100) fieldErrors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(email) || email.length > 200) fieldErrors.email = 'Please enter a valid email address.';
  if (!PHONE_PATTERN.test(phone)) fieldErrors.phone = 'Please enter a valid phone number.';
  if (!serviceLabel) fieldErrors.service = 'Please select a service category.';
  if (location.length > 200) fieldErrors.location = 'Location must be under 200 characters.';
  if (details.length < 10 || details.length > 5000)
    fieldErrors.details = 'Please describe your project (10 to 5,000 characters).';

  if (Object.keys(fieldErrors).length > 0) {
    return { status: 'error', message: 'Please correct the highlighted fields.', fieldErrors };
  }

  const inbox = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('sendInquiry: RESEND_API_KEY is not set.');
    return {
      status: 'error',
      message: `Our inquiry service is temporarily unavailable. Please email ${inbox} directly.`,
    };
  }

  const rows: [string, string][] = [
    ['Name / Representative', name],
    ['Email', email],
    ['Phone', phone],
    ['Service Category', serviceLabel!],
    ['Project Location', location || 'Not specified'],
    ['NDA Requested', nda ? 'Yes' : 'No'],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#121c27;max-width:640px">
      <h2 style="margin:0 0 4px;color:#a53700">New RFP / Project Inquiry</h2>
      <p style="margin:0 0 16px;color:#565d64">Submitted via the Polazzo Tact website contact form.</p>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;border:1px solid #d8e3f3;background:#edf4ff;font-weight:bold;width:200px">${label}</td>
            <td style="padding:8px 12px;border:1px solid #d8e3f3">${escapeHtml(value)}</td>
          </tr>`
          )
          .join('')}
      </table>
      <h3 style="margin:24px 0 8px">Project Details / Scope of Works</h3>
      <p style="white-space:pre-wrap;margin:0;padding:12px;border-left:4px solid #a53700;background:#f7f9ff">${escapeHtml(details)}</p>
    </div>`;

  const text = [
    'New RFP / Project Inquiry',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Project Details / Scope of Works:',
    details,
  ].join('\n');

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: sender,
    to: inbox,
    replyTo: email,
    subject: `New Inquiry: ${serviceLabel} from ${name}`.replace(/[\r\n]+/g, ' '),
    html,
    text,
  });

  if (error) {
    console.error('sendInquiry: Resend failed', error);
    return {
      status: 'error',
      message: `We could not send your inquiry right now. Please try again or email ${inbox}.`,
    };
  }

  const autoReply = buildAutoReply(name, serviceLabel!, inbox);
  const { error: autoReplyError } = await resend.emails.send({
    from: sender,
    to: email,
    replyTo: inbox,
    subject: 'We have received your inquiry | Polazzo Tact Nig. Ltd.',
    html: autoReply.html,
    text: autoReply.text,
  });

  // The inquiry already reached the inbox, so a failed confirmation should not fail the submission.
  if (autoReplyError) {
    console.error('sendInquiry: auto-reply failed', autoReplyError);
  }

  return { status: 'success', submittedName: name, submittedEmail: email };
}
