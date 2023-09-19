import { Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";

function Logo({ size = "large" }: { size?: "large" | "small" }) {
  return size === "large" ? (
    <Link to="/">
      <div className="items-end gap-4 flex p-4 ">
        <img
          src={logo}
          className="w-10 h-10 lg:w-16 lg:h-16 dark:filter dark:invert"
          alt="MyArt Logo"
        ></img>
        <div>
          <span className="text-gray-400 dark:text-neutral-500 text-[22px] lg:text-[32px] font-extrabold leading-[38.40px]">
            My
          </span>
          <span className="text-zinc-800 dark:text-zinc-400 text-[22px] lg:text-[32px] font-extrabold leading-[38.40px]">
            Art
          </span>
        </div>
      </div>
    </Link>
  ) : (
    <Link className="fixed" to="/">
      <div className="items-end gap-4 flex p-4 ">
        <img
          src={logo}
          className="w-8 h-8 dark:filter dark:invert"
          alt="MyArt Logo"
        ></img>
        <div>
          <span className="text-gray-400 dark:text-neutral-500 text-base font-extrabold leading-tight">
            My
          </span>
          <span className="text-zinc-800 dark:text-zinc-400 text-base font-extrabold leading-tight">
            Art
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
