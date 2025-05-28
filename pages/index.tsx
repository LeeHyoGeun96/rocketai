import dynamic from "next/dynamic";
import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";

// UI 컴포넌트 import
import SaJuTableBackGround from "@/components/UI/SaJuTable/SaJuTableBackGround";
import { WebtoonText } from "@/components/UI/Webtoon/WebtoonText";
import { WebtoonBlock } from "@/components/UI/Webtoon/WebtoonBlock";
import { WebtoonContainer } from "@/components/UI/Webtoon/WebtoonContainer";
import { WebtoonImageBlock } from "@/components/UI/Webtoon/WebtoonImageBlock";
import { WebtoonDecorativeElement } from "@/components/UI/Webtoon/WebtoonDecorativeElement";

import { imagePaths } from "@/constants/bluemoonladysaju/imagePaths";
import Spinner from "@/components/UI/common/Spinner";

const SaJuTableClient = dynamic(
  () => import("@/components/UI/SaJuTable/SaJuTableClient"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

// 페이지 컴포넌트로 전달될 props 타입 정의
interface HomePageProps {
  pageTitle: string;
  pageDescription: string;
}

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
