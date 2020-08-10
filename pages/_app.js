import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { useStore } from "../3_data/store";
import storage from "local-storage-fallback";
import "./_app.css";
import Layout from "../2_containers/Layout/Layout";
import Head from "next/head";
import Router from "next/router";
import * as gtag from "../2_containers/Shared/gtag";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState({ mode: "light" });
  const store = useStore(pageProps.initialReduxState);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    //Because of ssr, need to use this to initialize theme from storage
    //(no storage on server, need to wait until the page rendered)
    const savedTheme = storage.getItem("theme");
    setTheme(savedTheme ? JSON.parse(savedTheme) : { mode: "light" });
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Portfolio for Junshuai Zhang (Jacob)"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Junshuai Zhang's portfolio" />
        <meta property="og:url" content="https://my-portfoliojsz.com/" />
        <meta
          property="og:description"
          content="Portfolio for Junshuai Zhang (Jacob)"
        />
        <meta
          property="og:image"
          content="https://my-portfoliojsz.com/myPortfolio.jpg"
        />
        <meta
          property="og:image:alt"
          content="Screenshot of My portfolio project website"
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="apple-touch-icon"
          href="/images/icons/icon-512x512.png"
        ></link>
        <title>Junshuai Zhang's portfolio</title>
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={{ mode: theme.mode, setTheme: setTheme }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </div>
  );
}
