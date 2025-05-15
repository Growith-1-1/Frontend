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
import Lottie from 'react-lottie-player';
import animationLoadingData from '../../../../../../public/lottie/piggy_loading.json';
import { Loader } from 'lucide-react';

function TransactionDetail() {
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
    <>
      {data && (
        <TransactionsContainer
          transaction={'SPEND'}
          defaultValue={data as ExpenseFormValues}
          isEdit
        />
      )}
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loader className="animate-spin ml-2" size={20} />}>
      <TransactionDetail />
    </Suspense>
  );
}
