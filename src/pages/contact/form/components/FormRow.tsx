import { useState } from "react";

function FormRow({
  onChange,
  label,
  name,
  error,
  value,
  globalValid,
  email = false,
  phone = false,
}: {
  onChange: any;
  label: string;
  name: string;
  error: string;
  email?: boolean;
  phone?: boolean;
  value: any;
  globalValid: boolean;
}) {
  const [firstRender, setFirstRender] = useState(true);

  const setAndOnChange = (event: {
    target: { name: string; value: string };
  }) => {
    onChange(event);
    setFirstRender(false);
  };

  const isValid = (message: string) => {
    if (phone) return true;
    if (email && !message.includes("@")) return false;
    if (email && message.length < 4) return false;
    if (message.length > 1) return true;
    return false;
  };
  return (
    <div className="">
      <label className="lg:text-xl">{label}</label>
      <input
        className="block sm:w-[600px] lg:w-[328px] w-full p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200 justify-between items-center gap-2 "
        name={name}
        type="text"
        value={value}
        onChange={firstRender ? setAndOnChange : onChange}
      />
      {globalValid ? (
        firstRender ? (
          <p className="invisible">Das ist ein Picasso</p>
        ) : !isValid(value) ? (
          <p className="text-pink-600 text-sm">{error}</p>
        ) : (
          <p className="invisible">d</p>
        )
      ) : !isValid(value) ? (
        <p className="text-pink-600 text-sm">{error}</p>
      ) : (
        <p className="invisible">d</p>
      )}
    </div>
  );
}

export default FormRow;
