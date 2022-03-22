import Layout from "components/Layout";
import type { AppProps } from "next/app";
import React from "react";
import "modern-css-reset";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
