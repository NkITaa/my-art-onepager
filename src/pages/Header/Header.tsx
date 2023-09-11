import { Outlet } from "react-router-dom";
import { useState } from "react";
import Logo from "./Components/Logo";
import NavLarge from "./Components/NavLarge";
import Hamburger from "./Components/Hamburger";
import Drawer from "./Components/Drawer";

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
