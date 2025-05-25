export const imagePaths = {
  IMG1: "/resultPage/bluemoonladysaju/1.png",
  IMG2: "/resultPage/bluemoonladysaju/2.png",
  IMG3: "/resultPage/bluemoonladysaju/3.png",
} as const;

export type ImagePath = (typeof imagePaths)[keyof typeof imagePaths];

export const webtoonImagesMeta: Record<
  ImagePath,
  {
    width: number;
    height: number;
    bubble?: {
      text: (name: string) => string;
      top?: string;
      left?: string;
      right?: string;
      bottom?: string;
    };
  }
> = {
  [imagePaths.IMG1]: {
    width: 375,
    height: 774,
    bubble: {
      text: (name) =>
        `이제 본격적으로 \n${name}님의 사주팔자를 \n분석해볼 차례네요.`,
      top: "85%",
      left: "16%",
    },
  },
  [imagePaths.IMG2]: {
    width: 351,
    height: 285,
  },
  [imagePaths.IMG3]: {
    width: 375,
    height: 403,
    bubble: {
      text: (name) => `제가 ${name}님의 사주를\n보기 쉽게 표로 정리했어요`,
      top: "13%",
      left: "14%",
    },
  },
};
