import cl from "./Menu.module.css";
import { Section } from "@shared/ui/Section";
import { SectionTitle } from "@shared/ui/SectionTitle";
import { SectionSubTitle } from "@shared/ui/SectionSubTitle";
import { ContentContainer } from "@shared/ui/ContentContainer";
import { MenuCard } from "@shared/ui/MenuCard/ui/MenuCard";

export const Menu = ({}) => {
  return (
    <Section aria-label="Меню">
      <ContentContainer>
        <header className={cl.menuHeader}>
          <SectionTitle>Меню</SectionTitle>
          <SectionSubTitle>Блины, блюда и напитки</SectionSubTitle>
        </header>

        <div className={cl.menuGrid}>
          {/* Bliny */}
          <MenuCard
            title="Блины"
            items={[
              { name: "Без начинки", price: 50 },
              { name: "С ветчиной (2 шт)", price: 230 },
              { name: "С курицей, грибами и сыром", price: 310 },
              { name: "С сыром и грибами", price: 310 },
              { name: "С семгой и крем-сыром", price: 390 },
              { name: "Рулетики с печенью", price: 310 },
            ]}
          />

          {/* Hot meat */}
          <MenuCard
            title="Горячие блюда"
            items={[
              { name: "«Запечёнка» (с овощами)", price: 650 },
              { name: "«Королевски» (под сыром)", price: 550 },
              { name: "Утка «Гарри» (с яблоками)", price: 750 },
              { name: "Шашлык из курицы с соусом", price: 550 },
              { name: "Шашлык из свинины с аджикой", price: 600 },
              { name: "Мясо в оранжевом соусе", price: 550 },
            ]}
          />

          {/* Pasta */}
          <MenuCard
            title="Паста"
            items={[
              { name: "«Карбонара» с ветчиной", price: 350 },
              { name: "С курицей и грибами", price: 350 },
              { name: "С мидиями и помидорами", price: 450 },
            ]}
          />

          {/* Drinks / Beer */}
          <MenuCard
            title="Напитки"
            items={[
              { name: "Мохито", price: 550 },
              { name: "Ром-кола", price: 400 },
              { name: "Сангрия", price: 700 },
              { name: "Пиво разливное (Жигулёвское)", price: 150 },
              { name: "Пиво бутылочное", price: 150 },
            ]}
          />
          <MenuCard
            title="К пиву"
            items={[
              { name: "Арахис", price: 100 },
              { name: "Чипсы", price: 150 },
              { name: "Фисташки", price: 360 },
              { name: "Гренки фирменные", price: 200 },
              { name: "Кальмар фри", price: 500 },
            ]}
          />
        </div>
      </ContentContainer>
    </Section>
  );
};
