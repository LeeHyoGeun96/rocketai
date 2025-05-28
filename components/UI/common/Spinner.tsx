import Image from "next/image";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center py-10">
      <Image
        src="/images/bluemoonladysaju/loading/analyzing.png"
        alt="분석중 이미지"
        width={1024}
        height={1536}
        sizes="(max-width: 768px) 100vw, 512px"
        className="w-auto max-w-[90%] h-auto"
        priority
      />
    </div>
  );
}
