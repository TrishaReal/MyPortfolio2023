import React from "react";
import { useState, useEffect } from "react";

const Loader = (props) => {
  const scripts = props?.scripts || [];

  const [scriptsContent, setScriptsContent] = useState([]);

  const [scriptList, satScriptList] = useState([...scripts]);

  const fetchScripts = async (list) => {
    const scriptsContent = await Promise.all(
      list?.map(async (scriptUrl) => {
        const absoluteUrl = new URL(
          scriptUrl,
          window.location.origin
        ).toString();

        const response = await fetch(absoluteUrl);

        const content = await response.text();

        return content;
      })
    );

    setScriptsContent(scriptsContent);
  };

  useEffect(() => {
    fetchScripts(scriptList);
  }, [scriptList]);

  useEffect(() => {
    scriptsContent.forEach((content) => {
      if (content) {
        const script = document?.createElement("script");

        script.innerHTML = content;

        script.setAttribute("defer", "defer");

        document?.body?.appendChild(script);
      }
    });
  }, [scriptsContent]);

  return null;
};

export default Loader;
