
//for styled components SSR support
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "../2_containers/Shared/gtag";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
        
      const initialProps = await Document.getInitialProps(ctx);
     
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <script src="theme.js"></script> */}

          {/* <script type="text/javascript">alert("hello world")</script> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5XH934W');
          `,
            }}
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (() => {
                var currentTheme;
              
                function changeTheme(inputTheme) {
                  
                  if (JSON.parse(inputTheme).mode === "dark") {
                
                    const theme = themeConfig.dark;
                    for (let key in theme) {
                      setCSSVar(key, theme[key]);
                    }
                    localStorage.setItem("theme", inputTheme);
                  } else {
                    const theme = themeConfig.light;
                    for (let key in theme) {
                      setCSSVar(key, theme[key]);
                    }
                    localStorage.setItem("theme", inputTheme);
                  }
                }
              
                function setCSSVar(property, color) {
                  document.documentElement.style.setProperty(property, color);
                }
                try {
                  currentTheme = localStorage.getItem("theme") || { mode: "light" };
                  window.__theme = currentTheme.mode;
                  var themeConfig = {
                    dark: {
                      "--white": "#000000",
                      "--grey-1": "#000000",
                      "--black": "#ffffff",
                      "--grey-4": "#2e2e2e",
                      "--red-origin": "#ff5f57",
                      "--blue-2": "#2e2e2e",
                    },
                  };
              
                  changeTheme(currentTheme);
                } catch (err) {
                  console.log(new Error("accessing theme has been denied"));
                }
              })();
          `,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XH934W"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
            }}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
