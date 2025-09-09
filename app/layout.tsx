import './globals.css';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'HLBots – Fast · Safe · Effective',
  description: 'Automation bots and guides for popular strategy games.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
