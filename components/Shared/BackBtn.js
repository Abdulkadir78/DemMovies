import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";

function BackBtn() {
  const router = useRouter();

  return (
    <button
      className="flex items-end cursor-pointer hover:text-primary transition duration-300"
      onClick={() => {
        router.back();
      }}
    >
      <IoIosArrowRoundBack size={26} />
      Go back
    </button>
  );
}

export default BackBtn;
