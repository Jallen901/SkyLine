import type { Metadata } from 'next';
import { Bebas_Neue, Montserrat, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Skyline Intel — Clarity From Above',
  description:
    'Aerial inspections, roof & solar panel assessments, construction monitoring, and data analytics. FAA Part 107 certified. Miami, FL.',
  openGraph: {
    title: 'Skyline Intel — Clarity From Above',
    description:
      'Aerial intelligence and full property solutions for Miami and beyond.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${montserrat.variable} ${jetbrains.variable}`}
    >
      <body className="bg-brand-dark text-[#e8edf5] antialiased">{children}</body>
    </html>
  );
}
