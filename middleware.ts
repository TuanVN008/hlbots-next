import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, isLocale } from '@/lib/locales';


export function middleware(req: NextRequest) {
const { pathname } = req.nextUrl;
// Skip next internal paths and files
if (pathname.startsWith('/_next') || pathname.includes('.')) return;


const segments = pathname.split('/').filter(Boolean);
const maybeLocale = segments[0];
if (!isLocale(maybeLocale)) {
const url = req.nextUrl.clone();
url.pathname = `/${defaultLocale}${pathname}`;
return NextResponse.redirect(url);
}
return NextResponse.next();
}


export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] };