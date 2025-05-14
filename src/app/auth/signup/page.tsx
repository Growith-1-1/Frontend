import SignupFormField from '@/components/auth/SignupFormField';
import { Info } from 'lucide-react';
import { Suspense } from 'react';

export default function SignUp() {
  return (
    <section className="flex flex-col gap-6 items-center max-w-md mx-auto">
      <h1 className="text-2xl font-bold">회원가입</h1>
      <Suspense>
        <SignupFormField />
      </Suspense>
      <span className="text-xs text-gray-600 flex items-center gap-1">
        <Info size={16} /> 나중에 마이페이지에서 즐겨찾는 카테고리 변경이
        가능해요!
      </span>
    </section>
  );
}
