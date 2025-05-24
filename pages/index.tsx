import { WebtoonContainer } from "@/components/WebtoonContainer";
import { WebtoonImage } from "@/components/WebtoonImage";
import { imageSizes } from "@/constants/bluemoonladysaju/imageSizes";

export default function Home() {
  return (
    <WebtoonContainer>
      <WebtoonImage
        src="/resultPage/bluemoonladysaju/1.png"
        alt="webtoon"
        originalWidth={imageSizes["/resultPage/bluemoonladysaju/1.png"].width}
        originalHeight={imageSizes["/resultPage/bluemoonladysaju/1.png"].height}
        priority={true}
      />
      <WebtoonImage
        src="/resultPage/bluemoonladysaju/2.png"
        alt="webtoon"
        originalWidth={imageSizes["/resultPage/bluemoonladysaju/2.png"].width}
        originalHeight={imageSizes["/resultPage/bluemoonladysaju/2.png"].height}
        customClassName="w-[80%]"
      />
      <WebtoonImage
        src="/resultPage/bluemoonladysaju/3.png"
        alt="webtoon"
        originalWidth={imageSizes["/resultPage/bluemoonladysaju/3.png"].width}
        originalHeight={imageSizes["/resultPage/bluemoonladysaju/3.png"].height}
        topM={"-19%"}
      />
    </WebtoonContainer>
  );
}
