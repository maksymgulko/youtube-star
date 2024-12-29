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
              <a href="#forwho">Для кого</a>
            </li>
            <li>
              <a href="#faq">Питання</a>
            </li>
            <li>
              <a href="#value">Цінність курсу</a>
            </li>
            <li>
              <a href="#tariffs">Пакети</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;
