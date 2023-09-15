import { useRef, useState } from "react";

function ExtendableButton({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight + 20}px`);
  }

  return (
    <>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="self-stretch overflow-hidden transition-max-height duration-700 ease-in-out leading-loose"
      >
        <p className="lg:text-xl">{content}</p>
      </div>
      <button
        className={`w-[200px] h-12 lg:w-[234px] lg:h-16 py-4 ${
          active
            ? "bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-gray-400 dark:border-gray-600"
            : "bg-neutral-900 dark:bg-neutral-100"
        }  rounded-xl justify-center items-center gap-2 inline-flex`}
        onClick={toggleAccordion}
      >
        <div
          className={`${
            active ? "" : "text-zinc-100 dark:text-neutral-900"
          }  lg:text-xl`}
        >
          {title}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={`${active ? "black" : "white"}`}
          className={`${
            active
              ? "transform duration-700 ease rotate-180 "
              : "transform duration-700 ease"
          } inline-block h-6 w-6 dark:invert`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </>
  );
}

export default ExtendableButton;
