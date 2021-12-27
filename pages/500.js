import Link from "next/link";

function Custom500() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-5">
      <h1 className="text-8xl font-brand">500</h1>

      <div className="text-gray-300">
        <p className="text-lg mt-2">Oops! Something went wrong</p>
        <p className="text-lg">
          Our servers are unable to process your request. Please try again
          later.
        </p>
        <Link href="/" passHref>
          <button
            className="px-6 py-3 mt-7 bg-primary bg-opacity-80 font-medium rounded-md
          hover:scale-105 transition duration-300"
          >
            Back to safety
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Custom500;
