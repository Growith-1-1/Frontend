'use client';

import { useCallback, useEffect, useRef } from 'react';
import Lottie from 'react-lottie-player';
import animationLoadingData from '../../../../public/lottie/piggy_loading.json';
import animationErrorData from '../../../../public/lottie/query_error.json';
import TransactionsLogCard from './TransactionsLogCard';
import { useInfiniteAccountBook } from '@/hooks/useInfiniteAccountBook';
import { useVirtualizer, useWindowVirtualizer } from '@tanstack/react-virtual';
import { Loader } from 'lucide-react';

interface DateProps {
  startDate: string;
  endDate: string;
}

export default function VirtualDateCardsWrapper({
  startDate,
  endDate,
}: DateProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  const {
    allTransactions,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isPending,
  } = useInfiniteAccountBook({ startDate, endDate });

  const rowVirtualizer = useVirtualizer({
    count: allTransactions.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    overscan: 2,
  });
  console.log(allTransactions.length);

  // 가상화 상태를 메모이제이션된 콜백으로 관리
  const checkForMore = useCallback(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const virtualItems = rowVirtualizer.getVirtualItems();
    if (virtualItems.length === 0) return;

    const lastItem = virtualItems[virtualItems.length - 3];

    if (lastItem && lastItem.index >= allTransactions.length - 5) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    isFetchingNextPage,
    allTransactions.length,
    fetchNextPage,
    rowVirtualizer,
  ]);

  // 스크롤 이벤트 핸들러 등록 및 정리
  useEffect(() => {
    const scrollElement = parentRef.current;
    if (!scrollElement) return;

    const handleScroll = () => {
      checkForMore();
    };

    scrollElement.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [checkForMore]);

  // 초기 로드 및 데이터 변경 시 확인
  useEffect(() => {
    checkForMore();
  }, [checkForMore, allTransactions.length]);

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
        <div
          ref={parentRef}
          className="bg-white rounded-lg shadow-sm px-3 py-6 flex-grow"
          style={{
            height: `600px`,
            width: `100%`,
            overflow: 'auto',
          }}
        >
          <div
            className="flex flex-col gap-4"
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              return (
                <div
                  key={virtualRow.index}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <TransactionsLogCard
                    data={allTransactions[virtualRow.index]}
                  />
                </div>
              );
            })}
          </div>
          {isFetchingNextPage && (
            <div className="flex justify-center mt-4">
              <Loader className="animate-spin" size={20} />
            </div>
          )}
        </div>
      )}
    </>
  );
}
