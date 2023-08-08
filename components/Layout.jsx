import Footer from "./Footer";
import GoTop from "./GoTop";
import HeadComponent from "./HeadComponent";
import Header from "./Header";

const Layout = (props) => {
  const { children, styles } = props;

  const socialLinks = [
    { name: "Github", icon: "github", url: "https://github.com/TrishaReal" },
    { name: "Linkedin", icon: "linkedin", url: "https://www.linkedin.com/in/trishasairenereal/" },
    { name: "Behance", icon: "behance", url: "https://www.behance.net/trishasairenereal" },
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
