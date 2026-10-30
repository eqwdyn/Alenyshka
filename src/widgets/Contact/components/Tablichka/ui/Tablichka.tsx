import type { FC, PropsWithChildren } from "react";
import cl from "./Tablichka.module.css";

export const Tablichka: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cl.signWrapper}>
      <div className={`${cl.nail} ${cl.nailTopLeft}`} />
      <div className={`${cl.nail} ${cl.nailTopRight}`} />
      <div className={`${cl.nail} ${cl.nailBottomLeft}`} />
      <div className={`${cl.nail} ${cl.nailBottomRight}`} />

      <div className={cl.signText}>{children}</div>
    </div>
  );
};
