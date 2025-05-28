import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint"; // typescript-eslint 플러그인 직접 import

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // next/typescript를 next/core-web-vitals가 포함하거나, 별도 설정 필요
  // 만약 next/core-web-vitals가 TypeScript 설정을 충분히 포함하지 않는다면,
  // typescript-eslint 설정을 직접 추가할 수 있습니다.
  // 예: ...tseslint.configs.recommended,

  // 여기에 커스텀 규칙 설정 추가
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin, // 플러그인 등록
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // 또는 'error'
        {
          argsIgnorePattern: "^_", // 밑줄로 시작하는 인수는 무시
          varsIgnorePattern: "^_", // 밑줄로 시작하는 변수도 무시
          // caughtErrorsIgnorePattern: '^_', // (선택적) 잡힌 에러 변수도 무시
        },
      ],
      // 다른 필요한 커스텀 규칙들...
    },
    // 특정 파일에만 이 규칙을 적용하고 싶다면 files 속성 사용
    // files: ["**/*.ts", "**/*.tsx"],
  },
];

// 만약 Next.js의 기본 TypeScript 설정을 명시적으로 포함하고 싶다면,
// Next.js 문서에서 권장하는 플랫 설정 방식을 따르는 것이 좋습니다.
// 예: eslint-config-next 패키지를 FlatCompat으로 변환하거나,
// Next.js가 플랫 설정을 직접 지원하는 경우 해당 설정을 따릅니다.

export default eslintConfig;
