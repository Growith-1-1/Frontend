import axiosInstance from '@/api/axiosInstance';
import { baseFetch } from '@/api/fetchUtils';
import { useSSE } from '@/hooks/useSse';
import { useEffect } from 'react';

const SseProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isConnected } = useSSE('/sse/subscribe', 'test', {
    withCredentials: true,
  });

  useEffect(() => {
    // for test
    let interval = null;
    if (isConnected) {
      interval = setInterval(() => {
        console.log('interval');
        baseFetch('/sse/send');
      }, 500000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isConnected]);

  return children;
};

export default SseProvider;
