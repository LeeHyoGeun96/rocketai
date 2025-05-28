import { MAX_WIDTH } from "@/constants/layout";

/**
 * px 기준 값을 받아서 clamp() 형태의 cqi 단위 font-size 반환
 * @param minPx 최소 폰트 px
 * @param maxPx 최대 폰트 px
 * @param baseContainerWidth 기준 컨테이너 px (예: 320~768 사이 기준이면 768)
 */
export function generateClampFontSize(
  minPx: number,
  maxPx: number,
  baseContainerWidth = MAX_WIDTH
) {
  const minRem = minPx / 16;
  const maxRem = maxPx / 16;
  const midCqi = (maxPx / baseContainerWidth) * 100;

  return `clamp(${minRem}rem, ${midCqi}cqi, ${maxRem}rem)`;
}
