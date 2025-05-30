import { generateClampFontSize } from "@/utils/generateClampFontSize";
import { decorativeImagePaths } from "@/constants/bluemoonladysaju/imagePaths";
import { ImagePath } from "@/constants/bluemoonladysaju/webtoonImagesMeta";

export interface DecorativeElementMeta {
  src: ImagePath | string;
  altText?: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;
  zIndex?: number;
  opacity?: number;
  className?: string;
}

export const webtoonDecorativeMeta = {
  SAJU_TABLE_HEADER_CLOUD_A: {
    src: decorativeImagePaths.CLOUD_STYLE_A,
    altText: "",
    width: generateClampFontSize(1, 80),
    height: generateClampFontSize(1, 80),
    top: generateClampFontSize(1, 25),
    left: generateClampFontSize(1, 15),
    zIndex: 0,
  },
  SAJU_TABLE_HEADER_CLOUD_B: {
    src: decorativeImagePaths.CLOUD_STYLE_B,
    altText: "",
    width: generateClampFontSize(1, 80),
    height: generateClampFontSize(1, 80),
    top: generateClampFontSize(1, 10),
    right: generateClampFontSize(1, 15),
    zIndex: 0,
  },
  // ... 다른 장식 요소들
} as const;

export type WebtoonDecorativeKey = keyof typeof webtoonDecorativeMeta;
