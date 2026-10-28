import Image from "next/image";
import cl from "./Hero.module.css";

export const Hero = ({}) => {
  return (
    <section className={cl.hero} aria-label="Главный экран">
      <div className={cl.heroImageWrap}>
        <Image
          src="/images/geen.jpg"
          alt="Алёнушка — уютное семейное кафе в Севастополе"
          fill
          priority
          className={cl.heroImage}
          sizes="100vw"
        />
        <div className={cl.heroOverlay} />
      </div>

      <div className={cl.heroContent}>
        <p className={cl.heroLabel}>Семейное кафе</p>
        <h1 className={cl.heroTitle}>Алёнушка</h1>
        <p className={cl.heroSubtitle}>Севастополь · сквер 60-летия СССР</p>
        <div className={cl.heroHours}>
          <span>Пн–Вс</span>
          <span>10:00 – 23:00</span>
        </div>
      </div>
    </section>
  );
};
