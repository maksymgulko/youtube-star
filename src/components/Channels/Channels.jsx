import s from "./Channels.module.css";
import image from "../../assets/close_blue.jpg";
import mc from "../../assets/channels4_banner.jpg";
import mce from "../../assets/channels4_banner_en.jpg";

const Channels = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Про канали</h2>
      <div className={s.top}>
        <ul className={s.bubblesList}>
          <li className={s.bubbleItem}>
            <p className={s.bubble}>2</p>
            <p>канали</p>
          </li>
          <li className={s.bubbleItem}>
            <p className={s.bubble}>245 тисяч</p>
            <p>підписників</p>
          </li>
          <li className={s.bubbleItem}>
            <p className={s.bubble}>300 млн</p>
            <p>переглядів</p>
          </li>
        </ul>
        <img className={s.topImg} src={image} alt="" />
      </div>
      <div className={s.bottom}>
        <div className={s.left}>
          <div className={s.stats}>
            <img className={s.ytPic} src={mc} alt="mini croco channel" />
            <p>@minicroco • 104 тис підписників • 2.5 тис відео</p>
          </div>
          <a
            target="_blank"
            className={s.link}
            href="https://www.youtube.com/@minicroco"
          >
            <button className={s.sub} type="button">
              Підписатися
            </button>
          </a>
        </div>
        <div className={s.right}>
          <div className={s.stats}>
            <img className={s.ytPic} src={mce} alt="mini croco en channel" />
            <p>@minicrocoen43 • 141 тис підписників • 2.6 тис відео</p>
          </div>
          <a target="_blank" href="https://www.youtube.com/@minicrocoen43">
            <button className={s.sub} type="button">
              Підписатися
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Channels;
