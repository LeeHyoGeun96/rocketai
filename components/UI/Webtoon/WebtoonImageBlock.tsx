// components/WebtoonImage.tsx
import Image from "next/image";

export interface WebtoonImageBlockProps {
  src: string;
  alt?: string;
  zIndex?: string;
  topM?: string;
  bottomM?: string;
  customClassName?: string; // 이 클래스가 이미지 컨테이너의 크기를 제어합니다.
  originalWidth: number;
  originalHeight: number;
  priority?: boolean; // 중요한 이미지(LCP)에 true 설정
  children?: React.ReactNode;
}

export function WebtoonImageBlock({
  src,
  alt = "",
  customClassName = "",
  originalWidth,
  originalHeight,
  zIndex = "0",
  topM = "0",
  bottomM = "0",
  priority = false,
  children,
}: WebtoonImageBlockProps) {
  return (
    <div
      className={`relative block  ${customClassName || "w-full"}`}
      style={{
        zIndex: zIndex,
        marginTop: topM,
        marginBottom: bottomM,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={originalWidth}
        height={originalHeight}
        className="w-full h-auto object-contain"
        priority={priority}
        sizes="        
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
              "
      />
      {children}
    </div>
  );
}
