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
  title: 'Nawab Sahil — WordPress Expert, PHP & Java Developer',
  description: 'Portfolio of Nawab Sahil from Jamnagar, Gujarat. MCA at DDU Nadiad, BCA at Saurashtra University, building SEO-friendly WordPress, PHP, Java, ASP.NET, and DevOps projects.',
  keywords: ['Nawab Sahil', 'WordPress Expert', 'PHP Developer', 'Java Developer', 'ASP.NET', 'SEO', 'Jamnagar', 'Gujarat', 'MCA', 'Saurashtra University'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nawabsahil.vercel.app',
    siteName: 'Nawab Sahil — Portfolio',
    images: [
      {
        url: 'https://nawabsahil.vercel.app',
        alt: 'Nawab Sahil — WordPress Expert and Full Stack Developer',
      },
    ],
  },
  alternates: {
    canonical: 'https://nawabsahil.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nawab Sahil — WordPress Expert & PHP Developer',
    description: 'SEO-first WordPress, PHP, Java, ASP.NET, and DevOps projects from Jamnagar, Gujarat.',
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
    url: "https://nawabsahil.vercel.app",
    image: "https://nawabsahil.vercel.app",
    jobTitle: "WordPress Expert & Full-Stack Developer",
    alumniOf: "DDU Nadiad",
    knowsAbout: ["WordPress", "PHP", "Java", "ASP.NET", "SEO", "DevOps", "Google Ads"],
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
    description: "WordPress Expert and Full Stack Developer from Jamnagar, Gujarat. MCA at DDU Nadiad with a BCA foundation from Saurashtra University.",
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="canonical" href="https://nawabsahil.vercel.app/" />
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
