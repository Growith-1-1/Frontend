'use client';

import { getAccountBookIncomeDetail } from '@/api/transactionsApi';
import TransactionsContainer, {
  ExpenseFormValues,
} from '@/components/transactions/TransactionsContainer';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function Page() {
  const searchParam = useSearchParams();
  const id = searchParam.get('id');

  const { data } = useQuery({
    queryKey: ['transactions', 'income', id],
    queryFn: () =>
      getAccountBookIncomeDetail({
        id:
          id ??
          (() => {
            throw new Error('id가 null입니다.');
          })(),
      }),
    enabled: !!id,
  });

  return (
    <Suspense>
      {data && (
        <TransactionsContainer
          transaction={'INCOME'}
          defaultValue={data as ExpenseFormValues}
          isEdit
        />
      )}
    </Suspense>
  );
}
