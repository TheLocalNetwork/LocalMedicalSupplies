/* eslint-disable no-console */
import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname, searchParams } = nextUrl;
  const ua = request.headers.get('user-agent');

  console.log([pathname, searchParams, ua].join(`\t`));

  return NextResponse.next();
}
