import { imagePaths } from "./imagePaths";

export type ImagePath = (typeof imagePaths)[keyof typeof imagePaths];

export const webtoonImagesMeta: Record<
  ImagePath,
  { width: number; height: number }
> = {
  [imagePaths.IMG1]: {
    width: 375,
    height: 774,
  },
  [imagePaths.IMG2]: {
    width: 351,
    height: 285,
  },
  [imagePaths.IMG3]: {
    width: 375,
    height: 403,
  },
};
