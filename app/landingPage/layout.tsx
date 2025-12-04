// app/layout.tsx
'use client';


import type { ReactNode } from 'react';
import './global.css';


import Providers from './src/components/Provider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Providers is a client component — safe to include here */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
