import s from "./Tariffs.module.css";
import image from "../../assets/20241022225030_1.jpg";

const Tariffs = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Пакети</h2>
      <div className={s.tariffs}>
        <ul className={s.tariffsList}>
          <li className={s.tariffItem}>
            <img className={s.tariffImg} src={image} alt="placeholder" />
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
            </div>
          </li>
          <li className={s.tariffItem}>
            <img className={s.tariffImg} src={image} alt="" />
            <div className={s.tariffText}>
              <h3>Basic</h3>
              <p className={s.desc}>
                Для тих, хто намірений не лише спробувати себе в ролі ютубера,
                а, може, й навтіь заробити на цьому.
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
            </div>
          </li>
          <li className={s.tariffItem}>
            <img className={s.tariffImg} src={image} alt="" />
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
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Tariffs;
