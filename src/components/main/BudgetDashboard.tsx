import React from 'react';
import { Header } from './Header';
import { BudgetStatus } from './BudgetStatus';
import { TransactionList } from './TransactionList';
import { ChallengeList } from './List';
import BottomNavigation from './BottomNavigation';

export const BudgetDashboard: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-16">
      <Header />
      <BudgetStatus 
        totalBudget={1000000}
        usedBudget={700000}
        month="4월"
      />
      <TransactionList />
      <ChallengeList />
      <BottomNavigation activeTab={'home'} />
    </div>
  );
};