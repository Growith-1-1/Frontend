import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isProduction = process.env.NODE_ENV === 'production';

  const url = request.nextUrl.clone();

  // 쿠키에서 리다이렉트 플래그 확인 (백엔드에서 리다이렉트 후 설정할 수 있는 쿠키)
  const redirected = request.cookies.get('backend_redirected');
  console.log('redirected', redirected);

  // 요청 헤더의 레퍼러 확인
  const referer = request.headers.get('referer');
  console.log('referer', referer);

  const hasLocalhost = url.href.includes('localhost:3000');

  if (isProduction && hasLocalhost) {
    return NextResponse.redirect('https://the-ham-phi.vercel.app/main');
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
