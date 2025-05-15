'use client';

import { getAccountBookIncomeDetail } from '@/api/transactionsApi';
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
    <>
      {data && (
        <TransactionsContainer
          transaction={'INCOME'}
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
