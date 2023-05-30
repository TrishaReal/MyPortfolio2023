import Footer from "./Footer";
import HeadComponent from "./HeadComponent";
import Header from "./Header";
import Preloader from "./Preloader";

const Layout = (props) => {
  const { children, styles } = props;

  return (
    <>
      <HeadComponent styles={styles} />

      <div class="container-page">
        <Preloader />
        <Header />
        <div class="wrapper">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
