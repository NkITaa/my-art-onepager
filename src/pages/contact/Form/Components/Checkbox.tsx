import { useState } from "react";

function Checkbox({
  checked,
  onChange,
  name,
}: {
  checked: boolean;
  onChange: any;
  name: string;
}) {
  const [firstRender, setFirstRender] = useState(true);
  const [checkbox, setCheckbox] = useState(false);

  const setAndOnChange = (event: {
    target: { name: string; value: string };
  }) => {
    onChange(event);

    firstRender ? setFirstRender(false) : toggleFirstRender();
  };

  const toggleFirstRender = () => {
    setCheckbox(!checkbox);
    return checkbox;
  };

  return (
    <div className=" pb-3 ">
      <div className="inline-flex pt-6">
        <input
          name={name}
          type={name}
          defaultChecked={checked}
          onChange={setAndOnChange}
          className=""
        />
        <div className="pl-2">
          <span className="">Ich habe die </span>
          <span className="font-bold">Datenschutzerklärung</span>
          <span className=""> gelesen blyat</span>
        </div>
      </div>
      {firstRender ? (
        <p className="invisible text-sm">Das ist ein Picasso</p>
      ) : checkbox ? (
        <p className="text-pink-600 text-sm">sad</p>
      ) : (
        <p className="invisible text-sm">sad</p>
      )}
    </div>
  );
}

export default Checkbox;
