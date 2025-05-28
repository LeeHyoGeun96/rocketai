"use client";

import { useUserStore } from "@/store/userStore";
import { generateClampFontSize } from "@/utils/generateClampFontSize";
import {
  ImagePath,
  webtoonImagesMeta,
} from "@/constants/bluemoonladysaju/webtoonImagesMeta";
import applyTemplate from "@/utils/applyTemplate";

interface WebtoonTextProps {
  className?: string;
  imagePath?: ImagePath;
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
  imagePath,
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

  if (text) {
    // text가 들어오면 applyTemplate 사용
    bubbleText = applyTemplate(text, variables);
  } else if (imagePath) {
    const bubble = webtoonImagesMeta[imagePath]?.bubble;

    if (!bubble) {
      console.warn(`Speech bubble not found for imagePath: ${imagePath}`);
      return null;
    }

    bubbleText = applyTemplate(bubble.textTemplate, variables);

    const { top, bottom, left, right } = bubble;

    // imagePath 기준 스타일 우선 적용
    style = {
      ...(top && !topM && { top }),
      ...(bottom && !bottomM && { bottom }),
      ...(left && !leftM && { left }),
      ...(right && !rightM && { right }),
    };
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

  return (
    <div
      className={`absolute w-fit ${className} ${textAlignClass}`}
      style={style}
    >
      {lines.map((line, index) => (
        <p
          key={index}
          className="leading-snug break-words"
          style={{ fontSize, marginBottom: paragraphSpacing }}
        >
          {line || "\u00A0"}
        </p>
      ))}
    </div>
  );
};
