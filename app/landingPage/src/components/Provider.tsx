// app/src/components/Providers.tsx
'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from './ui/tooltip';
import { Toaster } from './ui/toaster';
import { Toaster as Sonner } from './ui/sonner';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  // create QueryClient on the client only (stable across renders)
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
