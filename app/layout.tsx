import type { Metadata } from 'next';
import { Playfair_Display, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Your Name — Software Engineer',
  description: 'Senior engineer who builds things that scale.',
  openGraph: {
    title: 'Your Name — Software Engineer',
    description: 'Senior engineer who builds things that scale.',
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
      className={`${playfair.variable} ${jetbrains.variable} ${inter.variable}`}
    >
      <body className="bg-[#0a0a0a] text-neutral-100 antialiased">{children}</body>
    </html>
  );
}
