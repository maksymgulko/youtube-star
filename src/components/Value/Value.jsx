import s from "./Value.module.css";
import image from "../../assets/20241022225030_1.jpg";

const Value = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Цінність курсу</h2>
      <p className={s.text}>
        Курс YouTube - це ідеальний вибір для тих, хто отримати фінансову
        свободу і працювати з будь якого куточка світу. При вивченні цього курсу
        ти заощаджуєш свій час в 2-3 рази в менше чим на пошук цієї інформації
        самостійно і відкриваєш для себе нову унікальну інформацію про створення
        та монетизацію на ютуб.
        <br />
        <br />З моїм курсом ти вже за один день зареєструєш свій канал на ютуб,
        створиш перше відео та завантажиш його на канал, при цьому маючи тільки
        доступ до інтернету, телефон або ноутбук. Я поділюся власним досвідом і
        покажу, як організувати роботу на всіх етапах
      </p>
      <div className={s.points}>
        <p className={s.point}>
          <span className={s.ptitle}>Зручність</span>
          <br /> Ви можете заробляти в будь якій точці світу, маючи доступ до
          інтернету і вибирати зручний графік роботи
        </p>
        <div className={s.double}>
          <p className={s.dpoint}>
            <span className={s.ptitle}>Прибутковість</span>
            <br /> Ви можете мати додатковий прибуток в ютуб або основний бізнес
            в ютубі
          </p>
          <p className={s.dpoint}>
            <span className={s.ptitle}>Підійде</span>
            <br /> Кожному, робота в цій сфері не потребує спеціальної освіти
          </p>
        </div>
      </div>
      <h2 className={s.rtitle}>Топ-5 причин, чому варто мати YouTube-канал:</h2>
      <div className={s.reasonsWrap}>
        <ul className={s.reasons}>
          <li className={s.reason}>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis asperiores atque laboriosam quae fugit recusandae quo
            aperiam doloribus alias at cupiditate quia debitis nostrum nobis,
            amet commodi magnam sapiente odio?
          </li>
          <li className={s.reason}>
            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos esse nostrum quibusdam nemo quo rem molestias quod
            aperiam delectus, quos hic deleniti ipsam placeat temporibus
            repellat vero doloribus enim mollitia!
          </li>
          <li className={s.reason}>
            3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloribus pariatur natus dignissimos, veniam eaque impedit
            doloremque voluptatibus repellat vero, facilis ratione temporibus
            blanditiis eveniet error saepe et quo? At, corporis.<p></p>
          </li>
          <li className={s.reason}>
            4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum ducimus in ea totam aspernatur soluta quibusdam sapiente,
            nisi mollitia. Sequi ullam nesciunt tempore optio dolores non
            delectus sunt exercitationem ducimus.
          </li>
          <li className={s.reason}>
            5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            optio, natus quasi consectetur autem aliquam cupiditate facilis,
            beatae fugiat et iste ut corporis, odio sit. Beatae dolorem
            voluptatem tempore ipsam.
          </li>
        </ul>
        <img className={s.pic} src={image} alt="" />
      </div>
    </div>
  );
};
export default Value;
