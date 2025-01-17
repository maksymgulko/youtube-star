import s from "./Value.module.css";
import image from "../../assets/5.jpg";

const Value = () => {
  return (
    <div className={s.container}>
      <h2 id="value" className={s.title}>
        Цінність курсу
      </h2>
      <p className={s.text}>
        Курс YouTube - це ідеальний вибір для тих, хто хоче отримати фінансову
        свободу і працювати з будь-якого куточка світу. Вивчення цього курсу
        заощадить твій час у декілька разів, у порівнянні з пошуком цієї
        інформації самостійно, а також відкриває для тебе нову, унікальну
        інформацію про створення та монетизацію контенту на YouTube.
        <br />
        <br />З моїм курсом ти вже за один день зареєструєш свій канал на
        YouTube, створиш перше відео та завантажиш його на канал, маючи лише
        доступ до інтернету, телефон або ноутбук. Я поділюся власним досвідом і
        покажу, як організувати роботу на всіх етапах.
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
            <br /> Ви можете мати додатковий прибуток або основний бізнес в
            YouTube
          </p>
          <p className={s.dpoint}>
            <span className={s.ptitle}>Підійде</span>
            <br /> Кожному, робота в цій сфері не потребує спеціальної освіти
          </p>
        </div>
      </div>
      <h2 className={s.rtitle}>
        Мати власний YouTube-канал може бути корисним і захоплюючим для людини з
        різних причин:
      </h2>
      <div className={s.reasonsWrap}>
        <ul className={s.reasons}>
          <li className={s.reason}>
            1. Самовираження та творчість:
            <br /> Людина може ділитися своїми думками, талантами, хобі, ідеями
            чи історіями. Це платформа для розвитку творчих здібностей у
            створенні відео, монтажу, дизайну тощо.
            <br />
          </li>
          <li className={s.reason}>
            2. Досягнення аудиторії:
            <br /> Через YouTube можна знайти однодумців, розширити коло
            спілкування та взаємодіяти з аудиторією, яка цінує ваш контент.
          </li>
          <li className={s.reason}>
            3. Навчання та інформування:
            <br /> Канал може бути платформою для передачі знань чи досвіду
            іншим (наприклад, кулінарія, мова, технічні навички).
          </li>
          <li className={s.reason}>
            4. Розвиток бренду або бізнесу:
            <br /> YouTube-канал може допомогти у просуванні особистого бренду
            чи бізнесу, залучаючи клієнтів та створюючи репутацію експерта в
            певній сфері.
          </li>
        </ul>
        <img className={s.pic} src={image} alt="" />
        <ul className={s.reasons}>
          <li className={s.reason}>
            5. Заробіток:
            <br /> За умови розвитку каналу, можна заробляти через монетизацію
            (реклама, спонсорські угоди, партнерські програми).
          </li>
          <li className={s.reason}>
            6. Розвага та хобі:
            <br /> Для багатьох ведення каналу — це захоплення, яке приносить
            задоволення, незалежно від розміру аудиторії чи прибутку.
          </li>
          <li className={s.reason}>
            7. Вплив та соціальна відповідальність:
            <br /> Канал може стати інструментом для впливу на соціальні,
            екологічні чи культурні теми, привертати увагу до важливих проблем.
          </li>
          <li className={s.reason}>
            8. Покращення навичок:
            <br /> Ведення каналу розвиває комунікаційні, технічні, маркетингові
            та управлінські навички, які корисні й поза YouTube.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Value;
