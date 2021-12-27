import Head from "next/head";

import MoviesProvider from "../contexts/Movies";
import GenresProvider from "../contexts/Genres";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DemMovies</title>
        <meta name="description" content="A movie app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenresProvider>
        <MoviesProvider>
          <Component {...pageProps} />
        </MoviesProvider>
      </GenresProvider>
    </>
  );
}

export default MyApp;
