import {
  isIOS,
  isIOS13,
  isIPad13,
  isIPhone13,
  isIPod13,
  isMobile,
  isMobileSafari,
} from "react-device-detect";
import { Link, To } from "react-router-dom";

function Button({
  link,
  text,
  download = false,
}: {
  link: To | undefined;
  text: string;
  download?: boolean;
}) {
  function getMobileOperatingSystem() {
    if (!isMobile) return "PC";
    else if (
      isIOS ||
      isMobileSafari ||
      isIOS13 ||
      isIPhone13 ||
      isIPad13 ||
      isIPod13
    )
      return "iOS";

    return "Android";
  }

  const os = getMobileOperatingSystem();

  return (
    <>
      {link ? (
        <Link
          className="w-32"
          onClick={download ? () => window.scrollTo(0, 0) : () => {}}
          to={
            download
              ? os === "iOS"
                ? "https://apps.apple.com/us/app/the-adventures-of-tintin/id451113313"
                : os === "Android"
                ? "https://play.google.com/store/apps/details?id=com.fpg.tintin&hl=en_US&pli=1"
                : link
              : link
          }
        >
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
