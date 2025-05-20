'use client';

import { postAccountBookMonth } from '@/api/transactionsApi';
import { Calendar } from '@/components/ui/calendar';
import { formatSimpleCurrency } from '@/lib/formatMoney';
import { PostAccountBookMonthResponse } from '@/types/transactions';
import { useMutation } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import CalendarLogCardsWrapper from './CalendarLogCardsWrapper';

export default function CalendarContainer() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [transactionsMonthData, setTransactionsMonthData] = useState<
    PostAccountBookMonthResponse[]
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
        className="relative w-full bg-white rounded-lg shadow-sm"
        classNames={{
          caption: "",
          head: "w-full body2 py-1",
          nav: 'absolute top-3 right-3 flex gap-2',
          nav_button_previous: 'border-none',
          nav_button_next: 'border-none',
          cell: "body2 text-center content-start",
          month: 'gap-6',
          months: 'w-full',
        }}
        components={{
          CaptionLabel({ displayMonth }) {
            return (
              <div className="title1 mb-2">
                {format(displayMonth, 'yyyy. MM')}
              </div>
            );
          },
          Day({ displayMonth, date }) {
            const koDate = date.getDate();
            return (
              // <td
              //   className="body2 w-full text-center"
              //   role="gridcell"
              //   data-day={format(date, 'yyyy-MM-dd')}
              // >
              <>
                {date.getMonth() !== displayMonth.getMonth() ? (
                  <span className="text-gray-500">-</span>
                ) : (
                  <button
                    className="grid items-center text-center w-full grid-rows-[1.5fr_1fr_1fr]"
                    type="button"
                    tabIndex={-1}
                    aria-label={format(date, 'yyyy년 M월 d일 EEEE', {
                      locale: ko,
                    })}
                  >
                    <span>{koDate}</span>
                    {transactionsMonthData[koDate - 1]?.spendTotal > 0 && (
                      <span className="leading-none text-[10px] font-semibold text-warning">
                        -
                        {formatSimpleCurrency(
                          transactionsMonthData[koDate - 1].spendTotal
                        )}
                      </span>
                    )}

                    {transactionsMonthData[koDate - 1]?.incomeTotal > 0 && (
                      <span className="leading-none text-[10px] font-semibold text-primary">
                        +
                        {formatSimpleCurrency(
                          transactionsMonthData[koDate - 1].incomeTotal
                        )}
                      </span>
                    )}
                  </button>
                )}
              </>
              // </td>
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
