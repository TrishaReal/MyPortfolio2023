import Footer from "./Footer";
import GoTop from "./GoTop";
import HeadComponent from "./HeadComponent";
import Header from "./Header";

const Layout = (props) => {
  const { children, styles } = props;

  const socialLinks = [
    { icon: "github", url: "https://github.com/TrishaReal" },
    { icon: "linkedin-in", url: "https://www.linkedin.com/in/trishasairenereal/" },
    { icon: "behance", url: "https://www.behance.net/trishasairenereal" },
  ];


  return (
    <>
      <HeadComponent styles={styles} />

      <div className="container-page">
        <Header socialLinks={socialLinks} />
        <div className="wrapper">{children}</div>
        <Footer socialLinks={socialLinks} />
        <GoTop />

      </div>
    </>
  );
};

export default Layout;
