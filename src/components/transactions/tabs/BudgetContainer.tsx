'use client';

import { format } from 'date-fns';
import BudgetEditor from './BudgetEditor';
import { useQuery } from '@tanstack/react-query';
import { getBudget } from '@/api/budgetApi';

const CURRENT_MONTH = new Date().getMonth() + 1;

export default function BudgetContainer({
  page,
}: {
  page?: 'MAIN' | 'TRANSACTIONS';
}) {
  const budgetRequestDate = format(new Date(), 'yyyy-MM-01');

  const {
    data: budgetData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['budget'],
    queryFn: () => getBudget({ date: budgetRequestDate }),
  });

  const hasBudget = budgetData && budgetData.budget > 0;
  if (isError) {
  }

  const BudgetSkeleton = () => (
    <div className="animate-pulse">
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-md shadow-sm px-3 py-6 flex flex-col gap-3">
        <span className="title1">{CURRENT_MONTH}월 소비 현황</span>
        {isPending ? (
          <BudgetSkeleton />
        ) : budgetData ? (
          <div>
            <div className="title3 flex flex-col gap-2">
              <span>목표 | {budgetData.budget.toLocaleString()}원</span>
              <span>사용 | {budgetData.total.toLocaleString()}원</span>
              <span>
                남은 예산 |{' '}
                {(budgetData.budget - budgetData.total).toLocaleString()}원
              </span>
            </div>
          </div>
        ) : (
          <span className="title3 text-primary">
            예산을 등록하면 소비 현황을 알려드려요
          </span>
        )}
      </div>
      {page === 'MAIN' ? (
        <></>
      ) : (
        <BudgetEditor
          mode={hasBudget ? 'edit' : 'create'}
          // initialBudget={hasBudget ? budgetData : {}}
          initialBudget={{}}
        />
      )}
    </div>
  );
}
