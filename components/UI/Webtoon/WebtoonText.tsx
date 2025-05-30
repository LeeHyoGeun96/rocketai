"use client";

import { useUserStore } from "@/store/userStore";
import { generateClampFontSize } from "@/utils/generateClampFontSize";
import applyTemplate from "@/utils/applyTemplate";
import {
  WebtoonTextKey,
  webtoonTextMeta,
} from "@/constants/bluemoonladysaju/webtoonTextMeta";

interface WebtoonTextProps {
  className?: string;
  textKey?: WebtoonTextKey;
  text?: string;
  sort?: "left" | "right" | "center";
  maxFontSize?: number;
  minFontSize?: number;
  paragraphSpacing?: string;
  topM?: string;
  bottomM?: string;
  leftM?: string;
  rightM?: string;
}

export const WebtoonText = ({
  className = "",
  textKey,
  text,
  sort = "center",
  maxFontSize = 16,
  minFontSize = 12,
  paragraphSpacing = "0",
  topM,
  bottomM,
  leftM,
  rightM,
}: WebtoonTextProps) => {
  const { name, birthYear, birthMonth, birthDay, birthTime } = useUserStore(
    (state) => state.userData
  );

  const variables = { name, birthYear, birthMonth, birthDay, birthTime };

  let bubbleText = "";
  let style: React.CSSProperties = {};
  let bubbleClassName = "";

  if (text) {
    bubbleText = applyTemplate(text, variables);
  } else if (textKey) {
    const bubble = webtoonTextMeta[textKey];

    if (!bubble) {
      console.warn(`Speech bubble not found for textKey: ${textKey}`);
      return null;
    }

    bubbleText = applyTemplate(bubble.textTemplate, variables);

    const {
      top,
      bottom,
      left,
      right,
      transform,
      className: bubbleCls,
    } = bubble;

    // imagePath 기준 스타일 우선 적용
    style = {
      ...(top && !topM && { top }),
      ...(bottom && !bottomM && { bottom }),
      ...(left && !leftM && { left }),
      ...(right && !rightM && { right }),
      ...(transform && { transform }),
    };

    if (bubbleCls) {
      bubbleClassName = bubbleCls;
    }
  }

  // props 기준 스타일이 덮어쓰도록 우선순위 처리
  style = {
    ...style,
    ...(topM && { marginTop: topM }),
    ...(bottomM && { marginBottom: bottomM }),
    ...(leftM && { marginLeft: leftM }),
    ...(rightM && { marginRight: rightM }),
  };

  const lines = bubbleText.split("\n");
  const fontSize = generateClampFontSize(minFontSize, maxFontSize);

  const textAlignClass =
    sort === "left"
      ? "text-left"
      : sort === "right"
      ? "text-right"
      : "text-center";

  const combinedClassName = `absolute w-fit ${className} ${bubbleClassName} ${textAlignClass} dark:text-black`;

  return (
    <div className={combinedClassName} style={style}>
      {lines.map((line, index) => (
        <p
          key={index}
          className="leading-snug"
          style={{ fontSize, marginBottom: paragraphSpacing , color: "black"}}
        >
          {line || "\u00A0"}
        </p>
      ))}
    </div>
  );
};
