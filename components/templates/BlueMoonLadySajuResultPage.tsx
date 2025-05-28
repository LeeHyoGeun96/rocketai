import dynamic from "next/dynamic";

import SaJuTableBackGround from "@/components/UI/SaJuTable/SaJuTableBackGround";
import { WebtoonText } from "@/components/UI/Webtoon/WebtoonText";
import { WebtoonBlock } from "@/components/UI/Webtoon/WebtoonBlock";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImageBlock } from "@/components/UI/Webtoon/WebtoonImageBlock";
import { WebtoonDecorativeElement } from "@/components/UI/Webtoon/WebtoonDecorativeElement";
import Spinner from "@/components/UI/common/Spinner";

import { imagePaths } from "@/constants/bluemoonladysaju/imagePaths";

const SaJuTableClient = dynamic(
  () => import("@/components/UI/SaJuTable/SaJuTableClient"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

interface BlueMoonLadySajuResultPageProps {}

const BlueMoonLadySajuResultPage = ({}: BlueMoonLadySajuResultPageProps) => {
  return (
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

      <WebtoonBlock customClassName="w-[95%] relative" topM={"-5%"}>
        <WebtoonText textKey="SAJU_TITLE_1" maxFontSize={25} minFontSize={1} />
        <WebtoonText textKey="SAJU_TITLE_2" maxFontSize={30} minFontSize={1} />

        <WebtoonDecorativeElement decorativeKey="SAJU_TABLE_HEADER_CLOUD_A" />
        <WebtoonDecorativeElement decorativeKey="SAJU_TABLE_HEADER_CLOUD_B" />

        <SaJuTableBackGround>
          <SaJuTableClient />
        </SaJuTableBackGround>
      </WebtoonBlock>
    </WebtoonContainer>
  );
};

export default BlueMoonLadySajuResultPage;
