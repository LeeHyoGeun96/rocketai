import Image from "next/image";
import {
  webtoonDecorativeMeta,
  WebtoonDecorativeKey,
  DecorativeElementMeta,
} from "@/constants/bluemoonladysaju/webtoonDecorativeMeta";

interface WebtoonDecorativeElementProps {
  decorativeKey: WebtoonDecorativeKey;
  src?: DecorativeElementMeta["src"];
  altText?: DecorativeElementMeta["altText"];
  width?: DecorativeElementMeta["width"];
  height?: DecorativeElementMeta["height"];
  topM?: DecorativeElementMeta["top"];
  leftM?: DecorativeElementMeta["left"];
  rightM?: DecorativeElementMeta["right"];
  bottomM?: DecorativeElementMeta["bottom"];
  transform?: DecorativeElementMeta["transform"];
  zIndex?: DecorativeElementMeta["zIndex"];
  opacity?: DecorativeElementMeta["opacity"];
  className?: string;
  priority?: boolean;
}

export const WebtoonDecorativeElement = ({
  decorativeKey,
  src,
  altText,
  width,
  height,
  topM,
  leftM,
  rightM,
  bottomM,
  transform,
  zIndex,
  opacity,
  className,
  priority = false,
}: WebtoonDecorativeElementProps) => {
  const metaBase: DecorativeElementMeta = webtoonDecorativeMeta[decorativeKey];

  if (!metaBase) {
    console.warn(`DecorativeElement: Meta not found for key: ${decorativeKey}`);
    return null;
  }

  const finalSrc = src || metaBase.src;
  const finalAltText =
    altText !== undefined
      ? altText
      : metaBase.altText !== undefined
      ? metaBase.altText
      : "";

  const baseClassName = metaBase.className || "";
  const propClassName = className || "";
  const finalClassName = `${baseClassName} ${propClassName}`.trim();

  const parentDivStyle: React.CSSProperties = {
    position: "absolute",
    width: width !== undefined ? width : metaBase.width,
    height: height !== undefined ? height : metaBase.height,
    top: topM !== undefined ? topM : metaBase.top,
    left: leftM !== undefined ? leftM : metaBase.left,
    right: rightM !== undefined ? rightM : metaBase.right,
    bottom: bottomM !== undefined ? bottomM : metaBase.bottom,
    transform: transform !== undefined ? transform : metaBase.transform,
    zIndex: zIndex !== undefined ? zIndex : metaBase.zIndex,
    opacity: opacity !== undefined ? opacity : metaBase.opacity,
  };

  const imageStyle: React.CSSProperties = {
    objectFit: "contain",
  };

  if (
    parentDivStyle.width === undefined ||
    parentDivStyle.height === undefined
  ) {
    console.warn(
      `WebtoonDecorativeElement (key: ${decorativeKey}): Explicit width and height on the parent div are recommended when using fill on next/image.`
    );
  }

  return (
    <div style={parentDivStyle} className={finalClassName}>
      <Image
        src={finalSrc}
        alt={finalAltText}
        fill
        style={imageStyle}
        priority={priority}
      />
    </div>
  );
};
