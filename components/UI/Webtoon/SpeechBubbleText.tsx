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
}

export const SpeechBubbleText = ({
  className = "",
  imageId,
  sort = "center",
  maxFontSize = 16,
  minFontSize = 12,
}: SpeechBubbleTextProps) => {
  const { name } = useUserStore((state) => state.userData);
  const { text, top, left, right, bottom } = speechBubbleMap[imageId](name);
  const lines = text.split("\n");

  const positionStyle: React.CSSProperties = {
    top: top ?? "auto",
    left: left ?? "auto",
    right: right ?? "auto",
    bottom: bottom ?? "auto",
  };

  const textAlignClass = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  }[sort];

  const fontSize = generateClampFontSize(minFontSize, maxFontSize);

  return (
    <div
      className={`absolute w-fit ${className} ${textAlignClass}`}
      style={positionStyle}
    >
      {lines.map((line, index) => (
        <p
          key={index}
          className={`leading-snug break-words mb-0`}
          style={{ fontSize }}
        >
          {line === "" ? "\u00A0" : line}
        </p>
      ))}
    </div>
  );
};
