import Footer from "components/Footer";
import Header from "components/Header";
import { ReactNode } from "react";
import style from "./style.module.scss";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className={style.headerWrapper}>
        <Header />
      </header>
      <main className={style.mainWrapper}>{children}</main>
      <footer className={style.footerWrapper}>
        <Footer />
      </footer>
    </>
  );
}
