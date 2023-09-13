import { Link } from "react-router-dom";

function Logo({ size = "large" }: { size?: "large" | "small" }) {
  return size === "large" ? (
    <Link to="/">
      <div className="items-end gap-4 flex p-4 ">
        <img
          src="../../assets/logo.svg"
          className="w-16 h-16"
          alt="MyArt Logo"
        ></img>
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
  ) : (
    <Link className="fixed" to="/">
      <div className="items-end gap-4 flex p-4 ">
        <img
          src="../../assets/logo.svg"
          className="w-8 h-8"
          alt="MyArt Logo"
        ></img>
        <div>
          <span className="text-gray-400 text-base font-extrabold leading-tight">
            My
          </span>
          <span className="text-zinc-800 text-base font-extrabold leading-tight">
            Art
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
