import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.slogan}>
        <h1>
          <span className={s.chalkUnderline}>YouTube</span> Стартер: Від Ідеї до
          Першого Мільйона Переглядів
        </h1>
      </div>
      <div className={s.mainText}>
        <p className={s.desc}>
          Створюй ютуб канали для себе або свого бізнесу та заробляй витрачаючи
          мінімум часу на створення контенту!
        </p>
        <ul className={s.reasons}>
          <li>✅Навчись заробляти на монетизаних ютуб каналах з нуля </li>
          <li>
            ✅Стань успішним ютубером і перетвори свою роботу на прибутковий
            бізнес
          </li>
        </ul>
      </div>
      <div className={s.buy}>
        <p className={s.buyText}>
          Купуй сьогодні за супер ціною{" "}
          <span
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red",
            }}
          >
            $$${" "}
          </span>
          $$$
        </p>
        <button className={s.buyBtn} type="button">
          Купити зараз
        </button>
      </div>
      {/* <div className={s.line}></div> */}
    </div>
  );
};
export default Hero;
