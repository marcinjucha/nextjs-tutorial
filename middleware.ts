import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse } from 'next/server';

export default NextAuth(authConfig).auth;

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   console.log('log: request', request);
//   return NextResponse.next({ request });
// }

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
