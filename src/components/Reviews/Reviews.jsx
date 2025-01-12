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
          <div className={s.review}>
            <p>
              Іра, дякую за консультацію. Ти допомогла мені розібратись в тих
              питаннях, які мене цікавили. Перегляди відео зросли в два рази!!!
              Дякую ❤️
            </p>
            <p>Альонка</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.review}>
            <p>
              Привіт. Хочу подякувати за навчання. Я вже місяць займаюсь моїм
              каналом та маю 542 підписника. Мені і дітям подобається бути
              акторами😀🔥💥
            </p>
            <p>Марія</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.review}>
            <p>
              Ірина, добрий день. Після вашої підказки та консультації створив
              собі YouTube канал для бізнесу. У мене все вийшло! Тепер наповнюю
              контентом.
            </p>
            <p>Максим</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={s.review}>
            <p>
              Пишу тобі подякувати за урок по монтажу. Це крута фішка!🔥 мої
              Shorts залітають на ура! Та ще й підписники приходять! Короче, ти
              крута!💋
            </p>
            <p>Аліна</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Reviews;
