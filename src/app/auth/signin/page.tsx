'use client';

import { postUsersTest, startKakaoLogin } from '@/api/authApi';
import { Button } from '@/components/ui/button';
import { CircleAlert } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const router = useRouter()
  const [error, setError] = useState<string|null>(null)

  const handleKakaoLoginClick = () => {
    startKakaoLogin();
  };

  const signinWithTestAccount = async () => {
    try{
      await postUsersTest()
      router.push('/main')
    } catch (err) {
      setError("테스트 계정 로그인 중 오류가 발생하였습니다")
      return;
    }
  }

  return (
    <section className="flex flex-col gap-6 items-center justify-center max-w-md mx-auto">
      <h1 className="text-2xl font-bold">로그인</h1>
      <span className="text-center body2 text-gray-600">
        서비스를 테스트하시고 싶으신가요?<br />
        아래의 버튼을 누르면 회원가입 없이<br />
        테스트 계정으로 로그인됩니다
      </span>
      <div className="flex flex-col gap-1 items-center w-full">
        <Button variant="primary" onClick={signinWithTestAccount}>
          테스트 계정으로 로그인
        </Button>
        {error && <span className="text-warning body3 flex gap-1 items-center"><CircleAlert size={14} />{error}</span>}
      </div>

      <span className="text-center body2 text-gray-600">
        더함에 가입하고 친구들과 함께
        <br />
        절약 챌린지를 시작하세요!
      </span>
      <Button variant="login" onClick={handleKakaoLoginClick}>
        카카오로 시작하기
      </Button>
      <span className="text-center body2 text-gray-600">또는</span>
      <Button variant="login" onClick={handleKakaoLoginClick}>
        카카오로 로그인
      </Button>
    </section>
  );
}
