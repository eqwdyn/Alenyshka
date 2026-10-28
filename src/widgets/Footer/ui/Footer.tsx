import { ContentContainer } from "@shared/ui/ContentContainer";
import cl from "./Footer.module.css";

export const Footer = ({}) => {
  return (
    <footer className={cl.footer}>
      <ContentContainer>
        <p className={cl.footerLogo}>Алёнушка</p>
        <p className={cl.footerCopy}>
          {/* <span>&copy; 2026 Семейное кафе в Севастополе</span> */}
          <span>Демо-лендинг, данные из Яндекс.Карт</span>
          <span>Сайт будет удалён по первой просьбе правообладателя</span>
        </p>
      </ContentContainer>
    </footer>
  );
};
