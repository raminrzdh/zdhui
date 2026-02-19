import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/utils/cn';
import { Provider as TooltipProvider } from '@/components/ui/tooltip';
import { NotificationProvider } from '@/components/ui/notification-provider';
import { RTLProvider } from '@/components/rtl-provider';
import Header from '@/components/header';

const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = localFont({
  src: './fonts/GeistMono[wght].woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'ZDH-UI - Next.js TypeScript Component Library',
  description: 'A comprehensive UI component library with RTL support',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(inter.variable, geistMono.variable, 'antialiased')}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className='bg-bg-white-0 text-text-strong-950'>
        <RTLProvider>
          <ThemeProvider attribute='class'>
            <TooltipProvider>
              <div className='flex min-h-screen flex-col'>
                <Header />
                <main className='flex flex-1 flex-col'>{children}</main>
              </div>
            </TooltipProvider>
          </ThemeProvider>
          <NotificationProvider />
        </RTLProvider>
      </body>
    </html>
  );
}
