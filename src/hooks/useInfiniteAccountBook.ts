import { getAccountBookAll } from '@/api/transactionsApi';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseInfiniteAccountBookProps {
  startDate: string;
  endDate: string;
}

export const useInfiniteAccountBook = ({
  startDate,
  endDate,
}: UseInfiniteAccountBookProps) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isPending,
  } = useInfiniteQuery({
    queryKey: ['accountBook', startDate, endDate],
    queryFn: ({ pageParam = 1 }) =>
      getAccountBookAll({ startDate, endDate, page: pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.number < lastPage.totalPage
        ? lastPage.number + 1
        : undefined;
    },
    initialPageParam: 1,
  });

  const allTransactions =
    data?.pages.flatMap((page) => page.accountBookPeriodResponse) || [];

  return {
    data,
    allTransactions,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isPending,
  };
};
