"use client";

import React from "react"; // React 임포트 추가
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
  sort: propSort,
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
  let finalSort: "left" | "right" | "center" = propSort || "center";

  if (text) {
    bubbleText = applyTemplate(text, variables);
    if (propSort) finalSort = propSort;
  } else if (textKey) {
    const bubble = webtoonTextMeta[textKey];

    if (!bubble) {
      console.warn(`Speech bubble not found for textKey: ${textKey}`);
      return null;
    }

    bubbleText = applyTemplate(bubble.textTemplate, variables);

    const {
      containerTop,
      containerBottom,
      containerLeft,
      containerRight,
      containerWidth,
      containerHeight,
      top,
      bottom,
      left,
      right,
      transform,
      className: bubbleCls,
      sort: metaSort,
    } = bubble;

    if (metaSort) {
      finalSort = metaSort;
    }

    if (containerWidth) style.width = containerWidth;
    if (containerHeight) style.height = containerHeight;

    style.top = containerTop !== undefined ? containerTop : top;
    style.left = containerLeft !== undefined ? containerLeft : left;
    style.right = containerRight !== undefined ? containerRight : right;
    style.bottom = containerBottom !== undefined ? containerBottom : bottom;

    if (
      right !== undefined &&
      containerLeft === undefined &&
      left === undefined
    )
      style.right = right;
    if (bottom !== undefined && containerTop === undefined && top === undefined)
      style.bottom = bottom;

    if (transform) style.transform = transform;

    if (bubbleCls) {
      bubbleClassName = bubbleCls;
    }
  }

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
    finalSort === "left"
      ? "text-left"
      : finalSort === "right"
      ? "text-right"
      : "text-center";

  const combinedClassName = `absolute ${className} ${bubbleClassName} ${textAlignClass}`;

  return (
    <div className={combinedClassName} style={style}>
      {lines.map((line, index) => (
        <p
          key={index}
          className="leading-snug"
          style={{
            fontSize,
            marginBottom: paragraphSpacing,
            color: "black",
          }}
        >
          {line || "\u00A0"}
        </p>
      ))}
    </div>
  );
};
