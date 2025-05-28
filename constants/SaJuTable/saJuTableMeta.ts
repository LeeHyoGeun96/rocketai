export const TIME_KEYS = ["hour", "day", "month", "year"] as const;

export const headers = ["", "時", "日", "月", "年"];

export const ROWS: {
  index: number;
  title: { hanjaTitle: string; hangleTitle: string };
  dataKey: keyof SaJuData;
}[] = [
  {
    index: 0,
    title: { hanjaTitle: "十星", hangleTitle: "십성" },
    dataKey: "tenStar",
  },
  {
    index: 1,
    title: { hanjaTitle: "天干", hangleTitle: "천간" },
    dataKey: "heavenlyStems",
  },
  {
    index: 2,
    title: { hanjaTitle: "地支", hangleTitle: "지지" },
    dataKey: "earthlyBranches",
  },
  {
    index: 3,
    title: { hanjaTitle: "十星", hangleTitle: "십성" },
    dataKey: "secondTenStar",
  },
  {
    index: 4,
    title: { hanjaTitle: "十二運星", hangleTitle: "십이운성" },
    dataKey: "twelveUnseong",
  },
  {
    index: 5,
    title: { hanjaTitle: "十二神殺", hangleTitle: "십이신살" },
    dataKey: "twelveShinsal",
  },
  {
    index: 6,
    title: { hanjaTitle: "貴人", hangleTitle: "귀인" },
    dataKey: "noblePeople",
  },
];
