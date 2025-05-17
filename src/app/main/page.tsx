'use client';

import { BudgetDashboard } from '@/components/main/BudgetDashboard';
import { useFcmToken } from '@/hooks/useFcmController';
import { messaging } from '@/lib/firebase/settingFCM'; // ✅ firebase 설정에서 import
import { getToken } from 'firebase/messaging'; // ✅ firebase-messaging에서 import
import type { NextPage } from 'next';
import { env } from 'process';
import { useEffect } from 'react';

const vapidKey = process.env.NEXT_PUBLIC_VAPIDKEY; // NEXT_PUBLIC_ 접두사 추가

const Home: NextPage = () => {
  const { mutate: createFcmToken } = useFcmToken();

  useEffect(() => {
    const isProduction =
      process.env.NEXT_PUBLIC_NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'production';
    console.log('isProduction', isProduction);

    if (isProduction && typeof window !== 'undefined') {
      const isLocalhost = window.location.href.includes('localhost');
      if (isLocalhost) {
        window.location.href = 'https://the-ham-phi.vercel.app/main';
      }
    }

    handleAllowNotification();
  }, []);

  async function handleAllowNotification() {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      registerServiceWorker();
      await getDeviceToken();
    } else {
      console.error('알림 권한 거부:', permission);
    }
  }

  async function getDeviceToken() {
    try {
      if (!messaging) {
        console.error('Messaging 객체가 null입니다.');
        return;
      }
      const currentToken = await getToken(messaging, { vapidKey });
      if (currentToken) {
        try {
          createFcmToken(currentToken); // 서버에 FCM 토큰 전송
          console.log('FCM 토큰 전송 완료');
        } catch (error) {
          console.error('FCM 토큰 전송 실패');
        }
      } else {
        console.error('토큰을 가져오지 못했습니다.');
      }
    } catch (err) {
      console.error('토큰 요청 오류:', err);
    }
  }

  function registerServiceWorker() {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then(() => {})
      .catch((error) => {
        console.error('Service Worker 등록 실패:', error);
      });
  }

  return <BudgetDashboard />;
};

export default Home;
