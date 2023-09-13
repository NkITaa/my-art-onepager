function FormBlock({
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
      <textarea
        className="block w-full resize-y peer h-32 p-4 bg-neutral-50 rounded-xl border text-gray-700 border-gray-200"
        name={name}
        value={value}
        onChange={onChange}
        minLength={minLength}
      />
      <p className="invisible peer-invalid:visible text-pink-600 text-sm">
        {error}
      </p>
    </div>
  );
}

export default FormBlock;
