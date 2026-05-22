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
  title: 'Nawab Sahil (Sahil Nawab) | Software Engineer | Next.js, TypeScript, Docker, DevOps',
  description: 'Portfolio of Nawab Sahil, also known as Sahil Nawab, software engineer from Jamnagar, Gujarat. MCA candidate at Dharmsinh Desai University building production-ready applications with Next.js, TypeScript, Docker, PostgreSQL, GitHub Actions, PHP, and WordPress.',
   verification: {
    google: "NHWTrZcjhlSm7JjfH_ba5644DxjlJOaDuSVn0NahgGA",
  },
  keywords: [
    'Nawab Sahil',
    'Software Engineer India',
    'Next.js Developer',
    'TypeScript Engineer',
    'Docker Developer',
    'CI/CD Pipeline',
    'GitHub Actions',
    'PostgreSQL Developer',
    'MERN Stack Engineer',
    'PHP Developer',
    'WordPress Developer',
    'Java Developer',
    'Technical SEO',
    'DevOps Automation',
    'Developer Tooling',
    'Dharmsinh Desai University',
    'Saurashtra University'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nawabsahil.vercel.app',
    siteName: 'Nawab Sahil | Engineering Portfolio',
    title: 'Nawab Sahil (Sahil Nawab) | Software Engineer | Next.js, TypeScript, Docker, DevOps',
    description: 'Nawab Sahil, also known as Sahil Nawab, is a production-focused software engineer building full-stack web applications, deployment workflows, and developer tooling.',
    images: [
      {
        url: 'https://nawabsahil.vercel.app',
        alt: 'Nawab Sahil - Software Engineer Portfolio',
      },
    ],
  },
  alternates: {
    canonical: 'https://nawabsahil.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nawab Sahil (Sahil Nawab) | Software Engineer',
    description: 'Building production-grade web systems with Next.js, TypeScript, Docker, CI/CD, and technical SEO.',
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
    alternateName: ["Sahil Nawab"],
    url: "https://nawabsahil.vercel.app",
    image: "https://nawabsahil.vercel.app",
    jobTitle: "Software Engineer",
    alumniOf: ["Dharmsinh Desai University", "Saurashtra University"],
    knowsAbout: ["Next.js", "React", "TypeScript", "Docker", "PostgreSQL", "GitHub Actions", "PHP", "WordPress", "Java", "Technical SEO", "DevOps"],
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
    description: "Software engineer from Jamnagar, Gujarat building full-stack web applications with deployment-ready workflows, technical SEO, and developer tooling.",
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="canonical" href="https://nawabsahil.vercel.app" />
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
