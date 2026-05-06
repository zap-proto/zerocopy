import './global.css';
import { Provider } from '@/components/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'ZApps — The future of I/O is here', template: '%s | ZApps' },
  description: 'Why build zero-copy applications. Less memory, lower latency, post-quantum by default. AI- and web3-native ZApps on the ZAP protocol.',
  keywords: ['ZApp', 'ZApps', 'zero-copy', 'zap', 'I/O', 'AI', 'web3', 'post-quantum', 'X-Wing', 'Z-Wing'],
  authors: [{ name: 'ZAP Protocol Authors' }],
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    title: 'ZApps — The future of I/O is here',
    description: 'Less memory. Lower latency. Post-quantum by default. AI- and web3-native.',
    url: 'https://zerocopy.app',
    siteName: 'ZApps',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZApps — The future of I/O is here',
    description: 'Less memory. Lower latency. Post-quantum by default.',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
