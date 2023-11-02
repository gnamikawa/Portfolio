// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const MyDocument = () => {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
