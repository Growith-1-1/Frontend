import axiosInstance from '@/api/axiosInstance';
import { baseFetch } from '@/api/fetchUtils';
import { useSSE } from '@/hooks/useSse';
import { useEffect } from 'react';

const SseProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isConnected } = useSSE('/sse/subscribe', 'test', {
    withCredentials: true,
  });

  return children;
};

export default SseProvider;
