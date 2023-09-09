import { Link } from "react-router-dom";

function Button() {
  return (
    <>
      <Link to="/download">
        <div className="w-[165px] h-16 px-8 py-4 bg-neutral-900 rounded-xl justify-center items-center inline-flex">
          <div className="text-zinc-100 text-xl font-bold leading-loose">
            Download
          </div>
        </div>
      </Link>
    </>
  );
}

export default Button;
