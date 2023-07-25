import Head from "next/head";

const HeadComponent = ({ styles }) => {
  return (
    <Head>
      <title>Trisha Sairene Real</title>
      <link rel="icon" href="/icon01.png" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="author" content="bslthemes" />

      {styles?.map((style) => (
        <link
          key={style}
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
