import Layout from "@/components/Layout";
import Loader from "@/controllers/Loader";
import "@/styles/globals.css";
import "../public/assets/css/custom.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
      <Loader {...pageProps} />
    </>
  );
}
