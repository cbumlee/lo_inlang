# Inlang 설정 가이드

## 개요

이 프로젝트는 **inlang paraglide-js**를 사용하여 다국어 지원을 구현

### 지원 언어
- en: 영어
- ko: 한국어

## 사용 방법

### 메시지 추가하기

```json
// messages/en.json
{
  "$schema": "https://inlang.com/schema/inlang-message-format",
  "channel_save": "Save"
}

// messages/ko.json
{
  "$schema": "https://inlang.com/schema/inlang-message-format",
  "channel_save": "저장"
}

```

### 메시지 컴파일

```bash
npm run paraglide
```

### 코드에서 사용하기

```tsx
import * as m from "@/paraglide/messages"

export default function Home() {
  return (
    <button>
      {m.btn_save()} 
    </button>
  )
}
```

## 웹 에디터 사용하기

Inlang Cloud 웹 에디터를 사용하여 번역을 관리합니다.

1. [https://inlang.com/editor](https://inlang.com/editor) 방문

2. Git 저장소 URL 입력 (GitHub, GitLab 등)

3. 저장소 연결 및 권한 부여

4. 브라우저에서 번역 키 추가/수정
5. 변경사항이 자동으로 Git에 커밋됨
6. 로컬에서 `git pull` 후 `npm run paraglide` 실행

## 개발 워크플로우

1. **번역가/디자이너**: 웹 에디터에서 번역 파일 수정
2. **Git**: 변경사항이 커밋/푸시됨
3. **개발자**: `git pull` 후 `npm run paraglide` 실행
4. **자동 반영**: 코드에서 타입 안전하게 사용 가능

## 설정 파일

- `project.inlang/settings.json`: inlang 프로젝트 설정
- `messages/*.json`: 각 언어별 번역 파일
- `src/paraglide/`: 컴파일된 메시지 파일 (자동 생성)

## 주의사항

- `src/paraglide/` 폴더는 자동 생성되므로 수동으로 편집X
- 번역 키는 camelCase를 권장
- 모든 언어 파일에 동일한 키를 추가
