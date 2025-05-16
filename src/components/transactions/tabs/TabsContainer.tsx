'use client';

import BudgetContainer from '@/components/transactions/tabs/BudgetContainer';
import CalendarContainer from '@/components/transactions/tabs/CalendarContainer';
import DateContainer from '@/components/transactions/tabs/DateContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TRANSACTIONS_TABS = [
  { value: 'date', label: '기간 설정' },
  { value: 'calendar', label: '캘린더' },
  { value: 'budget', label: '예산 설정' },
];

export default function TabsContainer() {
  return (
    <Tabs defaultValue="date" className="w-full gap-6">
      <TabsList className="w-fit ">
        {TRANSACTIONS_TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TRANSACTIONS_TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.value === 'date' && <DateContainer />}
          {tab.value === 'calendar' && <CalendarContainer />}
          {tab.value === 'budget' && <BudgetContainer />}
        </TabsContent>
      ))}
    </Tabs>
  );
}
