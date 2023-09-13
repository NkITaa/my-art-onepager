function Checkbox() {
  return (
    <div className="inline-flex">
      <input type="checkbox" className="default:ring-2 ..." />
      <div>
        <span className="">Ich habe die </span>
        <span className="font-bold">Datenschutzerklärung</span>
        <span className=""> gelesen blyat</span>
      </div>
    </div>
  );
}

export default Checkbox;
