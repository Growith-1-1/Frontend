'use client';

import { Loader } from 'lucide-react';
import dynamic from 'next/dynamic';

const ProfileContainer = dynamic(
  () => import('@/components/profile/ProfileContainer'),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="animate-spin ml-2" size={20} />
      </div>
    ),
  }
);

export default function ProfilePage() {
  return <ProfileContainer />;
}
