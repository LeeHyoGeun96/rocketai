import { generateClampFontSize } from "@/utils/generateClampFontSize";

export const MAX_WIDTH = 448;

export const FONT_HEADER_STYLE = { fontSize: generateClampFontSize(1, 28) }; // 기존 text-2xl 대체
export const FONT_TITLE_HANJA_STYLE = {
  fontSize: generateClampFontSize(1, 16),
}; // 행 제목 한자
export const FONT_TITLE_HANGLE_STYLE = {
  fontSize: generateClampFontSize(1, 12),
}; // 행 제목 한글 (기존 text-xs)
export const FONT_CELL_MAIN_LABEL_STYLE = {
  fontSize: generateClampFontSize(1, 16),
}; // 셀 메인 라벨 (한자 등)
export const FONT_CELL_SUB_LABEL_STYLE = {
  fontSize: generateClampFontSize(1, 12),
}; // 셀 서브 라벨 (한글, 기존 text-xs)
export const FONT_CELL_KOREAN_LABEL_STYLE = {
  fontSize: generateClampFontSize(1, 12),
}; // 셀 한글 간단 표기 (기존 text-xs)
export const FONT_CELL_ELEMENT_STYLE = {
  fontSize: generateClampFontSize(1, 14),
}; // 오행 표시

// 패딩 (셀 내부 여백) - generateClampFontSize 함수를 패딩 값 생성에도 활용
export const CELL_PADDING_STYLE = {
  padding: `${generateClampFontSize(1, 8)} ${generateClampFontSize(1, 10)}`,
}; // 상하, 좌우
export const HEADER_CELL_PADDING_STYLE = {
  padding: `${generateClampFontSize(1, 12)} ${generateClampFontSize(1, 14)}`,
};
