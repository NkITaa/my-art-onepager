import { Link } from "react-router-dom";
import Button from "../../organisms/Button";

function NavLarge({
  navLinks,
}: {
  navLinks: { name: string; link: string }[];
}) {
  return (
    <>
      <nav className="hidden md:block">
        <ul className="ml-10 flex items-baseline space-x-4">
          {navLinks.map((navLink, index) => (
            <li key={index} className="text-xl leading-loose">
              <Link onClick={() => window.scrollTo(0, 0)} to={navLink.link}>
                {navLink.name}
              </Link>
            </li>
          ))}
          <Button download link={"/my-art-onepager/download"} text="Download" />
        </ul>
      </nav>
    </>
  );
}

export default NavLarge;
