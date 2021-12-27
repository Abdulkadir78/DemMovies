import Head from "next/head";

function Meta({ title }) {
  return (
    <Head>
      <title>{title ? `DemMovies - ${title}` : "DemMovies"}</title>
    </Head>
  );
}

export default Meta;
