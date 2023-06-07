import Footer from "./Footer";
import HeadComponent from "./HeadComponent";
import Header from "./Header";
import Preloader from "./Preloader";

const Layout = (props) => {
  const { children, styles } = props;

  return (
    <>
      <HeadComponent styles={styles} />

      <div className="container-page">
        {/* <Preloader /> */}
        <Header />
        <div className="wrapper">{children}</div>
        <Footer />
      </div>

      {/* <div className="cursor"></div> */}
    </>
  );
};

export default Layout;
