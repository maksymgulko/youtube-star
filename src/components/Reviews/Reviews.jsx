import s from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Reviews = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Відгуки</h2>
      <Swiper
        // className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      >
        <SwiperSlide>
          <p className={s.review}>
            Ірина, дякую за курс, монетизацію отримала за 3,5 місяці на довгих
            відео. 🔥Перші гроші заробила через півроку, так було приємно
            отримувати долари на картку 🤩
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={s.review}>
            Курс супер, все конкретно та без води з першого дня. Створив канал
            для свого бізнесу , зняв відео та виклав на ютуб. Мій бізнес почав
            краще працювати так як з ютуба прийшли нові клієнти
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={s.review}>
            Мені 60 років, я вже пенсіонерка яка купила у вас курс. По вашим
            урокам, все зробила та почала вести свій особистий блог по
            кулінарії, тепер в мене є справа мого життя та додатковий заробіток
            до пенсії. Дякую вам велике ❤️
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className={s.review}>
            Хочу подякувати вам за курс,живу за кордоном пройшла ваше навчання,
            створила канал та знімаю розважальний контент зі своїми дітьми,
            швидко досягла монетизації на Shorts, це було легко💲. Зараз буду
            створювати другий канал, так як це просто заробляти тут гроші 💰
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Reviews;
