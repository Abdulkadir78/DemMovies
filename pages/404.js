import Link from "next/link";

function Custom404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-5">
      <h1 className="text-8xl font-brand">404</h1>

      <div className="text-gray-300">
        <p className="text-lg mt-2">
          The page you are looking for does not exist
        </p>
        <p className="text-lg">
          You may have mistyped the url or the page may have moved.
        </p>

        <Link href="/" passHref>
          <button
            className="px-6 py-3 mt-7 bg-primary bg-opacity-80 font-medium rounded-md
          hover:scale-105 transition duration-300"
          >
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
