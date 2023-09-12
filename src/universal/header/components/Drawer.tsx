import { Link } from "react-router-dom";
import Button from "../../../organisms/Button";

function Drawer({
  navLinks,
  handleMenu,
}: {
  navLinks: { name: string; link: string }[];
  handleMenu: () => void;
}) {
  return (
    <>
      <div className="md:hidden z-9">
        <div className="w-full h-full fixed top-0 right-0" onClick={handleMenu}>
          <div className="top-0 right-0 w-[35vw] bg-white text-white fixed h-full ">
            <h2 className="mt-20 text-4xl font-semibold text-white">
              {navLinks.map((navLink, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to={navLink.link}>
                    <p className="text-neutral-900 font-bold ">
                      {navLink.name}
                    </p>
                  </Link>
                </li>
              ))}
              <Button link={"/download"} text="Download" />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
