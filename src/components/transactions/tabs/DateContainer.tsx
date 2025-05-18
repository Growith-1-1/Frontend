'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { CATEGORIES } from '@/constants/categories';
import { format, subMonths } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-day-picker';
import DateLogCardsWrapper from './InfiniteDateCardsWrapper';
import InfiniteDateCardsWrapper from './InfiniteDateCardsWrapper';
import VirtualDateCardsWrapper from './VirtualDateCardsWrapper';

const DEFAULT_DATE_RANGE = {
  from: subMonths(new Date(), 1),
  to: new Date(),
};

export default function DateContainer() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [tempDate, setTempDate] = useState<DateRange | undefined>(
    DEFAULT_DATE_RANGE
  );
  const [showExpenditure, setShowExpenditure] = useState(true);
  const [showIncome, setShowIncome] = useState(true);
  const [selectedDate, setSelectedDate] = useState<DateRange | undefined>(
    DEFAULT_DATE_RANGE
  );
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const calendarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const startDate =
    selectedDate?.from && format(selectedDate.from, 'yyyy-MM-dd');
  const endDate = selectedDate?.to && format(selectedDate.to, 'yyyy-MM-dd');

  const handleSelectDate = () => {
    if (tempDate) {
      setSelectedDate(tempDate);
      setOpenCalendar(false);
    }
  };

  const handleTempSelectDate = (dateRange: DateRange | undefined) => {
    if (dateRange) {
      setErrorMessage(null);
    } else {
      setErrorMessage('기간 설정은 필수입니다!');
    }
    setTempDate(dateRange);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenCalendar(false);
      }
    };

    if (openCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCalendar]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="relative">
          <Button
            id="date"
            variant="outline"
            onClick={() => setOpenCalendar(!openCalendar)}
            className="justify-start pl-3 focus:bg-transparent"
          >
            <CalendarIcon className="text-gray-500" />
            {startDate && endDate ? (
              <>
                {startDate} ~ {endDate}
              </>
            ) : (
              <span className="text-gray-500">기간을 설정해주세요</span>
            )}
          </Button>
          {openCalendar && (
            <Calendar
              mode="range"
              selected={tempDate}
              onSelect={handleTempSelectDate}
              className="absolute bg-white top-14  rounded-md shadow-sm z-10"
              footer={
                <div className="flex justify-end mt-2 items-center">
                  {errorMessage && (
                    <span className="text-warning body3">{errorMessage}</span>
                  )}
                  <Button
                    variant="ghost"
                    size="fitSm"
                    onClick={handleSelectDate}
                    disabled={errorMessage !== null}
                    className="disabled:bg-transparent text-primary"
                  >
                    확인
                  </Button>
                </div>
              }
            />
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3 pl-1">
            <div className="flex items-center gap-2 shrink-0">
              <Switch
                checked={showExpenditure}
                onCheckedChange={() => setShowExpenditure(!showExpenditure)}
              />
              <Label>지출</Label>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Switch
                checked={showIncome}
                onCheckedChange={() => setShowIncome(!showIncome)}
              />
              <Label>수입</Label>
            </div>
          </div>
          <Select>
            <SelectTrigger className="w-[170px]">
              <SelectValue placeholder="카테고리" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category.id} value={category.english}>
                    {category.korean}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {startDate && endDate && (
        // <InfiniteDateCardsWrapper startDate={startDate} endDate={endDate} />
        <VirtualDateCardsWrapper startDate={startDate} endDate={endDate} />
      )}
    </div>
  );
}
