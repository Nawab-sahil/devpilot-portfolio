import type { Metadata } from "next";

import AppShell from "@/components/layout/AppShell";
import "./globals.css";

import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Sahil — Full-Stack Developer & MCA Student',
  description: 'DevPilot Portfolio. MERN Stack developer from Gujarat. Open to remote roles and freelance.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sahil.dev',
    siteName: 'Sahil — DevPilot',
    images: [
      {
        url: 'https://sahil.dev/og-image.svg',
        alt: 'Sahil — Full-Stack Developer',
      },
    ],
  },
  alternates: {
    canonical: 'https://sahil.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil — Full-Stack Developer',
    description: 'MERN Stack. Next.js. Cloud.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nawab Sahil",
    url: "https://sahil.dev",
    image: "https://sahil.dev/og-image.svg",
    jobTitle: "Full-Stack Developer",
    alumniOf: "DDU Nadiad",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jamnagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Nawab-sahil/",
      "https://leetcode.com/u/nawabsahil/",
      "https://www.linkedin.com/in/sahil-nawab"
    ],
    description: "MERN Stack developer from Gujarat. Open to remote roles and freelance. Currently pursuing MCA at DDU Nadiad.",
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="canonical" href="https://sahil.dev" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
