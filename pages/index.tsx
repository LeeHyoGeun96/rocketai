import { SpeechBubbleText } from "@/components/UI/Webtoon/SpeechBubbleText";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImage } from "@/components/UI/Webtoon/WebtoonImage";
import { imageSizes } from "@/constants/bluemoonladysaju/imageSizes";

export default function Home() {
  return (
    <>
      <WebtoonContainer>
        <WebtoonImage
          src="/resultPage/bluemoonladysaju/1.png"
          alt="webtoon"
          originalWidth={imageSizes["/resultPage/bluemoonladysaju/1.png"].width}
          originalHeight={
            imageSizes["/resultPage/bluemoonladysaju/1.png"].height
          }
          priority={true}
        >
          <SpeechBubbleText imageId="1" maxFontSize={20} minFontSize={1} />
        </WebtoonImage>
        <WebtoonImage
          src="/resultPage/bluemoonladysaju/2.png"
          alt="webtoon"
          originalWidth={imageSizes["/resultPage/bluemoonladysaju/2.png"].width}
          originalHeight={
            imageSizes["/resultPage/bluemoonladysaju/2.png"].height
          }
          customClassName="w-[80%]"
        />
        <WebtoonImage
          src="/resultPage/bluemoonladysaju/3.png"
          alt="webtoon"
          originalWidth={imageSizes["/resultPage/bluemoonladysaju/3.png"].width}
          originalHeight={
            imageSizes["/resultPage/bluemoonladysaju/3.png"].height
          }
          topM={"-19%"}
        >
          <SpeechBubbleText imageId="3" maxFontSize={20} minFontSize={1} />
        </WebtoonImage>
      </WebtoonContainer>
    </>
  );
}
