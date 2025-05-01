'use client';

import { postAccountBookMonth } from '@/api/transactionsApi';
import { Calendar } from '@/components/ui/calendar';
import { formatSimpleCurrency } from '@/lib/formatMoney';
import { AccountBookMonthResponse } from '@/types/transactions';
import { useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import CalendarLogCardsWrapper from './CalendarLogCardsWrapper';

export default function CalendarContainer() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [transactionsMonthData, setTransactionsMonthData] = useState<
    AccountBookMonthResponse[]
  >([]);

  const { mutate: accountBookMonth } = useMutation({
    mutationFn: postAccountBookMonth,
    onSuccess: (data) => {
      setTransactionsMonthData(data);
    },
  });

  const handleMonthChange = (month: Date) => {
    setSelectedMonth(month);
  };

  useEffect(() => {
    if (selectedMonth) {
      const requestMonth = format(selectedMonth, 'yyyy-MM-01');
      accountBookMonth(requestMonth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth]);

  return (
    <div className="flex flex-col gap-6 px-4 w-full">
      <Calendar
        className="w-full bg-white rounded-lg shadow-sm"
        classNames={{
          day: 'body2 w-full text-center',
          nav: 'absolute right-10',
          button_previous: 'right-5',
          button_next: 'right-0',
          weekday: 'w-full body2 py-1',
          day_button: 'p-2',
          month: 'gap-6',
          month_grid: 'w-full',
        }}
        components={{
          MonthCaption({ calendarMonth }) {
            return (
              <div className="title1 mb-2">
                {format(calendarMonth.date, 'yyyy. MM')}
              </div>
            );
          },
          Day({ day }) {
            const date = day.date.getDate();
            return (
              <td
                className="body2 w-full text-center"
                role="gridcell"
                data-day={format(day.date, 'yyyy-MM-dd')}
              >
                {day.outside ? (
                  <span className="text-gray-500">-</span>
                ) : (
                  <button
                    className="grid items-center text-center w-full grid-rows-[1.5fr_1fr_1fr]"
                    type="button"
                    tabIndex={-1}
                    aria-label={format(day.date, 'yyyy년 M월 d일 EEEE', {
                      locale: ko,
                    })}
                  >
                    <span>{date}</span>
                    {transactionsMonthData[date - 1]?.spendTotal > 0 && (
                      <span className="leading-none text-[10px] font-semibold text-warning">
                        -
                        {formatSimpleCurrency(
                          transactionsMonthData[date - 1].spendTotal
                        )}
                      </span>
                    )}

                    {transactionsMonthData[date - 1]?.incomeTotal > 0 && (
                      <span className="leading-none text-[10px] font-semibold text-primary">
                        +
                        {formatSimpleCurrency(
                          transactionsMonthData[date - 1].incomeTotal
                        )}
                      </span>
                    )}
                  </button>
                )}
              </td>
            );
          },
        }}
        mode="single"
        month={selectedMonth}
        onMonthChange={handleMonthChange}
        showOutsideDays={false}
      />
      <CalendarLogCardsWrapper
        requestMonth={format(selectedMonth, 'yyyy-MM-01')}
      />
    </div>
  );
}
