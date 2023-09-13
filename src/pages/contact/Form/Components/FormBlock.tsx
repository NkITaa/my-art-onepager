import { useState } from "react";

function FormBlock({
  onChange,
  label,
  name,
  error,
  value,
}: {
  onChange: any;
  label: string;
  name: string;
  error: string;
  value: any;
}) {
  const [firstRender, setFirstRender] = useState(true);

  const setAndOnChange = (event: {
    target: { name: string; value: string };
  }) => {
    onChange(event);
    setFirstRender(false);
  };

  const isValid = (message: string) => {
    if (message.length > 10) return true;
    return false;
  };

  return (
    <div className="">
      <label className="">{label}</label>
      <textarea
        className="block w-full resize-y h-32 p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200"
        name={name}
        value={value}
        onChange={firstRender ? setAndOnChange : onChange}
      />
      {firstRender ? (
        <p className="invisible">Das ist ein Picasso</p>
      ) : !isValid(value) ? (
        <p className="text-pink-600 text-sm">{error}</p>
      ) : (
        <p className="invisible">d</p>
      )}
    </div>
  );
}

export default FormBlock;
