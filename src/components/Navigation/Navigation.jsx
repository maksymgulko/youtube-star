import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <div className={s.container}>
        <nav>
          <a className={s.title} href="#">
            YouTube <span className={s.listLink}>Star</span>
          </a>
          <ul className={s.list}>
            <li className={s.listItem}>
              <a className={s.listLink} href="#forwho">
                Для кого
              </a>
            </li>
            <li>
              <a className={s.listLink} href="#faq">
                Питання
              </a>
            </li>
            <li>
              <a className={s.listLink} href="#value">
                Цінність курсу
              </a>
            </li>
            <li>
              <a className={s.listLink} href="#tariffs">
                Пакети
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;
