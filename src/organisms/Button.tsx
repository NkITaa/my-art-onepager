import { Link, To } from "react-router-dom";

function Button({ link, text }: { link: To | undefined; text: string }) {
  return (
    <>
      {link ? (
        <Link to={link}>
          <div className="w-[165px] h-16 px-8 py-4 bg-neutral-900 rounded-xl justify-center items-center inline-flex">
            <div className="text-zinc-100 text-xl font-bold leading-loose">
              {text}
            </div>
          </div>
        </Link>
      ) : (
        <button
          className="w-[165px] h-16 px-8 py-4 bg-neutral-900 rounded-xl justify-center items-center inline-flex"
          type="submit"
          value="Submit"
        >
          <div className="text-zinc-100 text-xl font-bold leading-loose">
            {text}
          </div>
        </button>
      )}
    </>
  );
}

export default Button;
