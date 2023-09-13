import { FaBars } from "react-icons/fa";

function Hamburger({
  handleMenu,
  open,
}: {
  handleMenu: () => void;
  open: boolean;
}) {
  return (
    <>
      <nav className="md:hidden z-10 h-24 p-4">
        <button onClick={handleMenu} type="button" className=" text-gray-400">
          <span className="sr-only overflow-hidden">Open main menu</span>
          <FaBars
            className={`block absolute ${
              open ? "rotate-45 opacity-0" : ""
            } h-6 w-6 transform transition duration-700 ease-in-out`}
          />
        </button>
      </nav>
    </>
  );
}

export default Hamburger;
