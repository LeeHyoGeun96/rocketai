import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";

import BlueMoonLadySajuResultPage from "@/components/templates/BlueMoonLadySajuResultPage";

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

      <BlueMoonLadySajuResultPage />
    </>
  );
};

export default HomePage;
