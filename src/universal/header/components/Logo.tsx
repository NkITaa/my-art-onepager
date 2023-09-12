import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
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
    </>
  );
}

export default Logo;
