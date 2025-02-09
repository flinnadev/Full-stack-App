import Navigation from "../Navigation";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.heading}>Heading</h1>
      <Navigation />
    </header>
  );
}

export default Header;
