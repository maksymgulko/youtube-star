import s from "./For.module.css";
import yt from "../../assets/youtube-168-svgrepo-com.svg";
import dollar from "../../assets/dollar-sign-svgrepo-com.svg";
import globe from "../../assets/globe-svgrepo-com.svg";
import business from "../../assets/business-svgrepo-com.svg";
import algorithm from "../../assets/ai-mi-algorithm-svgrepo-com.svg";

const For = () => {
  return (
    <div className={s.container}>
      <h2 id="forwho" className={s.title}>
        Для кого цей курс?
      </h2>
      <ul className={s.reasonsList}>
        {/* <li className={s.reason}>
         
          <p>Тих, хто ще не має власного YouTube-каналу.</p>
        </li> */}
        <li className={s.reason}>
          <img className={s.icon} src={yt} alt="" />
          <p>
            Для початківців та власників каналів, які прагнуть покращити
            результати.
          </p>
        </li>
        <li className={s.reason}>
          <img className={s.icon} src={dollar} alt="" />
          <p>
            Людей, які хочуть залишити найману працю та перейти на
            самозайнятість або отримувати додатковий прибуток.
          </p>
        </li>
        <li className={s.reason}>
          <img className={s.icon} src={globe} alt="" />
          <p>
            Тих, хто прагне фінансової свободи і можливості працювати з
            будь-якої точки світу.
          </p>
        </li>
        <li className={s.reason}>
          <img className={s.icon} src={business} alt="" />
          <p>
            Власників бізнесу, зацікавлених у розвитку своєї справи через
            YouTube.
          </p>
        </li>
        <li className={s.reason}>
          <img className={s.icon} src={algorithm} alt="" />
          <p>
            Для тих хто хоче вивчити алгоритми ютуба більш поглиблено, а також
            унікальні фішки ютуб.
          </p>
        </li>
      </ul>
      {/* <div className={s.line}></div> */}
    </div>
  );
};
export default For;
