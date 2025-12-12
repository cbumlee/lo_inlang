import { setLanguageTag, type AvailableLanguageTag } from "@/paraglide/runtime"
import { sourceLanguageTag, availableLanguageTags } from "@/paraglide/runtime"

export function getLanguageFromPath(pathname: string): AvailableLanguageTag {
	const segments = pathname.split("/").filter(Boolean)
	const firstSegment = segments[0]
	
	if (availableLanguageTags.includes(firstSegment as AvailableLanguageTag)) {
		return firstSegment as AvailableLanguageTag
	}
	
	return sourceLanguageTag
}

export function getLocalizedPath(pathname: string, lang: AvailableLanguageTag): string {
	const segments = pathname.split("/").filter(Boolean)
	
	// 이미 언어 태그가 있는 경우 제거
	if (availableLanguageTags.includes(segments[0] as AvailableLanguageTag)) {
		segments.shift()
	}
	
	// 소스 언어인 경우 prefix 없음
	if (lang === sourceLanguageTag) {
		return "/" + segments.join("/")
	}
	
	return "/" + lang + "/" + segments.join("/")
}

export function middleware(request: { nextUrl: { pathname: string } }) {
	const lang = getLanguageFromPath(request.nextUrl.pathname)
	setLanguageTag(lang)
}
