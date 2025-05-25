"use client";

import { useUserStore } from "@/store/userStore";
import { generateClampFontSize } from "@/utils/generateClampFontSize";
import {
  ImagePath,
  webtoonImagesMeta,
} from "@/constants/bluemoonladysaju/webtoonImagesMeta";

interface SpeechBubbleTextProps {
  className?: string;
  imagePath: ImagePath;
  sort?: "left" | "right" | "center";
  maxFontSize?: number;
  minFontSize?: number;
  paragraphSpacing?: string;
}

export const SpeechBubbleText = ({
  className = "",
  imagePath,
  sort = "center",
  maxFontSize = 16,
  minFontSize = 12,
  paragraphSpacing = "0",
}: SpeechBubbleTextProps) => {
  const { name } = useUserStore((state) => state.userData);
  const bubble = webtoonImagesMeta[imagePath].bubble;

  if (!bubble) {
    console.warn(`Speech bubble not found for imagePath: ${imagePath}`);
    return null;
  }

  const text = bubble.text(name);
  const { top, left, right, bottom } = bubble;

  const lines = text.split("\n");

  const positionStyle: React.CSSProperties = {
    ...(top && { top }),
    ...(left && { left }),
    ...(right && { right }),
    ...(bottom && { bottom }),
  };

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
      style={positionStyle}
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
