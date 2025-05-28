import SaJuTable from "@/components/UI/SaJuTable/SaJuTable";
import SaJuTableBackGround from "@/components/UI/SaJuTable/SaJuTableBackGround";
import { WebtoonText } from "@/components/UI/Webtoon/WebtoonText";
import { WebtoonBlock } from "@/components/UI/Webtoon/WebtoonBlock";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImageBlock } from "@/components/UI/Webtoon/WebtoonImageBlock";
import { dummySaJu } from "@/data/dummySaJuData";
import { imagePaths } from "@/constants/bluemoonladysaju/imagePaths";
import { WebtoonDecorativeElement } from "@/components/UI/Webtoon/WebtoonDecorativeElement";

export default function Home() {
  const sajuData = dummySaJu;

  return (
    <>
      <WebtoonContainer>
        <WebtoonImageBlock src={imagePaths.IMG1} alt="webtoon" priority={true}>
          <WebtoonText textKey="IMG1_BUBBLE" maxFontSize={20} minFontSize={1} />
        </WebtoonImageBlock>
        <WebtoonImageBlock
          src={imagePaths.IMG2}
          alt="webtoon"
          customClassName="w-[80%]"
        />
        <WebtoonImageBlock src={imagePaths.IMG3} alt="webtoon" topM={"-19%"}>
          <WebtoonText textKey="IMG3_BUBBLE" maxFontSize={20} minFontSize={1} />
        </WebtoonImageBlock>
        <WebtoonBlock customClassName="w-[95%]" topM={"-5%"}>
          <WebtoonText
            textKey="SAJU_SUMMARY_1"
            maxFontSize={25}
            minFontSize={1}
            className="w-full top-[9%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
          <WebtoonText
            textKey="SAJU_SUMMARY_2"
            maxFontSize={30}
            minFontSize={1}
            className="w-full top-[9%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
          <WebtoonDecorativeElement decorativeKey="SAJU_TABLE_HEADER_CLOUD_A" />
          <WebtoonDecorativeElement decorativeKey="SAJU_TABLE_HEADER_CLOUD_B" />
          <SaJuTableBackGround>
            <SaJuTable data={sajuData} />
          </SaJuTableBackGround>
        </WebtoonBlock>
      </WebtoonContainer>
    </>
  );
}
