import SaJuTable from "@/components/UI/SaJuTable/SaJuTable";
import SaJuTableBackGround from "@/components/UI/SaJuTable/SaJuTableBackGround";
import { WebtoonText } from "@/components/UI/Webtoon/WebtoonText";
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
          <WebtoonText
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
          <WebtoonText
            imagePath={imagePaths.IMG3}
            maxFontSize={20}
            minFontSize={1}
          />
        </WebtoonImageBlock>
        <WebtoonBlock customClassName="w-[95%]" topM={"-5%"}>
          <WebtoonText
            maxFontSize={25}
            minFontSize={1}
            topM={"10%"}
            leftM={"20%"}
            text={`{{name}}님의 사주 \n {{birthYear}}년 {{birthMonth}}월{{birthDay}}일 {{birthTime}}`}
          />
          <SaJuTableBackGround>
            <SaJuTable data={sajuData} />
          </SaJuTableBackGround>
        </WebtoonBlock>
      </WebtoonContainer>
    </>
  );
}
