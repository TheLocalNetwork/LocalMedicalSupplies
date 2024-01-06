/* eslint-disable no-console */
import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { method, nextUrl } = request;
  const { hostname, pathname, searchParams } = nextUrl;
  const ua = request.headers.get('user-agent');

  const toLog = [method, hostname, pathname, searchParams, ua];

  console.log(toLog.join(`\t`));

  return NextResponse.next();
}
