import { imagePaths } from "./imagePaths";
import { ImagePath } from "./webtoonImagesMeta";

interface WebtoonTextMetaItem {
  textTemplate: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;
  className?: string;
  sort?: "left" | "right" | "center";
}

export interface WebtoonTextMeta {
  IMG1_BUBBLE: WebtoonTextMetaItem;
  IMG3_BUBBLE: WebtoonTextMetaItem;
  SAJU_TITLE_1: WebtoonTextMetaItem;
  SAJU_TITLE_2: WebtoonTextMetaItem;
}

export const webtoonTextMeta: WebtoonTextMeta = {
  IMG1_BUBBLE: {
    textTemplate: `이제 본격적으로 \n{{name}}님의 사주팔자를 \n분석해볼 차례네요.`,
    top: "85%",
    left: "16%",
  },
  IMG3_BUBBLE: {
    textTemplate: `제가 {{name}}님의 사주를\n보기 쉽게 표로 정리했어요`,
    top: "13%",
    left: "14%",
  },
  SAJU_TITLE_1: {
    textTemplate: `{{name}}님의 사주`,
    top: "9%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    className: "w-full",
  },
  SAJU_TITLE_2: {
    textTemplate: `{{birthYear}}년 {{birthMonth}}월{{birthDay}}일 {{birthTime}}`,
    top: "14%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    className: "w-full",
  },
};

export const imageTextKeyMap: Partial<Record<ImagePath, WebtoonTextKey>> = {
  [imagePaths.IMG1]: "IMG1_BUBBLE",
  [imagePaths.IMG3]: "IMG3_BUBBLE",
};

export type WebtoonTextKey = keyof typeof webtoonTextMeta;
