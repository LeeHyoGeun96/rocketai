import { SpeechBubbleText } from "@/components/UI/Webtoon/SpeechBubbleText";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImageBlock } from "@/components/UI/Webtoon/WebtoonImageBlock";
import {
  imagePaths,
  webtoonImagesMeta,
} from "@/constants/bluemoonladysaju/webtoonImagesMeta";

export default function Home() {
  return (
    <>
      <WebtoonContainer>
        <WebtoonImageBlock
          src={imagePaths.IMG1}
          alt="webtoon"
          originalWidth={webtoonImagesMeta[imagePaths.IMG1].width}
          originalHeight={webtoonImagesMeta[imagePaths.IMG1].height}
          priority={true}
        >
          <SpeechBubbleText
            imagePath={imagePaths.IMG1}
            maxFontSize={20}
            minFontSize={1}
          />
        </WebtoonImageBlock>
        <WebtoonImageBlock
          src={imagePaths.IMG2}
          alt="webtoon"
          originalWidth={webtoonImagesMeta[imagePaths.IMG2].width}
          originalHeight={webtoonImagesMeta[imagePaths.IMG2].height}
          customClassName="w-[80%]"
        />
        <WebtoonImageBlock
          src={imagePaths.IMG3}
          alt="webtoon"
          originalWidth={webtoonImagesMeta[imagePaths.IMG3].width}
          originalHeight={webtoonImagesMeta[imagePaths.IMG3].height}
          topM={"-19%"}
        >
          <SpeechBubbleText
            imagePath={imagePaths.IMG3}
            maxFontSize={20}
            minFontSize={1}
          />
        </WebtoonImageBlock>
      </WebtoonContainer>
    </>
  );
}
