// pages/_app.tsx
import '@/styles/globals.css'; // adjust the path if your global CSS is elsewhere

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TooltipProvider } from '../components/ui/tooltip';
import { Toaster } from '../components/ui/toaster';
import { Toaster as Sonner } from '../components/ui/sonner';


const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Your global toast providers */}
        <Toaster />
        <Sonner />
        
        {/* Next.js renders your pages here */}
        <Component {...pageProps} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
