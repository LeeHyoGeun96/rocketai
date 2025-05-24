// components/WebtoonImage.tsx
import Image from "next/image";

export interface WebtoonImageProps {
  src: string;
  alt?: string;
  zIndex?: number;
  topM?: number;
  bottomM?: number;
  customClassName?: string; // 이 클래스가 이미지 컨테이너의 크기를 제어합니다.
  originalWidth: number; // aspect-ratio 계산 및 sizes prop에 사용
  originalHeight: number; // aspect-ratio 계산에 사용
  priority?: boolean; // 중요한 이미지(LCP)에 true 설정
}

export function WebtoonImage({
  src,
  alt = "",
  customClassName = "",
  originalWidth,
  originalHeight,
  zIndex = 0,
  topM = 0,
  bottomM = 0,
  priority = false,
}: WebtoonImageProps) {
  // 원본 이미지의 종횡비를 계산합니다.
  const aspectRatio = `${originalWidth} / ${originalHeight}`;

  return (
    // 이 div가 이미지의 실제 크기와 위치를 결정합니다.
    // mx-auto, block은 중앙 정렬 및 기본 블록 요소 스타일입니다.
    // max-w-md는 이미지의 최대 너비를 제한합니다 (테일윈드 기본값: 28rem = 448px).
    // customClassName을 통해 전달된 너비 클래스가 w-full을 덮어씁니다.
    <div
      className={`relative block  ${customClassName || "w-full"}`}
      style={{
        aspectRatio, // 종횡비 설정으로 높이가 너비에 따라 자동 조절됩니다.
        zIndex: zIndex || 0,
        marginTop: `${topM}px`,
        marginBottom: `${bottomM}px`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        priority={priority}
        sizes="        
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
              "
      />
    </div>
  );
}
