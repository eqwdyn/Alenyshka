import Image from "next/image";
import cl from "./About.module.css";
import { ContentContainer } from "@shared/ui/ContentContainer";
import { SectionTitle } from "@shared/ui/SectionTitle";
import { SectionLead } from "@shared/ui/SectionLead";
import { Section } from "@shared/ui/Section";

export const About = ({}) => {
  return (
    <Section className={cl.section} aria-label="Об атмосфере">
      <ContentContainer>
        <div className={cl.aboutGrid}>
          <div className={cl.aboutText}>
            <SectionTitle>Уютная атмосфера</SectionTitle>
            <SectionLead>
              Деревянная беседка, мягкий свет фонарей, зелень вокруг — это место
              для тихих вечеров и семейных встреч.
            </SectionLead>
            <SectionLead>
              Мы готовим с любовью: блины, горячие блюда из мяса, паста и
              напитки в уютной обстановке. Приходите, когда хочется просто
              отдохнуть.
            </SectionLead>
          </div>
          <figure className={cl.aboutImageWrap}>
            <Image
              src="/images/interior.jpg"
              alt="Интерьер кафе Алёнушка — деревянная беседка с столами"
              fill
              className={cl.aboutImage}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </figure>
        </div>
      </ContentContainer>
    </Section>
  );
};
