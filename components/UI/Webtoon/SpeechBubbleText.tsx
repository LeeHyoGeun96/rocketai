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
  const { text, top, left, right, bottom, fontSizeClass } =
    speechBubbleMap[imageId](name);
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

  return (
    <div
      className={`absolute w-fit ${className} ${textAlignClass}`}
      style={positionStyle}
    >
      {lines.map((line, index) => (
        <p
          key={index}
          className={` ${fontSizeClass} leading-snug break-words mb-0`}
        >
          {line === "" ? "\u00A0" : line}
        </p>
      ))}
    </div>
  );
};
