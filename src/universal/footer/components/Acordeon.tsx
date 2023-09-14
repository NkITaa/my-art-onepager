import { Link } from "react-router-dom";

function Acordeon({
  header,
  infos,
  externalLink = false,
}: {
  header: string;
  infos: { name: string; url: string }[];
  externalLink?: boolean;
}) {
  return (
    <>
      <div>
        <div className="text-xl font-bold leading-loose">{header}</div>
        <ul>
          {infos.map((info, index) => {
            return (
              <li key={index} className=" text-xl leading-loose">
                <Link
                  to={info.url}
                  {...(externalLink
                    ? { target: "_blank", rel: "noopener noreferrer " }
                    : null)}
                >
                  <div>{info.name}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Acordeon;
