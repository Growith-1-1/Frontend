import { SseSendResponse, SseSubscribeResponse } from '@/types/sse';
import { baseFetch } from './fetchUtils';

// SSE 테스트 경로
export async function getSse(): Promise<SseSendResponse> {
  return await baseFetch('/sse/send');
}

// SSE 구독 경로
export async function subscribeSse(): Promise<SseSubscribeResponse> {
  return await baseFetch('/sse/subscribe');
}
