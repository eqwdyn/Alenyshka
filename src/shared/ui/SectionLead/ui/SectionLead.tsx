import type { FC, PropsWithChildren } from "react";
import cl from "./SectionLead.module.css";

interface Props {}

export const SectionLead: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return <p className={`${cl.sectionLead} ${className || ""}`}>{children}</p>;
};
