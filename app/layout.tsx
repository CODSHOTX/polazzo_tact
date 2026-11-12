import type { Metadata } from "next";
import "./globals.css";
import { REGIONAL_HUBS } from "@/data/company";
import { TOP_UTILITY_INFO } from "@/data/navigation";
import {
  SITE_ALTERNATE_NAMES,
  SITE_DESCRIPTION,
  SITE_LEGAL_NAME,
  SITE_LOGO,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Polazzo Tact Nig. Ltd. | Construction & Engineering Company in Nigeria",
    template: "%s | Polazzo Tact Nig. Ltd.",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Polazzo Tact",
    "Polazzo Tact Nig. Ltd.",
    "Polazzo Tact Nigeria Limited",
    "Construction Nigeria",
    "Construction Company Lagos",
    "Civil Engineering Lagos",
    "Building Construction Abuja",
    "General Contractor Nigeria",
    "Industrial Engineering",
    "MEP Engineering",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Polazzo Tact Nig. Ltd. | Construction & Engineering Company in Nigeria",
    description:
      "Nigeria's trusted general contractor for building, civil, industrial and MEP engineering. RC: 1087410.",
    siteName: SITE_NAME,
    locale: "en_NG",
    type: "website",
    images: [{ url: SITE_OG_IMAGE, alt: "Polazzo Tact Nig. Ltd. construction site in Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polazzo Tact Nig. Ltd. | Construction & Engineering Company in Nigeria",
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAMES,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-NG",
    },
    {
      "@type": "GeneralContractor",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: SITE_LEGAL_NAME,
      alternateName: SITE_ALTERNATE_NAMES,
      url: SITE_URL,
      logo: `${SITE_URL}${SITE_LOGO}`,
      image: `${SITE_URL}${SITE_OG_IMAGE}`,
      description: SITE_DESCRIPTION,
      email: TOP_UTILITY_INFO.email,
      telephone: "+2348039702524",
      identifier: { "@type": "PropertyValue", name: "CAC RC Number", value: "1087410" },
      areaServed: { "@type": "Country", name: "Nigeria" },
      address: REGIONAL_HUBS.map((hub) => ({
        "@type": "PostalAddress",
        name: hub.title,
        streetAddress: hub.address,
        addressCountry: "NG",
      })),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+2348039702524",
          email: TOP_UTILITY_INFO.email,
          areaServed: "NG",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+2349059558962",
          areaServed: "NG",
          availableLanguage: "English",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="bg-background text-on-surface antialiased font-body-md text-body-md selection:bg-primary-container selection:text-on-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
