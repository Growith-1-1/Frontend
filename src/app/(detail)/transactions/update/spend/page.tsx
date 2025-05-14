'use client';

import {
  getAccountBookIncomeDetail,
  getAccountBookSpendDetail,
} from '@/api/transactionsApi';
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
    queryKey: ['transactions', 'spend', id],
    queryFn: () =>
      getAccountBookSpendDetail({
        id:
          id ??
          (() => {
            throw new Error('id가 null입니다.');
          })(),
      }),
    enabled: !!id,
  });

  if (id) getAccountBookIncomeDetail({ id });

  return (
    <Suspense>
      {data && (
        <TransactionsContainer
          transaction={'SPEND'}
          defaultValue={data as ExpenseFormValues}
          isEdit
        />
      )}
    </Suspense>
  );
}
