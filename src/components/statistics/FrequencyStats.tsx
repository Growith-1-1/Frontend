'use client';
import { CategoryList } from '@/components/statistics/CategoryList';
import { DonutChart } from '@/components/statistics/DonutChart';
import { PeriodTabs } from '@/components/statistics/PeriodTabs';
import { TopCategories } from '@/components/statistics/TopCategories';
import { getCategoryColorByKorean } from '@/constants/categories';
import { useGetStatConsume, useGetStatFrequency } from '@/hooks/useStatistics';
import { ArrowLeft, ArrowRight, BarChart3, PenLine } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Lottie from 'react-lottie-player';
import animationErrorData from '../../../public/lottie/query_error.json';
import EmptyConsumption from './EmptyConsumption';
import { ConsumptionDelta } from './ConsumptionDelta';
import { FrequencyType } from './StatsContainer';

export default function FrequencyStats({
  frequency,
}: {
  frequency: FrequencyType;
}) {
  const { data: rawData, isError } = useGetStatFrequency(frequency);
  const {
    data: consumptionDelta,
    isError: isDeltaError,
    isPending: isDeltaPending,
  } = useGetStatConsume(frequency);

  const statsData = rawData?.map((category) => ({
    name: category.category,
    value: category.sum,
    color: getCategoryColorByKorean(category.category)?.color || '#DCDCDC',
  }));

  const top3Categories = statsData
    ?.sort((a, b) => b.value - a.value)
    .slice(0, 3);

  if (rawData?.length === 0) {
    return <EmptyConsumption />;
  }

  return (
    <div className="flex flex-col mb-6">
      <main className="flex-1">
        {isDeltaPending ? (
          <div className="flex justify-center items-center">
            <div className="flex items-center rounded-full bg-gray-100 animate-pulse py-1.5">
              <div className="w-40 h-9 rounded-full bg-gray-300" />
            </div>
          </div>
        ) : isDeltaError ? (
          <div className="h-9 mx-auto w-fit bg-warning/10 gap-1.5 my-1.5 px-3 rounded-full body3 text-warning flex justify-center items-center">
            <Lottie
              animationData={animationErrorData}
              loop
              play
              className="w-5 h-5"
            />
            소비 증감내역을 불러오는 중 오류가 발생했어요
          </div>
        ) : (
          <ConsumptionDelta
            delta={consumptionDelta.consume}
            frequency={frequency}
          />
        )}
        {top3Categories && <DonutChart data={top3Categories} />}
        {top3Categories && <TopCategories categories={top3Categories} />}
        {statsData && <CategoryList statsData={statsData} />}
      </main>
    </div>
  );
}
