import SaJuTable from "@/components/UI/SaJuTable";
import { SpeechBubbleText } from "@/components/UI/Webtoon/SpeechBubbleText";
import { WebtoonBlock } from "@/components/UI/Webtoon/WebtoonBlock";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImageBlock } from "@/components/UI/Webtoon/WebtoonImageBlock";
import { imagePaths } from "@/constants/bluemoonladysaju/webtoonImagesMeta";
import { dummySaJu } from "@/data/dummySaJuData";
import { generateClampFontSize } from "@/utils/generateClampFontSize";

export interface TableStylePreset {
  borderColor: string;
  leftEdgeClassName: string;
  leftEdgeFontSize: string;
  topEdgeClassName: string;
  topEdgeFontSize: string;
  edgeColor: string;
  innerCellBgColor: string;
  fontSize: string;
  getRowBorderClass?: (rowIndex: number) => string;
}

export const DefaultSajuTableStyle: TableStylePreset = {
  borderColor: "border-gray-300",
  leftEdgeClassName: " border-r border-b border-black border-l-0",
  leftEdgeFontSize: generateClampFontSize(1, 12),
  topEdgeClassName: "border-t-0 border border-black",
  topEdgeFontSize: generateClampFontSize(1, 21),
  edgeColor: "bg-transparent",
  innerCellBgColor: "bg-[#fcfcfa]",
  fontSize: generateClampFontSize(1, 20),
  getRowBorderClass: (rowIndex: number) =>
    rowIndex === 1
      ? "border-b-[0.5px] border-gray-400"
      : "border-b border-black",
};

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
