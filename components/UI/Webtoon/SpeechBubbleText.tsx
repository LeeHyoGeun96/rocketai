"use client";

import { speechBubbleMap } from "@/constants/bluemoonladysaju/speechBubbleMap";
import { useUserStore } from "@/store/userStore";
import { generateClampFontSize } from "@/utils/generateClampFontSize";

interface SpeechBubbleTextProps {
  className?: string;
  imageId: string;
  sort?: "left" | "right" | "center";
  maxFontSize?: number;
  minFontSize?: number;
  paragraphSpacing?: string;
}

export const SpeechBubbleText = ({
  className = "",
  imageId,
  sort = "center",
  maxFontSize = 16,
  minFontSize = 12,
  paragraphSpacing = "0",
}: SpeechBubbleTextProps) => {
  const { name } = useUserStore((state) => state.userData);
  const speechBubble = speechBubbleMap[imageId]?.(name);

  if (!speechBubble) {
    console.warn(`Speech bubble not found for imageId: ${imageId}`);
    return null;
  }

  const { text, top, left, right, bottom } = speechBubble;
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
