'use client';

import * as React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import DailyStats from './FrequencyStats';
import FrequencyStats from './FrequencyStats';

export type FrequencyType = 'daily' | 'weekly' | 'monthly';

const STATS_TABS = [
  {
    value: 'daily',
    label: '일간',
  },
  {
    value: 'weekly',
    label: '주간',
  },
  {
    value: 'monthly',
    label: '월간',
  },
];

export default function StatsContainer() {
  return (
    <div>
      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="w-fit mx-auto">
          {STATS_TABS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {STATS_TABS.map((tab) => {
          return (
            <TabsContent key={tab.value} value={tab.value}>
              <FrequencyStats frequency={tab.value as FrequencyType} />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
