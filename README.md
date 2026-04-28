# claude-routines-sandbox

Claude Code Routines 실습용 sandbox repository입니다.

## 구조

- `src/server.js` — Express 서버 (의도적인 코드 이슈 포함)
- `test/server.test.js` — 단위 테스트
- `.github/workflows/ci.yml` — CI 파이프라인
- `package.json` — 의도적으로 outdated 된 의존성

## 실습 시나리오

1. Nightly PR Triage Routine
2. CI 실패 분석 + 자동 fix PR
3. 주간 의존성 감사 + 우선순위별 PR
