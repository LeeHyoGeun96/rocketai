"use client";

import { speechBubbleMap } from "@/constants/bluemoonladysaju/speechBubbleMap";
import { useUserStore } from "@/store/userStore";

interface SpeechBubbleTextProps {
  className?: string;
  imageId: string;
  sort?: "left" | "right" | "center";
}

export const SpeechBubbleText = ({
  className = "",
  imageId,
  sort = "center",
}: SpeechBubbleTextProps) => {
  const { name } = useUserStore((state) => state.userData);
  const { text, top, left, width, fontSizeClass } =
    speechBubbleMap[imageId](name);
  const textToSplit = text;
  const lines = textToSplit.split("\n");

  const inlineStyle: React.CSSProperties = {
    ...(top && { top }),
    ...(left && { left }),
    ...(width && { width }),
  };

  const textAlignClass = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  }[sort];

  return (
    <div
      className={`absolute w-fit ${className} ${textAlignClass}`}
      style={inlineStyle}
    >
      {lines.map((line, index) => (
        <p
          key={index}
          className={` ${fontSizeClass || ""} leading-snug break-words mb-0`}
        >
          {line === "" ? "\u00A0" : line}
        </p>
      ))}
    </div>
  );
};
