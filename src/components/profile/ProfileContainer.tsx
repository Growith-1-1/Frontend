'use client';

import { getAuthLogout } from '@/api/authApi';
import AccountInfo from '@/components/profile/AccountInfo';
import AccountSettings from '@/components/profile/AccountSettings';
import AchievementsWrapper from '@/components/profile/AchievementsWrapper';
import StatisticsWrapper from '@/components/profile/StatisticsWrapper';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const PROFILE_TABS = [
  {
    value: 'account',
    label: '계정 정보',
    title: '계정 정보',
    description: '계정에 대한 정보',
  },
  {
    value: 'achievements',
    label: '업적',
    title: '나의 업적',
    description: '지금까지 획득한 업적 목록이에요',
  },
  {
    value: 'statistics',
    label: '통계',
    title: '챌린지 통계',
    description: '지금까지 참여한 챌린지 통계예요',
  },
  {
    value: 'settings',
    label: '관리',
    title: '계정 관리',
    description: '',
  },
];

const SETTINGS_TABS = [
  {
    value: 'main',
    label: '계정 관리',
    description: '',
  },
  {
    value: 'categories',
    label: '카테고리 관리',
    description: '선택하신 7개의 카테고리는 지출 등록 시 상위에 나타나요',
  },
  {
    value: 'account-connect',
    label: '계좌 연동',
    description: '소비내역을 연동할 계좌 정보를 입력해주세요',
  },
];

export default function ProfileContainer() {
  const [settingsView, setSettingsView] = useState<
    'main' | 'categories' | 'account-connect'
  >('main');

  const HandleLogout = async () => {
    try {
      await getAuthLogout();
      window.location.href = '/auth/signin';
    } catch (error) {
      console.error('로그아웃 처리 중 오류가 발생했습니다.', error);
    }
  };

  const resetSettingsView = () => {
    setSettingsView('main');
  };

  const handleTabChange = (value: string) => {
    if (value !== 'settings') {
      resetSettingsView();
    }
  };

  return (
    <Tabs
      defaultValue="account"
      className="w-full"
      onValueChange={handleTabChange}
    >
      <TabsList className="w-fit ">
        {PROFILE_TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {PROFILE_TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <section className="rounded-lg shadow-sm bg-white py-6 px-3 flex flex-col gap-3">
            <div
              className={`${
                tab.value === 'account' ? 'hidden' : 'block'
              } flex flex-col gap-3`}
            >
              <h1 className="title1">
                {settingsView === 'categories'
                  ? SETTINGS_TABS[1].label
                  : settingsView === 'account-connect'
                    ? SETTINGS_TABS[2].label
                    : tab.title}
              </h1>
              <p className="body1 text-gray-500">
                {settingsView === 'categories'
                  ? SETTINGS_TABS[1].description
                  : settingsView === 'account-connect'
                    ? SETTINGS_TABS[2].description
                    : tab.description}
              </p>
            </div>
            {tab.value === 'settings' ? (
              <AccountSettings
                settingsView={settingsView}
                setSettingsView={setSettingsView}
              />
            ) : (
              <TabContent tabValue={tab.value} />
            )}
          </section>
          {tab.value === 'account' && (
            <section className="rounded-lg shadow-sm bg-white py-6 px-3 flex flex-col gap-6 mt-3">
              <h1 className="title1">계정 관리</h1>
              <Button onClick={HandleLogout}>로그아웃</Button>
              <Button variant="warning">탈퇴하기</Button>
            </section>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}

function TabContent({ tabValue }: { tabValue: string }) {
  switch (tabValue) {
    case 'account':
      return <AccountInfo />;
    case 'achievements':
      return <AchievementsWrapper />;
    case 'statistics':
      return <StatisticsWrapper />;
    default:
      return null;
  }
}
