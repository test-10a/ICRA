import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const suffix = pathname.replace(/^\/+/, '') || '(root)';

  // This will appear in Vercel Edge logs
  console.log(JSON.stringify({
    event: 'visit',
    path: pathname,
    suffix,
    query: search || '',
    ua: request.headers.get('user-agent') || '',
    ts: new Date().toISOString()
  }));

  return NextResponse.next();
}

// Skip Next assets, files, and API to reduce noise
export const config = {
  matcher: ['/((?!_next|.*\\..*|api).*)'],
};
