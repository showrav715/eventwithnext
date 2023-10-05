import Head from "next/head";
import React from "react";

function Meta({ title, desc }) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta property="description" content={desc} />
    </Head>
    </>
  );
}

export default Meta;
