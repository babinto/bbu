import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Batıkan Bahadır Ünsal',
  description: 'Localization portfolio',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
