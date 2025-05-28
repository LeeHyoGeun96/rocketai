// components/templates/BlueMoonLadySajuResultPage.tsx
import dynamic from "next/dynamic";

// UI 컴포넌트 import
import SaJuTableBackGround from "@/components/UI/SaJuTable/SaJuTableBackGround";
import { WebtoonText } from "@/components/UI/Webtoon/WebtoonText";
import { WebtoonBlock } from "@/components/UI/Webtoon/WebtoonBlock";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImageBlock } from "@/components/UI/Webtoon/WebtoonImageBlock";
import { WebtoonDecorativeElement } from "@/components/UI/Webtoon/WebtoonDecorativeElement";
import Spinner from "@/components/UI/common/Spinner"; // Spinner import

// 상수 import
import { imagePaths } from "@/constants/bluemoonladysaju/imagePaths";

// CSR로 SaJuTable 렌더링
const SaJuTableClient = dynamic(
  () => import("@/components/UI/SaJuTable/SaJuTableClient"),
  {
    ssr: false,
    loading: () => <Spinner />, // 로딩 스피너 사용
  }
);

// 이 템플릿 컴포넌트가 받을 수 있는 props (선택적)
// 예를 들어, 특정 텍스트 키나 이미지 키를 외부에서 주입받고 싶다면 정의
interface BlueMoonLadySajuResultPageProps {
  // 예시: 다른 textKey 세트를 사용하고 싶을 경우
  // img1BubbleKey?: WebtoonTextKey;
}

const BlueMoonLadySajuResultPage: React.FC<BlueMoonLadySajuResultPageProps> = (
  props
) => {
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
        {/*
          SAJU_TITLE_1, SAJU_TITLE_2가 동적 사용자 데이터를 필요로 한다면,
          이 텍스트들은 클라이언트 사이드에서 Zustand 스토어 데이터가 준비된 후
          렌더링되도록 처리해야 합니다. (예: <SaJuTableClient> 내부로 옮기거나,
          이 템플릿 컴포넌트 자체가 CSR로 래핑되거나,
          또는 이 텍스트만 렌더링하는 CSR 컴포넌트 사용)
          여기서는 정적 텍스트 키라고 가정합니다.
        */}
        <WebtoonText
          textKey="SAJU_TITLE_1" // 해당 textKey가 webtoonTextMeta에 정의되어 있어야 함
          maxFontSize={25}
          minFontSize={1}
        />
        <WebtoonText
          textKey="SAJU_TITLE_2" // 해당 textKey가 webtoonTextMeta에 정의되어 있어야 함
          maxFontSize={30}
          minFontSize={1}
        />

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
