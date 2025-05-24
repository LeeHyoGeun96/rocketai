import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/UI/Layout";
import { ClientInit } from "@/components/ClientInit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ClientInit />
      <Component {...pageProps} />
    </Layout>
  );
}
