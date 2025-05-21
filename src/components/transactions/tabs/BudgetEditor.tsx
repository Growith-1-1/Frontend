import { postBudget, putBudget } from '@/api/budgetApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { PERIOD_TYPES } from '@/constants/period';
import { GetBudgetResponse } from '@/types/budget';
import { EmptyResponse } from '@/types/common';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getDaysInMonth, getWeeksInMonth } from 'date-fns';
import { Loader, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BudgetEditorProps {
  mode: 'edit' | 'create';
  initialBudget: GetBudgetResponse | EmptyResponse;
}

export default function BudgetEditor({
  mode,
  initialBudget,
}: BudgetEditorProps) {
  const [calculateInput, setCalculateInput] = useState('');
  const [repeatInput, setRepeatInput] = useState('');
  const [calculateValue, setCalculateValue] = useState<number>(0);
  const [selectedPeriod, setSelectedPeriod] = useState('DAILY');
  const [budget, setBudget] = useState(initialBudget.budget);
  console.log("initial", initialBudget)

  console.log(budget)


  const currentDate = new Date();
  const daysInCurrentMonth = getDaysInMonth(currentDate);
  const weeksInCurrentMonth = getWeeksInMonth(currentDate);

  const queryClient = useQueryClient();

  const { mutate: postNewBudget, isPending: isPosting } = useMutation({
    mutationFn: postBudget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budget'] });
    },
  });

  const { mutate: putCurrentBudget, isPending: isPutting } = useMutation({
    mutationFn: putBudget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budget'] });
    },
  });

  const handleSubmitBudget = () => {
    const newBudget = Number(budget);
    if (mode === 'create') {
      postNewBudget({ budget: newBudget });
    } else {
      putCurrentBudget({ id: initialBudget.id, budget: newBudget });
    }
  };

  useEffect(() => {
    if (selectedPeriod === 'DAILY') {
      setCalculateValue(
        parseInt(calculateInput) * parseInt(repeatInput) * daysInCurrentMonth ||
          0
      );
    } else {
      setCalculateValue(
        parseInt(calculateInput) *
          parseInt(repeatInput) *
          weeksInCurrentMonth || 0
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculateInput, repeatInput, selectedPeriod]);

  useEffect(() => {
    setBudget(initialBudget.budget)
  }, [initialBudget])

  return (
    <div className="bg-white rounded-lg shadow-sm px-3 py-6 flex flex-col gap-4 flex-grow">
      <span className="title1">
        예산 {mode === 'create' ? '등록' : '수정'}하기
      </span>
      <div className="flex flex-col gap-2">
        <Label>예산 계산기</Label>
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Input
              maxLength={10}
              value={calculateInput}
              onChange={(e) => setCalculateInput(e.target.value)}
              className="text-right pr-6"
            />
            <span className="absolute text-gray-500 right-2 bottom-3">원</span>
          </div>
          <X size={24} className="shrink-0" />
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="기간" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {PERIOD_TYPES.filter(
                  (p) => p.key === 'DAILY' || p.key === 'WEEKLY'
                ).map((period) => (
                  <SelectItem key={period.key} value={period.key}>
                    {period.ko}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="relative">
            <Input
              maxLength={3}
              value={repeatInput}
              onChange={(e) => setRepeatInput(e.target.value)}
              className="w-[80px] text-right pr-6"
            />
            <span className="absolute text-gray-500 right-2 bottom-3">회</span>
          </div>
        </div>
        <div className="relative">
          <Input
            value={calculateValue.toLocaleString()}
            disabled
            className="text-right pr-6"
          />
          <span className="absolute text-gray-500 right-2 bottom-3">원</span>
        </div>
      </div>
      <Label>예산 금액</Label>
      <div className="flex-1 relative">
        <Input
          maxLength={10}
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
          className="text-right pr-6"
        />
        <span className="absolute text-gray-500 right-2 bottom-3">원</span>
      </div>
      <Button variant="primary" onClick={handleSubmitBudget}>
        {isPosting || isPutting ? (
          <Loader className="animate-spin ml-2" size={20} />
        ) : (
          <>{mode === 'create' ? '등록하기' : '수정하기'}</>
        )}
      </Button>
    </div>
  );
}
