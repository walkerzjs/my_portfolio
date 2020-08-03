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

  //Stop mobile keyboard changes viewport size when poped up.
  //https://medium.com/@sruthisreemenon/avoid-ui-distortions-during-keyboard-display-for-a-mobile-friendly-webpage-86eb99590a13
  useEffect(() => {
    window.onresize = function (event) {
      document.documentElement.style.setProperty("overflow", "auto");
      const metaViewport = document.querySelector("meta[name=viewport]");
      metaViewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      );
    };
  });

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Portfolio for Junshuai Zhang (Jacob)"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
        />

        {/* <meta name="viewport" content="width=device-width" /> */}
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
