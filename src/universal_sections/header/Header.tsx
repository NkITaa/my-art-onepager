import { Outlet } from "react-router-dom";
import { useState } from "react";
import Logo from "./components/Logo";
import NavLarge from "./components/NavLarge";
import Hamburger from "./components/Hamburger";
import Drawer from "./components/Drawer";

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
            <Logo />
            <NavLarge navLinks={navLinks} />
            <Hamburger handleMenu={handleMenu} open={open} />
          </div>
          {open && <Drawer navLinks={navLinks} handleMenu={handleMenu} />}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
