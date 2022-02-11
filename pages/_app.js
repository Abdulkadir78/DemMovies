import Head from "next/head";

import MoviesProvider from "../contexts/Movies";
import GenresProvider from "../contexts/Genres";
import Loader from "../components/Shared/Loader";
import useLoader from "../hooks/useLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { loading } = useLoader();

  return (
    <>
      <Head>
        <title>DemMovies</title>
        <meta name="description" content="A movie app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenresProvider>
        <MoviesProvider>
          {loading ? <Loader /> : <Component {...pageProps} />}
        </MoviesProvider>
      </GenresProvider>
    </>
  );
}

export default MyApp;
