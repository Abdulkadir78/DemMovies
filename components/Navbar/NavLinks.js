import { useRouter } from "next/router";

import NavLink from "./NavLink";

const links = [
  {
    name: "Trending",
    to: "/",
    slug: undefined,
  },
  {
    name: "Movies",
    to: "/?sort_by=movie",
    slug: "movie",
  },
  {
    name: "TV",
    to: "/?sort_by=tv",
    slug: "tv",
  },
];

const allowedSlugs = ["movie", "tv"];

function NavLinks() {
  const router = useRouter();
  const { sort_by } = router.query;

  return (
    <div className="ml-5 sm:ml-12 mt-5 sm:mt-0">
      {links.map((link, index) => (
        <NavLink
          key={index}
          link={link}
          // if slug is not present in allowedSlugs, make the trending tab active
          // "!link.slug" because the trending tab has no slug (otherwise all tabs become active)
          active={
            link.slug === sort_by ||
            (!allowedSlugs.includes(sort_by) && !link.slug)
          }
        />
      ))}
    </div>
  );
}

export default NavLinks;
