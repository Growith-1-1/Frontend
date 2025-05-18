'use client';

import { useCallback, useEffect, useRef } from 'react';
import Lottie from 'react-lottie-player';
import animationLoadingData from '../../../../public/lottie/piggy_loading.json';
import animationErrorData from '../../../../public/lottie/query_error.json';
import TransactionsLogCard from './TransactionsLogCard';
import { useInfiniteAccountBook } from '@/hooks/useInfiniteAccountBook';
import { Loader } from 'lucide-react';

interface DateProps {
  startDate: string;
  endDate: string;
}

export default function InfiniteDateCardsWrapper({
  startDate,
  endDate,
}: DateProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const {
    allTransactions,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isPending,
  } = useInfiniteAccountBook({ startDate, endDate });
  console.log(allTransactions.length);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        console.log('here');

        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const currentElement = loadMoreRef.current;

    if (currentElement) {
      observerRef.current = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: '500px 0px',
        threshold: 0,
      });

      observerRef.current.observe(currentElement);
    }

    return () => {
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement);
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  useEffect(() => {
    console.log(isFetchingNextPage);
  }, [isFetchingNextPage]);

  return (
    <>
      {isPending && <Lottie animationData={animationLoadingData} loop play />}
      {isError && (
        <div className="title3 text-warning flex flex-col justify-center items-center gap-10 mt-20">
          <Lottie
            animationData={animationErrorData}
            loop
            play
            className="w-40 h-40"
          />
          데이터를 불러오는 중 오류가 발생했어요
        </div>
      )}
      {allTransactions.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm px-3 py-6 flex-grow flex flex-col gap-4">
          {allTransactions.map((transaction) => (
            <TransactionsLogCard key={transaction.id} data={transaction} />
          ))}
          <div ref={loadMoreRef} className="min-h-20 py-8 flex justify-center">
            {isFetchingNextPage && (
              <Loader className="animate-spin ml-2" size={20} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
