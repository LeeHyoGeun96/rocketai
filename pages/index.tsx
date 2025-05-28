// 경로: pages/index.tsx (또는 SSG로 만들고 싶은 페이지 파일)

import dynamic from "next/dynamic";
import Head from "next/head"; // 페이지 <head> 관리를 위해 import
import type { GetStaticProps, NextPage } from "next"; // Next.js 타입 import

// UI 컴포넌트 import
import SaJuTableBackGround from "@/components/UI/SaJuTable/SaJuTableBackGround";
import { WebtoonText } from "@/components/UI/Webtoon/WebtoonText";
import { WebtoonBlock } from "@/components/UI/Webtoon/WebtoonBlock";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImageBlock } from "@/components/UI/Webtoon/WebtoonImageBlock";
import { WebtoonDecorativeElement } from "@/components/UI/Webtoon/WebtoonDecorativeElement";

import { imagePaths } from "@/constants/bluemoonladysaju/imagePaths";
import Spinner from "@/components/UI/common/Spinner";
// 만약 webtoonTextMeta에서 텍스트를 가져와 getStaticProps에서 props로 전달하고 싶다면 import
// import { webtoonTextMeta } from "@/constants/bluemoonladysaju/webtoonTextMeta";

// CSR로 SaJuTable 렌더링 (컴포넌트 외부, 파일 상단에 정의)
const SaJuTableClient = dynamic(
  () => import("@/components/UI/SaJuTable/SaJuTableClient"),
  {
    ssr: false,
    // 로딩 중 UI (선택적)
    loading: () => <Spinner />,
  }
);

// 페이지 컴포넌트로 전달될 props 타입 정의
interface HomePageProps {
  pageTitle: string;
  pageDescription: string;
  // 필요하다면 다른 정적 데이터 (예: SSG 시점에 렌더링할 텍스트 내용 등)
  // summaryText1?: string;
}

// SSG를 위한 getStaticProps 함수
export const getStaticProps: GetStaticProps<HomePageProps> = async (
  _context
) => {
  const pageTitle = "나의 특별한 사주풀이 결과";
  const pageDescription = "당신의 사주팔자를 정밀 분석하여 보여드립니다.";

  return {
    props: {
      pageTitle,
      pageDescription,
    },
  };
};

// 페이지 컴포넌트
const HomePage: NextPage<HomePageProps> = ({ pageTitle, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

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
          <WebtoonText
            textKey="SAJU_TITLE_1"
            maxFontSize={25}
            minFontSize={1}
          />
          <WebtoonText
            textKey="SAJU_TITLE_2"
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
    </>
  );
};

export default HomePage;
