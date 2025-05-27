export const TIME_KEYS = ["hour", "day", "month", "year"] as const;

export const headers = ["", "時", "日", "月", "年"];

export const ROWS: {
  title: { hanjaTitle: string; hangleTitle: string };
  dataKey: keyof SaJuData;
  customStyle?: string;
}[] = [
  { title: { hanjaTitle: "十星", hangleTitle: "십성" }, dataKey: "tenStar" },
  {
    title: { hanjaTitle: "天干", hangleTitle: "천간" },
    dataKey: "heavenlyStems",
    customStyle: "border-b border-black",
  },
  {
    title: { hanjaTitle: "地支", hangleTitle: "지지" },
    dataKey: "earthlyBranches",
  },
  {
    title: { hanjaTitle: "十星", hangleTitle: "십성" },
    dataKey: "secondTenStar",
  },
  {
    title: { hanjaTitle: "十二運星", hangleTitle: "십이운성" },
    dataKey: "twelveUnseong",
  },
  {
    title: { hanjaTitle: "十二神殺", hangleTitle: "십이신살" },
    dataKey: "twelveShinsal",
  },
  {
    title: { hanjaTitle: "貴人", hangleTitle: "귀인" },
    dataKey: "noblePeople",
  },
];
