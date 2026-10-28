import Image from "next/image";
import cl from "./BarPhoto.module.css";

export const BarPhoto = ({}) => {
  return (
    <figure className={cl.photoStrip} aria-label="Барная зона кафе">
      <Image
        src="/images/bar.jpg"
        alt="Барная зона кафе Алёнушка"
        fill
        className={cl.photoStripImage}
        sizes="100vw"
      />
    </figure>
  );
};
