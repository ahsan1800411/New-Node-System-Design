// # one way to apply middleware t
// import type { NextRequest } from 'next/server';
// import { NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url));
// }

// # another way to apply middleware> using the below way if we don't login if will redirect to login page

export { default } from 'next-auth/middleware';

// below code will use for applying middleware to specific routes
export const config = {
  matcher: '/users',
};
