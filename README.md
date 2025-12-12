# inlang 기반 다국어 지원 테스트

## 개요
inlang paraglide-js를 사용하여 다국어 지원을 구현한 프로젝트

### 지원 언어
- en: 영어
- ko: 한국어

## 사용 방법

### 메시지 추가하기

#### 1. 메시지 파일에 키 추가

```json
// messages/en.json
{
  "$schema": "https://inlang.com/schema/inlang-message-format",
  "channel_save": "Save"
}

// messages/ko.json
{
  "$schema": "https://inlang.com/schema/inlang-message-format",
  "channel_save": "파일저장"
}
```

#### 2. 메시지 컴파일

```bash
npm run paraglide
```

#### 3. 코드에서 사용

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

### 웹 에디터로 메시지 관리하기

#### 최초 설정

1. [https://inlang.com/editor](https://inlang.com/editor) 방문
2. Git 저장소 URL 입력 (GitHub, GitLab 등)
3. 저장소 연결 및 권한 부여

#### 사용 워크플로우

1. [https://fink.inlang.com/github.com/cbumlee/lo_inlang?project=%2Fproject.inlang&lang=ko](https://fink.inlang.com/github.com/cbumlee/lo_inlang?project=%2Fproject.inlang&lang=ko) 접속
2. 브라우저에서 번역 키 추가/수정 후 저장
3. 변경사항이 자동으로 Git에 커밋됨
4. 로컬에서 `git pull origin main` 후 `npm run paraglide` 실행

## 설정 파일

- `project.inlang/settings.json`: inlang 프로젝트 설정
- `messages/*.json`: 각 언어별 번역 파일
- `src/paraglide/`: 컴파일된 메시지 파일 (자동 생성)

## 주의사항

- `src/paraglide/` 폴더는 자동 생성되므로 수동으로 편집X
- 모든 언어 파일에 동일한 키를 추가