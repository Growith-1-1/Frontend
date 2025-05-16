'use client';

import { Loader } from 'lucide-react';
import dynamic from 'next/dynamic';

const CreateContainer = dynamic(
  () => import('@/components/transactions/create/CreateContainer'),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin ml-2" size={20} />
      </div>
    ),
  }
);

export default function TransactionsCreatePage() {
  return <CreateContainer />;
}
