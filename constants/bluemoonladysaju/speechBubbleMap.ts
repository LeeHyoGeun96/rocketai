export const speechBubbleMap: {
  [key: string]: (userName: string) => {
    text: string;
    top?: string;
    left?: string;
    width?: string;
    fontSizeClass?: string; // ✅ 클래스 이름으로 변경
  };
} = {
  "1": (name: string) => ({
    text: `이제 본격적으로 \n${name}님의 사주팔자를 \n분석해볼 차례네요.`,
    top: "85%",
    left: "16%",
    fontSizeClass: "text-bubble",
  }),

  "3": (name: string) => ({
    text: `제가 ${name}님의 사주를\n보기 쉽게 표로 정리했어요`,
    top: "13%",
    left: "14%",
    fontSizeClass: "text-bubble",
  }),
};
