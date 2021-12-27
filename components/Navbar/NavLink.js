import Link from "next/link";

function NavLink({ link, active }) {
  return (
    <Link href={`${link.to}`} passHref>
      <span
        className={`mr-5 cursor-pointer hover:text-primary transition 
        duration-300 text-sm lg:text-base ${active && "text-primary"}`}
      >
        {link.name}
      </span>
    </Link>
  );
}

export default NavLink;
