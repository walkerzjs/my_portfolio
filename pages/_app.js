import { Provider } from "react-redux";
import { useStore } from "../3_data/store";
import "./_app.css";
import Layout from "../2_containers/Layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}
