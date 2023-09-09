import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-[2336px] h-28 px-40 py-6 bg-white justify-center items-center inline-flex">
        <div className="grow shrink basis-0 h-16 justify-start items-center flex">
          <div className="grow shrink basis-0 h-16 justify-start items-start flex">
            <div className="justify-center items-end gap-4 flex">
              <div className="w-16 h-16 relative" />
              <div>
                <Link to="/">
                  <span className="text-gray-400 text-[32px] font-extrabold leading-[38.40px]">
                    My
                  </span>
                  <span className="text-zinc-800 text-[32px] font-extrabold leading-[38.40px]">
                    Art
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <nav>
            <ul className="justify-center items-center gap-12 flex">
              <li className="text-xl leading-loose">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-xl leading-loose">
                <Link to="/contact">Kontakt</Link>
              </li>
              <li className=" text-xl leading-loose">
                <Link to="/press">Presse</Link>
              </li>
              <li className="text-xl leading-loose">
                <Link to="/faq">FAQ</Link>
              </li>
              <Link to="/download">
                <li className="px-8 py-4 bg-neutral-900 rounded-xl justify-center items-center flex">
                  <div className="text-zinc-100 text-xl font-bold leading-loose">
                    Download
                  </div>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
