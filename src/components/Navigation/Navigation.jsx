import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <a className={s.title} href="">
            YouTube <span>Star</span>
          </a>
          <ul className={s.list}>
            <li>
              <a href="">Для кого</a>
            </li>
            <li>
              <a href="">Питання</a>
            </li>
            <li>
              <a href="">Цінність курсу</a>
            </li>
            <li>
              <a href="">Пакети</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;
