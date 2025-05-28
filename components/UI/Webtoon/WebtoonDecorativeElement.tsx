import Image from "next/image";
import {
  webtoonDecorativeMeta,
  WebtoonDecorativeKey,
  DecorativeElementMeta,
} from "@/constants/bluemoonladysaju/webtoonDecorativeMeta";

// Prop 인터페이스: WebtoonText의 XxxM 네이밍 규칙 적용
interface WebtoonDecorativeElementProps {
  decorativeKey: WebtoonDecorativeKey;
  srcM?: DecorativeElementMeta["src"]; // meta.src 오버라이드
  altTextM?: DecorativeElementMeta["altText"]; // meta.altText 오버라이드
  widthM?: DecorativeElementMeta["width"]; // meta.width 오버라이드 및 CSS width 제어
  heightM?: DecorativeElementMeta["height"]; // meta.height 오버라이드 및 CSS height 제어
  topM?: DecorativeElementMeta["top"]; // meta.top 오버라이드 및 CSS top 제어
  leftM?: DecorativeElementMeta["left"]; // meta.left 오버라이드 및 CSS left 제어
  rightM?: DecorativeElementMeta["right"]; // meta.right 오버라이드 및 CSS right 제어
  bottomM?: DecorativeElementMeta["bottom"]; // meta.bottom 오버라이드 및 CSS bottom 제어
  transformM?: DecorativeElementMeta["transform"]; // meta.transform 오버라이드
  zIndexM?: DecorativeElementMeta["zIndex"]; // meta.zIndex 오버라이드
  opacityM?: DecorativeElementMeta["opacity"]; // meta.opacity 오버라이드
  classNameM?: string; // meta.className과 병합될 추가 className
}

export const WebtoonDecorativeElement = ({
  decorativeKey,
  srcM,
  altTextM,
  widthM,
  heightM,
  topM,
  leftM,
  rightM,
  bottomM,
  transformM,
  zIndexM,
  opacityM,
  classNameM,
}: WebtoonDecorativeElementProps) => {
  const metaBase: DecorativeElementMeta = webtoonDecorativeMeta[decorativeKey];

  if (!metaBase) {
    console.warn(`DecorativeElement: Meta not found for key: ${decorativeKey}`);
    return null;
  }

  // 최종 src 및 altText 결정
  const finalSrc = srcM || metaBase.src;
  const finalAltText =
    altTextM !== undefined
      ? altTextM
      : metaBase.altText !== undefined
      ? metaBase.altText
      : "";

  // 최종 className 결정
  const baseClassName = metaBase.className || "";
  const propClassName = classNameM || ""; // prop 이름 변경 반영
  const finalClassName = `${baseClassName} ${propClassName}`.trim();

  // 스타일 객체 구성
  const style: React.CSSProperties = {
    position: "absolute",

    // width: XxxM prop이 있으면 그것을 사용, 없으면 metaBase.width 사용
    width: widthM !== undefined ? widthM : metaBase.width,
    height: heightM !== undefined ? heightM : metaBase.height,

    // top: topM prop이 있으면 그것을 사용, 없으면 metaBase.top 사용
    // (WebtoonText의 `...(top && !topM && { top })` 로직과 유사한 결과)
    // 즉, topM이 제공되면 metaBase.top은 무시되고 topM이 CSS top으로 적용됨.
    top: topM !== undefined ? topM : metaBase.top,
    left: leftM !== undefined ? leftM : metaBase.left,
    right: rightM !== undefined ? rightM : metaBase.right,
    bottom: bottomM !== undefined ? bottomM : metaBase.bottom,

    transform: transformM !== undefined ? transformM : metaBase.transform,
    zIndex: zIndexM !== undefined ? zIndexM : metaBase.zIndex,
    opacity: opacityM !== undefined ? opacityM : metaBase.opacity,
  };

  if (style.width === undefined || style.height === undefined) {
    console.warn(
      `WebtoonDecorativeElement (key: ${decorativeKey}): Explicit width and height are recommended for layout='fill'.`
    );
  }

  return (
    <div style={style} className={finalClassName}>
      <Image
        src={finalSrc}
        alt={finalAltText}
        layout="fill"
        objectFit="contain"
        priority={false}
      />
    </div>
  );
};
