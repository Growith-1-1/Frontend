'use client';

import { AddChallengeButton } from '@/components/challenges/AddChallengeButton';
import { AddChallengeModal } from '@/components/challenges/AddChallengeModal';
import InvitedChallenges from '@/components/challenges/InvitedChallenges';
import MyChallenges from '@/components/challenges/MyChallenges';
import NewChallenges from '@/components/challenges/NewChallenges';
import PopularChallenges from '@/components/challenges/PopularChallenges';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

type Tab = '인기 챌린지' | '신규 챌린지' | '초대 챌린지' | '내 챌린지';

export default function ChallengesContainer() {
  const [activeTab, setActiveTab] = useState<Tab>('인기 챌린지');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <nav className="flex">
        {(
          ['인기 챌린지', '신규 챌린지', '초대 챌린지', '내 챌린지'] as Tab[]
        ).map((tab) => (
          <Button
            key={tab}
            variant="tab"
            className={`!rounded-none ${
              activeTab === tab ? 'text-primary border-b-2 border-primary' : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </nav>

      <div className="flex-1 overflow-auto">
        {activeTab === '인기 챌린지' && <PopularChallenges />}
        {activeTab === '신규 챌린지' && <NewChallenges />}
        {activeTab === '초대 챌린지' && <InvitedChallenges />}
        {activeTab === '내 챌린지' && <MyChallenges />}
      </div>

      <AddChallengeButton onClick={() => setIsModalOpen(true)} />

      <AddChallengeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
