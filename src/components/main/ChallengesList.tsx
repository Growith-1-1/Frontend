import { useMyChallenge } from '@/hooks/useChallenges';
import { ChevronsRight, Loader, Trophy, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { ChallengeItem } from './ChallengeItem';

export const ChallengesList = () => {
  const {
    data: fetchedChallenges,
    isLoading,
    isError,
  } = useMyChallenge({
    page: 1,
    size: 10,
  });

  return (
    <div className="px-3 py-6 flex flex-col gap-3 rounded-lg bg-white shadow-sm">
      <Link href="/challenges" className="flex justify-between items-center">
        <h1 className="title1">참여중인 챌린지</h1>
        <ChevronsRight size={24} />
      </Link>

      {isLoading ? (
        <div className="flex items-center gap-2 p-4">
          <Loader className="animate-spin" size={20} />
          <span className="text-gray-500">챌린지를 로드하는 중...</span>
        </div>
      ) : isError ? (
        <div className="rounded-md p-4 flex border items-center gap-2">
          <div className="rounded-full bg-warning/20 h-9 w-9 items-center flex justify-center">
            <AlertTriangle size={24} className="text-warning" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-gray-500 body3">
              챌린지 정보를 불러오는데 문제가 발생했어요.
            </span>
            <Link href="/main" className="flex title3 text-warning">
              새로고침하기
              <ChevronsRight />
            </Link>
          </div>
        </div>
      ) : fetchedChallenges?.length === 0 ? (
        <div className="rounded-md p-4 flex border items-center gap-2">
          <div className="rounded-full bg-primary/20 h-9 w-9 items-center flex justify-center">
            <Trophy size={24} className="text-primary" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-gray-500 body3">
              참여중인 챌린지가 없어요!
            </span>
            <Link href="/challenges" className="flex title3 text-primary">
              챌린지 참여하기
              <ChevronsRight />
            </Link>
          </div>
        </div>
      ) : (
        fetchedChallenges?.map((challenge) => (
          <ChallengeItem key={challenge.id} {...challenge} />
        ))
      )}
    </div>
  );
};
