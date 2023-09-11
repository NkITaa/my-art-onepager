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
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180"
    );
  }

  return (
    <>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="self-stretch text-xl overflow-hidden transition-max-height duration-700 ease-in-out leading-loose"
      >
        {content}
      </div>
      <div className="self-stretch justify-start items-start gap-3 inline-flex">
        <button
          className="w-[234px] h-16 px-8 py-4 bg-neutral-900 rounded-xl justify-center items-center gap-2 inline-flex"
          onClick={toggleAccordion}
        >
          <div className="text-zinc-100 text-xl">{title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className={`${rotate} inline-block h-6 w-6`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ExtendableButton;
