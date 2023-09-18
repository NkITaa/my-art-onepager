import { Outlet } from "react-router-dom";
import { useState } from "react";
import Logo from "./components/Logo";
import NavLarge from "./components/NavLarge";
import Hamburger from "./components/Hamburger";
import Drawer from "./components/Drawer";

const navLinks = [
  {
    name: "About Us",
    link: "/my-art-onepager/about",
  },
  {
    name: "Kontakt",
    link: "/my-art-onepager/contact",
  },
  {
    name: "Presse",
    link: "/my-art-onepager/press",
  },
  {
    name: "FAQ",
    link: "/my-art-onepager/faq",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="bg-white dark:bg-neutral-900">
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
