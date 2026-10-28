import cl from "./page.module.css";
import { Hero } from "@widgets/Hero";
import { About } from "@widgets/About";
import { Menu } from "@widgets/Menu";
import { Contact } from "@widgets/Contact";
import { BarPhoto } from "@widgets/BarPhoto";

export const runtime = "edge";

export default function AleyushkaLanding() {
  return (
    <div className={cl.root}>
      <Hero />
      <About />
      <Menu />
      <BarPhoto />
      <Contact />
    </div>
  );
}
