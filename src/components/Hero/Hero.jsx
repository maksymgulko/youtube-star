import s from "./Hero.module.css";
import image from "../../assets/close_white.jpg";
import { FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.slogan}>
        <h1>
          <span className={s.chalkUnderline}>YouTube</span> Стартер: Від Ідеї до
          Першого Мільйона Переглядів
        </h1>
      </div>
      <div className={s.wrap}>
        <img className={s.heroPhoto} src={image} alt="portrait photo" />
        <div className={s.mainText}>
          <p className={s.desc}>
            Створюй ютуб канали для себе або свого бізнесу та заробляй,
            витрачаючи мінімум часу на створення контенту!
          </p>
          <ul className={s.reasons}>
            <li>
              <FaYoutube className={s.icon} /> Навчись заробляти на
              монетизованих ютуб каналах з нуля{" "}
            </li>
            <li>
              <FaYoutube className={s.icon} /> Стань успішним ютубером і
              перетвори свою роботу на прибутковий бізнес
            </li>
          </ul>
          <div className={s.buy}>
            <p className={s.buyText}>
              Купуй сьогодні за супер ціною{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "red",
                }}
              >
                $$$
              </span>{" "}
              $$$
            </p>
            <a>
              <button className={s.buyBtn} type="button">
                Купити зараз
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
