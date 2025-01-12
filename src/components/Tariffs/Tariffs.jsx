import s from "./Tariffs.module.css";
import silver from "../../assets/s2.jpg";
import gold from "../../assets/g2.jpg";
import diamond from "../../assets/d2.jpg";

const Tariffs = () => {
  return (
    <div className={s.container}>
      <h2 id="tariffs" className={s.title}>
        Пакети
      </h2>
      <div className={s.tariffs}>
        <ul className={s.tariffsList}>
          <li className={s.tariffItem}>
            <img className={s.tariffImg} src={silver} alt="placeholder" />
            <div className={s.tariffText}>
              <h3>Start</h3>
              <p className={s.desc}>
                Для всіх, хто хоче самостійно створити YouTube канал та
                спробувати себе в ролі ютубера.
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Тривалість курсу</span>: 3
                модулі (8 уроків)
              </p>
              <p
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                }}
              >
                1200 UAH
              </p>
              <p>890 UAH</p>
              <a className={s.listLink} href="#start">
                <button className={s.button} type="button">
                  Детальніше
                </button>
              </a>
            </div>
          </li>
          <li className={s.tariffItem}>
            <img className={s.tariffImg} src={gold} alt="" />
            <div className={s.tariffText}>
              <h3>Basic</h3>
              <p className={s.desc}>
                Для тих, хто готовий не лише спробувати себе в ролі ютубера і
                заробляти на цьому.
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Тривалість курсу</span>: 3
                модулі (10 уроків та деякі корисні матеріали)
              </p>
              <p
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                }}
              >
                2800 UAH
              </p>
              <p>2490 UAH</p>
              <a className={s.listLink} href="#basic">
                <button className={s.button} type="button">
                  Детальніше
                </button>
              </a>
            </div>
          </li>
          <li className={s.tariffItem}>
            <img className={s.tariffImg} src={diamond} alt="" />
            <div className={s.tariffText}>
              <h3>Advanced</h3>
              <p className={s.desc}>
                Для тих, хто дійсно хоче стати професійним контент-мейкером та
                зробити це своїм основним видом діяльності.
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Тривалість курсу</span>: 3
                модулі (11 уроків та багато інших корисних матеріалів)
              </p>
              <p
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                }}
              >
                5000 UAH
              </p>
              <p>4290 UAH</p>
              <a className={s.listLink} href="#advanced">
                <button className={s.button} type="button">
                  Детальніше
                </button>
              </a>
            </div>
          </li>
        </ul>
      </div>
      {/* <div className={s.line}></div> */}
    </div>
  );
};
export default Tariffs;
