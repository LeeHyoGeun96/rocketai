"use client";

import { speechBubbleMap } from "@/constants/bluemoonladysaju/speechBubbleMap";
import { useUserStore } from "@/store/userStore";

interface SpeechBubbleTextProps {
  className?: string;
  imageId: string;
}

export const SpeechBubbleText = ({
  className = "",
  imageId,
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

  return (
    <div className={`absolute ${className}`} style={inlineStyle}>
      {lines.map((line, index) => (
        <p
          key={index}
          className={`text-center ${
            fontSizeClass || ""
          } leading-snug break-words mb-0`}
        >
          {line === "" ? "\u00A0" : line}
        </p>
      ))}
    </div>
  );
};
