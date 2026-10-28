import type { FC } from "react";
import cl from "./MenuCard.module.css";

type MenuItem = {
  name: string;
  price: number;
};

type Props = {
  title: string;
  items: MenuItem[];
};

export const MenuCard: FC<Props> = ({ title, items }) => {
  return (
    <article className={cl.menuCard}>
      <h3 className={cl.menuCardTitle}>{title}</h3>
      <ul className={cl.menuList}>
        {items.map((item, idx) => (
          <li key={idx}>
            <span>{item.name}</span>
            <span>{item.price} ₽</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
