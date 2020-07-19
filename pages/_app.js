import { useEffect } from "react";
import { Provider } from "react-redux";
import { useStore } from "../3_data/store";
import "./_app.css";
import Layout from "../2_containers/Layout/Layout";
import Head from "next/head";
import Router from "next/router";
import * as gtag from "../2_containers/Shared/gtag";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Portfolio for Junshuai Zhang (Jacob)"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="apple-touch-icon"
          href="/images/icons/icon-512x512.png"
        ></link>
        <title>Junshuai Zhang's portfolio</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}
