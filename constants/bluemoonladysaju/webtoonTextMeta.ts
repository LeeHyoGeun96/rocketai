import { imagePaths } from "./imagePaths"; // imagePaths.ts 파일이 동일 경로에 있다고 가정
import { ImagePath } from "./webtoonImagesMeta"; // webtoonImagesMeta.ts 파일이 동일 경로에 있다고 가정

interface WebtoonTextMetaItem {
  textTemplate: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  transform?: string;
  className?: string;
  sort?: "left" | "right" | "center";
  containerWidth?: string;
  containerHeight?: string;
  containerTop?: string;
  containerLeft?: string;
  containerBottom?: string;
  containerRight?: string;
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
    containerBottom: "6%",
    containerLeft: "0%",
    containerWidth: "70%",
    sort: "center",
  },
  IMG3_BUBBLE: {
    textTemplate: `제가 {{name}}님의 사주를\n보기 쉽게 표로 정리했어요`,
    containerTop: "12%",
    containerLeft: "4%",
    containerWidth: "70%",
    sort: "center",
  },
  SAJU_TITLE_1: {
    textTemplate: `{{name}}님의 사주`,
    top: "9%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    className: "w-full",
    sort: "center",
  },
  SAJU_TITLE_2: {
    textTemplate: `{{birthYear}}년 {{birthMonth}}월{{birthDay}}일 {{birthTime}}`,
    top: "14%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    className: "w-full",
    sort: "center",
  },
};

export type WebtoonTextKey = keyof typeof webtoonTextMeta;

// imageTextKeyMap은 이 파일에 직접 imagePaths를 import 한다면 그대로 사용 가능
// 만약 imagePaths가 다른 곳에서 온다면 해당 경로로 수정 필요
export const imageTextKeyMap: Partial<Record<ImagePath, WebtoonTextKey>> = {
  [imagePaths.IMG1]: "IMG1_BUBBLE",
  [imagePaths.IMG3]: "IMG3_BUBBLE",
};
