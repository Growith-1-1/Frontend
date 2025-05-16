'use client';

import TransactionsContainer from '@/components/transactions/TransactionsContainer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TransactionType } from '@/types/transactions';

const CREATE_TABS: { value: TransactionType; label: string }[] = [
  { value: 'SPEND', label: '지출' },
  { value: 'INCOME', label: '수입' },
];

export default function CreateContainer() {
  return (
    <Tabs defaultValue="SPEND" className="w-full">
      <TabsList className="w-fit ">
        {CREATE_TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {CREATE_TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <TransactionsContainer transaction={tab.value} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
