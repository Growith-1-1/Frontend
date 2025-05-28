import { SignUpRequest } from '@/types/auth';
import { EmptyResponse } from '@/types/common';
import { baseFetch } from './fetchUtils';

export const startKakaoLogin = () => {
  window.location.href = process.env.NEXT_PUBLIC_KAKAO_AUTH_URL!;
};

export const postAuthSignUp = async (
  email: string,
  requestData: SignUpRequest
) => {
  try {
    return await baseFetch<EmptyResponse>(`/auth/signup?email=${email}`, {
      method: 'POST',
      data: {
        nickname: requestData.nickname,
        categories: requestData.categories,
      },
    });
  } catch (error) {
    console.error('회원가입 에러:', error);
    throw error;
  }
};

export const getAuthLogout = async () => {
  try {
    return await baseFetch<EmptyResponse>(`/auth/logout`, {
      method: 'GET',
    });
  } catch (error) {
    console.error('로그아웃 에러:', error);
    throw error;
  }
};

export const postUsersTest = async () => {
  try {
    return await baseFetch<EmptyResponse>(`/users/test`, {
    })
  } catch (err) {
    console.error("테스트 계정 로그인 에러: ", err)
    throw err;

  }
}
