import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../../organisms/Button";

const navLinks = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Kontakt",
    link: "/contact",
  },
  {
    name: "Presse",
    link: "/press",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <Link to="/">
              <div className="items-end gap-4 flex p-4">
                <img src="../../assets/logo.svg" alt="MyArt Logo"></img>
                <div>
                  <span className="text-gray-400 text-[32px] font-extrabold leading-[38.40px]">
                    My
                  </span>
                  <span className="text-zinc-800 text-[32px] font-extrabold leading-[38.40px]">
                    Art
                  </span>
                </div>
              </div>
            </Link>

            <nav className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((navLink, index) => (
                  <li key={index} className="text-xl leading-loose">
                    <Link to={navLink.link}>{navLink.name}</Link>
                  </li>
                ))}
                <Button link={"/download"} text="Download" />
              </ul>
            </nav>

            <nav className="-mr-2 flex md:hidden z-10">
              <button
                onClick={handleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </nav>
          </div>
          {open && (
            <div className="md:hidden z-9">
              <div
                className="w-full h-full fixed top-0 right-0"
                onClick={handleMenu}
              >
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
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
