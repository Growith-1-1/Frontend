import { useEffect, useState } from 'react';
import {
  EventListener,
  EventSource,
  EventSourcePolyfill,
} from 'event-source-polyfill';

interface UseSSEResult<T> {
  data: T | null;
  error: Event | string | null;
  isConnected: boolean;
}

/**
 * Server-Sent Events (SSE) 연결을 관리하는 커스텀 훅
 * @template T - SSE를 통해 받을 데이터의 타입
 * @param url SSE 엔드포인트 URL
 * @param eventName SSE eventName
 * @param options EventSourcePolyfill 생성자 옵션 (예: headers, withCredentials, heartbeatTimeout)
 * @returns SSE 데이터 (파싱된 타입), 에러 상태, 연결 상태
 */
export function useSSE<T>(
  url: string,
  eventName?: string,
  options?: EventSourceInit & {
    headers?: Record<string, string>;
    heartbeatTimeout?: number;
  }
): UseSSEResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Event | string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!url || isConnected) return;

    const eventSource = new EventSourcePolyfill(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      {
        ...options,
      }
    );

    eventSource.onopen = () => {
      console.log('SSE connection opened successfully.');
      setIsConnected(true);
      setError(null);
    };

    eventSource.addEventListener('null', ((event: MessageEvent) => {
      const eventData = event.data;
      if (
        eventData &&
        typeof eventData === 'string' &&
        eventData.startsWith('EventStream created')
      ) {
        setData({ connectionInfo: eventData } as unknown as T);
        return;
      }
    }) as EventListener);

    eventSource.addEventListener('ACHIEVEMENT', ((event: MessageEvent) => {
      const eventData = event.data;

      try {
        setData(JSON.parse(eventData));
        setError(null);
      } catch (parseError) {
        console.error('SSE Data Parsing Error:', parseError);
        setError(
          parseError instanceof Error ? parseError.message : String(parseError)
        );
        setData(null);
      }
    }) as EventListener);

    eventSource.addEventListener('TIP', ((event: MessageEvent) => {
      const eventData = event.data;

      try {
        setData(JSON.parse(eventData));
        setError(null);
      } catch (parseError) {
        console.error('SSE Data Parsing Error:', parseError);
        setError(
          parseError instanceof Error ? parseError.message : String(parseError)
        );
        setData(null);
      }
    }) as EventListener);

    eventSource.onerror = ((err: Event) => {
      console.error('SSE Connection/Network Error:', err);
      setError(new Error('SSE connection error') as any);
      setIsConnected(false);
      eventSource.close();
    }) as EventListener;

    return () => {
      console.log('Closing SSE connection.');
      eventSource.close();
      setIsConnected(false);
    };
  }, [url]);

  return { data, error, isConnected };
}
