import SaJuTable from "@/components/UI/SaJuTable/SaJuTable";
import { SpeechBubbleText } from "@/components/UI/Webtoon/SpeechBubbleText";
import { WebtoonBlock } from "@/components/UI/Webtoon/WebtoonBlock";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImageBlock } from "@/components/UI/Webtoon/WebtoonImageBlock";
import { imagePaths } from "@/constants/bluemoonladysaju/webtoonImagesMeta";
import { dummySaJu } from "@/data/dummySaJuData";

export default function Home() {
  const sajuData = dummySaJu;

  return (
    <>
      <WebtoonContainer>
        <WebtoonImageBlock src={imagePaths.IMG1} alt="webtoon" priority={true}>
          <SpeechBubbleText
            imagePath={imagePaths.IMG1}
            maxFontSize={20}
            minFontSize={1}
          />
        </WebtoonImageBlock>
        <WebtoonImageBlock
          src={imagePaths.IMG2}
          alt="webtoon"
          customClassName="w-[80%]"
        />
        <WebtoonImageBlock src={imagePaths.IMG3} alt="webtoon" topM={"-19%"}>
          <SpeechBubbleText
            imagePath={imagePaths.IMG3}
            maxFontSize={20}
            minFontSize={1}
          />
        </WebtoonImageBlock>
        <WebtoonBlock>
          <SaJuTable data={sajuData} />
        </WebtoonBlock>
      </WebtoonContainer>
    </>
  );
}
