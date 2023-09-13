function FormRow({
  onChange,
  minLength,
  label,
  name,
  error,
  value,
}: {
  onChange: any;
  minLength: number;
  label: string;
  name: string;
  error: string;
  value: any;
}) {
  return (
    <div className="">
      <label className="">{label}</label>
      <input
        className="block lg:w-[328px] peer w-full p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200 justify-between items-center gap-2 "
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        minLength={minLength}
      />{" "}
      <p className="invisible peer-invalid:visible text-pink-600 text-sm">
        {error}
      </p>
    </div>
  );
}

export default FormRow;
