# WriteFlow Landing Page

AI 글쓰기 SaaS **WriteFlow**의 랜딩 페이지입니다. Next.js 16 App Router와 Tailwind CSS v4로 구현했습니다.

**GitHub 저장소:** https://github.com/hsh92/sass-landing

---

## 기술 스택

| 항목 | 버전 |
|------|------|
| Next.js | 16.2.9 |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| 폰트 | Plus Jakarta Sans, Inter |
| 아이콘 | Material Symbols Outlined |

---

## 프로젝트 구조

```
sass-landing/
├── app/
│   ├── layout.tsx          # 루트 레이아웃, 폰트, 메타데이터
│   ├── page.tsx            # 홈페이지 (섹션 조합)
│   └── globals.css         # 디자인 토큰, 유틸 클래스
├── components/landing/     # 랜딩 페이지 섹션 컴포넌트
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx         # Client — 가격 토글
│   ├── Faq.tsx             # Client — 아코디언
│   ├── CtaSection.tsx
│   ├── Footer.tsx
│   └── MaterialIcon.tsx
├── lib/
│   └── landing-data.ts     # 콘텐츠 상수 (기능, 가격, FAQ 등)
├── design/                 # 디자인 참고 자료
│   ├── DESIGN.md           # Luminous Clarity 디자인 시스템
│   ├── code.html           # HTML 프로토타입
│   └── screen.png
└── prompt/                 # 요구사항 문서
```

---

## 로컬 개발 환경 설정

### 1. 사전 요구사항

- [Node.js](https://nodejs.org/) 20 이상
- [Git](https://git-scm.com/)
- (선택) [GitHub CLI](https://cli.github.com/) — `gh` 명령어 사용 시

### 2. 저장소 클론 및 실행

```bash
# 저장소 클론
git clone https://github.com/hsh92/sass-landing.git
cd sass-landing

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:3000 을 열어 확인합니다.

### 3. 주요 스크립트

```bash
npm run dev      # 개발 서버 (핫 리로드)
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint 검사
```

---

## Git / GitHub 설정

### 최초 설정 (처음 한 번)

```bash
# Git 사용자 정보 설정 (전역, 아직 설정하지 않은 경우)
git config --global user.name "본인이름"
git config --global user.email "본인@email.com"

# GitHub CLI 로그인 (gh 사용 시)
gh auth login
```

### 원격 저장소 연결 (이미 clone한 경우는 생략)

```bash
# 원격 저장소 확인
git remote -v

# 원격이 없을 때 추가
git remote add origin https://github.com/hsh92/sass-landing.git
```

---

## GitHub에 올리는 방법

### 기본 워크플로우 (master 브랜치에 직접 반영)

```bash
# 1. 변경 사항 확인
git status
git diff

# 2. 변경 파일 스테이징
git add .

# 3. 커밋 (메시지는 변경 이유를 간결히)
git commit -m "feat: 히어로 섹션 문구 수정"

# 4. GitHub에 푸시
git push origin master
```

### GitHub CLI로 저장소 생성 (최초 1회, 이미 생성된 경우 생략)

```bash
gh repo create sass-landing --source=. --remote=origin --public --push
```

---

## 브랜치 추가 및 병합

기능 개발이나 실험은 **별도 브랜치**에서 진행하고, 완료 후 `master`에 병합하는 것을 권장합니다.

### 브랜치 생성 및 작업

```bash
# master 최신 상태로 동기화
git checkout master
git pull origin master

# 새 브랜치 생성 및 이동
git checkout -b feature/pricing-update

# 작업 후 커밋
git add .
git commit -m "feat: 가격 플랜 문구 업데이트"

# 원격에 브랜치 푸시
git push -u origin feature/pricing-update
```

### Pull Request로 병합 (권장)

```bash
# PR 생성
gh pr create --title "가격 플랜 문구 업데이트" --body "## Summary
- Pro 플랜 설명 문구 수정
- README 변경 이력 추가

## Test plan
- [ ] 로컬 빌드 확인
- [ ] 가격 섹션 UI 확인"

# PR 병합 (squash 또는 merge)
gh pr merge --merge
```

### 로컬에서 직접 병합

```bash
git checkout master
git pull origin master
git merge feature/pricing-update
git push origin master

# 병합 완료 후 브랜치 삭제 (선택)
git branch -d feature/pricing-update
git push origin --delete feature/pricing-update
```

### 브랜치 네이밍 규칙 (권장)

| 접두사 | 용도 | 예시 |
|--------|------|------|
| `feature/` | 새 기능 | `feature/faq-accordion` |
| `fix/` | 버그 수정 | `fix/mobile-nav` |
| `docs/` | 문서만 변경 | `docs/readme-update` |
| `refactor/` | 리팩터링 | `refactor/landing-components` |

---

## 커밋 메시지 규칙 (권장)

```
<type>: <한 줄 요약>

예시:
feat: WriteFlow 랜딩 페이지 초기 구현
fix: 모바일 가격 카드 레이아웃 수정
docs: README GitHub 워크플로우 추가
refactor: landing-data 상수 분리
```

| type | 설명 |
|------|------|
| `feat` | 새 기능 |
| `fix` | 버그 수정 |
| `docs` | 문서 변경 |
| `style` | 코드 포맷, 스타일 (동작 변경 없음) |
| `refactor` | 리팩터링 |
| `chore` | 빌드, 설정 등 기타 |

---

## 소스 수정 시 워크플로우

소스 코드를 수정할 때는 아래 순서를 따릅니다.

1. **코드 수정** — 기능/버그/스타일 반영
2. **README 변경 이력 업데이트** — 아래 `변경 이력` 섹션에 최신 내용 추가 (충돌 시 최신 내용 기준)
3. **빌드 확인** — `npm run build`
4. **커밋 & 푸시** — `git add .` → `git commit` → `git push origin master` (또는 feature 브랜치 → PR)

> README와 실제 코드가 다를 경우 **항상 최신 코드/작업 내용을 기준**으로 README를 갱신합니다.

---

## 변경 이력

### 2026-06-12 — README GitHub 워크플로우 문서화

- README를 프로젝트 전용 문서로 전면 개편
- 로컬 설정, GitHub 푸시, 브랜치 생성·병합, 커밋 규칙, 변경 이력 섹션 추가
- 소스 수정 시 README 갱신 후 GitHub 반영 워크플로우 정의

### 2026-06-12 — WriteFlow 랜딩 페이지 초기 구현

- `design/code.html`, `design/DESIGN.md` 기반으로 Next.js 16 랜딩 페이지 구현
- 브랜드명: **WriteFlow**
- 섹션: Header, Hero, Features, Pricing, FAQ, CTA, Footer
- 인터랙션: 가격 Monthly/Yearly 토글, FAQ 아코디언
- 디자인 토큰: `app/globals.css` (`@theme inline`)
- 폰트: Plus Jakarta Sans + Inter
- 데이터: `lib/landing-data.ts`
- GitHub 저장소 생성 및 최초 푸시 (`hsh92/sass-landing`)

---

## 디자인 참고

- 디자인 시스템: [`design/DESIGN.md`](design/DESIGN.md) — Luminous Clarity
- HTML 프로토타입: [`design/code.html`](design/code.html)
- 요구사항: [`prompt/프롬프트등_기타문서.txt`](prompt/프롬프트등_기타문서.txt)

---

## 배포

Vercel, Netlify 등 Next.js를 지원하는 플랫폼에 배포할 수 있습니다.

```bash
npm run build
npm run start
```

[Vercel 배포 가이드](https://nextjs.org/docs/app/building-your-application/deploying)
