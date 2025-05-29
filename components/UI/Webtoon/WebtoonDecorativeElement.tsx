import Image from "next/image";
import {
  webtoonDecorativeMeta,
  WebtoonDecorativeKey,
  DecorativeElementMeta,
} from "@/constants/bluemoonladysaju/webtoonDecorativeMeta";

// Prop 인터페이스: WebtoonText의 XxxM 네이밍 규칙 적용
interface WebtoonDecorativeElementProps {
  decorativeKey: WebtoonDecorativeKey;
  srcM?: DecorativeElementMeta["src"];
  altTextM?: DecorativeElementMeta["altText"];
  widthM?: DecorativeElementMeta["width"];
  heightM?: DecorativeElementMeta["height"];
  topM?: DecorativeElementMeta["top"];
  leftM?: DecorativeElementMeta["left"];
  rightM?: DecorativeElementMeta["right"];
  bottomM?: DecorativeElementMeta["bottom"];
  transformM?: DecorativeElementMeta["transform"];
  zIndexM?: DecorativeElementMeta["zIndex"];
  opacityM?: DecorativeElementMeta["opacity"];
  classNameM?: string;
  priorityM?: boolean; // priority prop도 M 네이밍 규칙 적용 (선택 사항)
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
  priorityM = false, // 기본값 false
}: WebtoonDecorativeElementProps) => {
  const metaBase: DecorativeElementMeta = webtoonDecorativeMeta[decorativeKey];

  if (!metaBase) {
    console.warn(`DecorativeElement: Meta not found for key: ${decorativeKey}`);
    return null;
  }

  const finalSrc = srcM || metaBase.src;
  const finalAltText =
    altTextM !== undefined
      ? altTextM
      : metaBase.altText !== undefined
      ? metaBase.altText
      : "";

  const baseClassName = metaBase.className || "";
  const propClassName = classNameM || "";
  const finalClassName = `${baseClassName} ${propClassName}`.trim();

  // 부모 div 스타일
  const parentDivStyle: React.CSSProperties = {
    position: "absolute", // 'fill'을 사용하기 위해 Image의 부모는 position:relative, fixed, or absolute 여야 함
    width: widthM !== undefined ? widthM : metaBase.width,
    height: heightM !== undefined ? heightM : metaBase.height,
    top: topM !== undefined ? topM : metaBase.top,
    left: leftM !== undefined ? leftM : metaBase.left,
    right: rightM !== undefined ? rightM : metaBase.right,
    bottom: bottomM !== undefined ? bottomM : metaBase.bottom,
    transform: transformM !== undefined ? transformM : metaBase.transform,
    zIndex: zIndexM !== undefined ? zIndexM : metaBase.zIndex,
    opacity: opacityM !== undefined ? opacityM : metaBase.opacity,
  };

  // Image 컴포넌트 스타일 (objectFit)
  const imageStyle: React.CSSProperties = {
    objectFit: "contain", // 👈 objectFit을 style로 이동
  };

  // 부모 div의 width 또는 height가 정의되지 않으면 fill을 사용할 때 문제가 될 수 있습니다.
  // Image는 부모의 크기를 기준으로 채워지기 때문입니다.
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
        fill // 👈 layout="fill" 대신 fill prop 사용
        style={imageStyle} // 👈 objectFit을 style prop으로 전달
        priority={priorityM} // prop 이름 변경 반영
        // fill을 사용할 때는 sizes prop이 유용할 수 있습니다.
        // 부모 div의 크기에 따라 이미지 최적화를 돕습니다.
        // 예: sizes="(max-width: 768px) 100vw, 50vw"
        // 하지만 이 컴포넌트의 경우 부모 div의 크기가 명시적으로 주어지므로,
        // sizes가 반드시 필요하지 않을 수도 있습니다. 사용 사례에 따라 결정하세요.
      />
    </div>
  );
};
