'use client';

import { Loader } from 'lucide-react';
import dynamic from 'next/dynamic';

const StatsContainer = dynamic(
  () => import('@/components/statistics/StatsContainer'),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin ml-2" size={20} />
      </div>
    ),
  }
);

export default function StatsPage() {
  return <StatsContainer />;
}
