import { Link } from "react-router-dom";
import Button from "../../../organisms/Button";
import Logo from "./Logo";

function Drawer({
  navLinks,
  handleMenu,
}: {
  navLinks: { name: string; link: string }[];
  handleMenu: () => void;
}) {
  return (
    <>
      <div className="md:hidden z-9 ">
        <div className="w-full h-full fixed top-0 right-0" onClick={handleMenu}>
          <div className="top-0 right-0 w-[50vw] sm:w-[35vw] bg-white fixed h-full ">
            <div>
              <div className="flex flex-col items-end">
                <Logo size="small" />
                <div className="py-8 sm:py-12"> </div>
                {navLinks.map((navLink, index) => (
                  <li key={index} className="block py-3 px-6">
                    <Link to={navLink.link}>
                      <p className="text-neutral-900 sm:text-[22px]">
                        {navLink.name}
                      </p>
                    </Link>
                  </li>
                ))}
                <div className="pt-4 sm:pt-10">
                  <Button link={"/download"} text="Download" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
