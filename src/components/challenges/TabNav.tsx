import { useState } from 'react';
import PopularChallenges from './PopularChallenges';
import NewChallenges from './NewChallenges';
import InvitedChallenges from './InvitedChallenges';
import MyChallenges from './MyChallenges';

type Tab = '인기 챌린지' | '신규 챌린지' | '초대 챌린지' | '내 챌린지';

export default function ChallengeLayout() {
  const [activeTab, setActiveTab] = useState<Tab>('인기 챌린지');

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <header className="flex items-center p-4 border-b">
        <button className="mr-auto">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-xl font-medium text-center flex-1">챌린지</h1>
        <div className="w-6"></div> {/* Spacer to center the title */}
      </header>

      <nav className="flex border-b">
        {(
          ['인기 챌린지', '신규 챌린지', '초대 챌린지', '내 챌린지'] as Tab[]
        ).map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 text-sm ${
              activeTab === tab
                ? 'text-green-500 border-b-2 border-green-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="flex-1 overflow-auto">
        {activeTab === '인기 챌린지' && <PopularChallenges />}
        {activeTab === '신규 챌린지' && <NewChallenges />}
        {activeTab === '초대 챌린지' && <InvitedChallenges />}
        {activeTab === '내 챌린지' && <MyChallenges />}
      </div>

      <button className="absolute bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
}
