import Head from "next/head";

const HeadComponent = ({ styles }) => {
  return (
    <Head>
      <title>Trisha Sairene Real</title>
      <link rel="icon" href="/icon01.png" />
      {/* <link rel="icon" href="/3.png" /> */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="author" content="bslthemes" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&amp;display=swap"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=auto"
        type="text/css"
        media="all"
      />
      {/* 
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" /> */}

      {styles?.map((style) => (
        <link
          // key={style}
          rel="stylesheet"
          href={style}
          type="text/css"
          media="all"
        />
      ))}
    </Head>
  );
};

export default HeadComponent;
