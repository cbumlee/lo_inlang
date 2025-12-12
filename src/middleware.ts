import { getLanguageFromPath } from "@/lib/i18n"
import { setLanguageTag } from "@/paraglide/runtime"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
	// 언어 태그 설정
	const lang = getLanguageFromPath(request.nextUrl.pathname)
	setLanguageTag(lang)
	
	return NextResponse.next()
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
}
