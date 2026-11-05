export const Item = ({ img, title }: { img: string; title: string }) => {
  return (
    <div>
      <figure>
        <img width={200} src={img} />
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
};
