import fs from "fs";
import path from "path";

const getInit = async () => {
  const Loader = (folder) => {
    const folderPath = folder?.replace(/\\/g, "/");

    console.log("----> ", folderPath);

    const cssFiles = fs?.readdirSync(folderPath);
    const relativePath = folderPath?.split("public/")[1];
    const cssPath = cssFiles.map((filename) =>
      path.join(relativePath, filename)
    );
    return [...cssPath];
  };

  const styles = Loader("assets/css/");
  const scripts = Loader("assets/js/");

  return {
    styles: styles,
    scripts: scripts,
  };
};

export default getInit;
