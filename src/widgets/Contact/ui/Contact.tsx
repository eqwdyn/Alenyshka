import { Section } from "@shared/ui/Section";
import cl from "./Contact.module.css";
import { SectionTitle } from "@shared/ui/SectionTitle";
import { ContentContainer } from "@shared/ui/ContentContainer";

export const Contact = ({}) => {
  return (
    <Section aria-label="Контакты">
      <ContentContainer className={cl.contactGrid}>
        <div className={cl.contactInfo}>
          <SectionTitle>Как нас найти</SectionTitle>
          <address className={cl.address}>
            <p>
              <strong>Адрес:</strong>
              <br />
              Севастополь, сквер 60-летия СССР
            </p>
            <p>
              <strong>Телефон:</strong>
              <br />
              <a href="tel:+79788323685">+7 (978) 832-36-85</a>
            </p>
            <p>
              <strong>График:</strong>
              <br />
              Понедельник — Воскресенье, 10:00 – 23:00
            </p>
          </address>
        </div>

        <div className={cl.mapCard}>
          <h3>Алёнушка</h3>
          <p>Севастополь, сквер 60-летия СССР</p>
          <p>+7 (978) 832-36-85</p>
        </div>
      </ContentContainer>
    </Section>
  );
};
