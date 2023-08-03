import Footer from "./Footer";
import HeadComponent from "./HeadComponent";
import Header from "./Header";

const Layout = (props) => {
  const { children, styles } = props;

  return (
    <>
      <HeadComponent styles={styles} />

      <div className="container-page">
        <Header />
        <div className="wrapper">{children}</div>
        <Footer />

      </div>
    </>
  );
};

export default Layout;
