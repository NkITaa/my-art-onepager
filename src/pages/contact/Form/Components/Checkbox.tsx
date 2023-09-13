function Checkbox({
  checked,
  onChange,
  name,
}: {
  checked: boolean;
  onChange: any;
  name: string;
}) {
  return (
    <div className="inline-flex pb-3 pt-6">
      <input
        name={name}
        type={name}
        defaultChecked={checked}
        onChange={onChange}
        className=""
      />
      <div className="pl-2">
        <span className="">Ich habe die </span>
        <span className="font-bold">Datenschutzerklärung</span>
        <span className=""> gelesen blyat</span>
      </div>
    </div>
  );
}

export default Checkbox;
