function Image({ url, key }: { url: string; key: number }) {
  return (
    <img
      key={key}
      className="rounded-[32.40px] border border-black border-opacity-50"
      src={url}
    />
  );
}
export default Image;
