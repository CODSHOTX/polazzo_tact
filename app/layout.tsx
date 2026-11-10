import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polazzo Tact Nig. Ltd. | Redefining Construction",
  description:
    "Polazzo Tact Nig. Ltd. delivers world-class commercial, industrial, and infrastructure engineering across Nigeria with unmatched safety and craftsmanship. RC: 1087410.",
  keywords: [
    "Polazzo Tact",
    "Construction Nigeria",
    "Civil Engineering Lagos",
    "Building Construction Abuja",
    "General Contractor Nigeria",
    "Industrial Engineering",
    "MEP Engineering",
  ],
  authors: [{ name: "Polazzo Tact Nig. Ltd." }],
  openGraph: {
    title: "Polazzo Tact Nig. Ltd. | Redefining Construction",
    description:
      "Nigeria's trusted premier general contractor and engineering vanguard. RC: 1087410.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
