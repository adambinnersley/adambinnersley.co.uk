import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Adam Binnersley | Senior Software Engineer',
  description: 'Senior Software Engineer based in Pontefract, West Yorkshire. Specializing in React, Laravel, React Native, and cloud technologies. Building elegant solutions to complex problems.',
  keywords: ['Software Engineer', 'Web Developer', 'React', 'Laravel', 'TypeScript', 'Next.js', 'React Native', 'Full Stack Developer', 'Pontefract', 'West Yorkshire'],
  authors: [{ name: 'Adam Binnersley' }],
  creator: 'Adam Binnersley',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    title: 'Adam Binnersley | Senior Software Engineer',
    description: 'Senior Software Engineer based in Pontefract, West Yorkshire. Specializing in React, Laravel, React Native, and cloud technologies.',
    siteName: 'Adam Binnersley Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Binnersley | Senior Software Engineer',
    description: 'Senior Software Engineer based in Pontefract, West Yorkshire.',
    creator: '@adambinnersley',
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
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
