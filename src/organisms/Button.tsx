import { Link, To } from "react-router-dom";

function Button({ link, text }: { link: To | undefined; text: string }) {
  return (
    <>
      {link ? (
        <Link className="w-32" to={link}>
          <div className=" p-4 bg-neutral-900 dark:bg-neutral-100 rounded-xl">
            <div className="text-zinc-100 dark:text-neutral-900 lg:text-xl text-center font-bold">
              {text}
            </div>
          </div>
        </Link>
      ) : (
        <button
          className="p-4 bg-neutral-900 dark:bg-neutral-100 rounded-xl"
          type="submit"
          value="Submit"
        >
          <div className="text-zinc-100 dark:text-neutral-900 lg:text-xl text-center font-bold">
            {text}
          </div>
        </button>
      )}
    </>
  );
}

export default Button;
