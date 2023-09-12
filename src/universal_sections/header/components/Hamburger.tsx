import { FaBars, FaTimes } from "react-icons/fa";

function Hamburger({
  handleMenu,
  open,
}: {
  handleMenu: () => void;
  open: boolean;
}) {
  return (
    <>
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
    </>
  );
}

export default Hamburger;
