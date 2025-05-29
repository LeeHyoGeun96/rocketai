// constants/themes/index.ts
import React from "react"; // React.CSSProperties 사용을 위해
import { cheongwolTheme } from "./cheongwol";
// import { starlightTheme } from './starlight'; // 만약 다른 테마가 있다면 import

// 모든 테마 객체가 구현해야 할 공통 인터페이스
export interface ThemeDefinition {
  // --- SaJuTable Styles ---
  getHeaderCellStyle: (
    index: number,
    totalHeaders: number
  ) => React.CSSProperties;
  getRowCellStyle: (index: number) => React.CSSProperties;
  getRowTitleCellStyle: (index: number) => React.CSSProperties;
  getRowDataCellStyle: (
    index: number,
    totalDataCells?: number
  ) => React.CSSProperties;
  getElementCellStyle: (elementLabel: string) => React.CSSProperties;
  getSaJuTableBackGroundStyle: () => React.CSSProperties;
  getInnerBoxStyle1: () => React.CSSProperties;
  getInnerBoxStyle2: () => React.CSSProperties;

  // --- Spinner Asset ---
  getSpinnerAsset: () => {
    src: string;
    alt: string;
    width: number;
    height: number;
  };

  // --- 예시: 일반적인 테마 색상 (선택적) ---
  // getPrimaryColor?: () => string;
  // getSecondaryColor?: () => string;

  // --- 예시: 버튼 스타일 (선택적) ---
  // getButtonVariantStyle?: (variant: 'primary' | 'secondary') => React.CSSProperties;

  // 여기에 다른 컴포넌트나 기능에 대한 테마별 함수/속성 시그니처를 추가할 수 있습니다.
}

// 사용 가능한 모든 테마를 매핑하는 객체
export const themes: Record<string, ThemeDefinition> = {
  청월: cheongwolTheme,
  // 별빛: starlightTheme, // 다른 테마가 있다면 여기에 추가
  // 다른 테마들도 여기에 추가...
};

// 기본으로 사용될 테마의 이름
export const DEFAULT_THEME_NAME = "청월";
