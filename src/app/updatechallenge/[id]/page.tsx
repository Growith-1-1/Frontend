import ChallengeForm from '@/components/challengeForm/ChallengeForm';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

interface EditChallengePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditChallengePage({
  params,
}: EditChallengePageProps) {
  const { id } = await params;

  if (!id) {
    return <div className="p-4 text-center">잘못된 접근입니다.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Suspense>
        <ChallengeForm />
      </Suspense>
    </div>
  );
}
