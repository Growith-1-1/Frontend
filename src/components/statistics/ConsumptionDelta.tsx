import { ArrowDown, ArrowUp, Minus } from 'lucide-react';
import { FrequencyType } from './StatsContainer';

export const ConsumptionDelta = ({
  delta,
  frequency,
}: {
  delta: number;
  frequency: FrequencyType;
}) => {
  let icon = <Minus className="w-4 h-4" />;
  let colorClass = 'text-gray-500';
  let bgColorClass = 'bg-gray-100';
  let label = '변동 없음';

  if (delta < 0) {
    icon = <ArrowUp className="w-4 h-4" />;
    colorClass = 'text-warning';
    bgColorClass = 'bg-warning/10';
    label = '더 사용';
  } else if (delta > 0) {
    icon = <ArrowDown className="w-4 h-4" />;
    colorClass = 'text-primary';
    bgColorClass = 'bg-primary/10';
    label = '덜 사용';
  }

  const amount = Math.abs(delta).toLocaleString();

  return (
    <div className="flex justify-center items-center mt-2">
      <div
        className={`flex items-center gap-1.5 py-1.5 px-3 rounded-full ${bgColorClass} ${colorClass}`}
      >
        {icon}
        <span className="title3">{amount}원</span>
        <span className="body3">
          {frequency === 'daily'
            ? '어제보다'
            : frequency === 'weekly'
              ? '저번주보다'
              : '저번달보다'}{' '}
          {label}
        </span>
      </div>
    </div>
  );
};
