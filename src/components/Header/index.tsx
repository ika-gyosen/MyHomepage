import Link from "next/link";
import style from "./style.module.scss";

function Header() {
  return (
    <header>
      <h1 className={style.headerLogo}>
        <Link href="/" passHref={true}>
          <a className={style.headerLink}>Minami Beach</a>
        </Link>
      </h1>
    </header>
  );
}

export default Header;
