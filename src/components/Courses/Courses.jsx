import s from "./Courses.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Courses = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Програма курсів</h2>
      <div className={s.courseWrap}>
        <h3 id="start" className={s.courseTitle}>
          Start
        </h3>
        <div className={s.courseInfo}>
          <p>Ціна: 890 UAH</p>
          <p>Тривалість: 3 місяці</p>
        </div>
        <Accordion
          className={s.accordion}
          allowZeroExpanded
          allowMultipleExpanded
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Програма</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={s.wrap}>
                <div className={s.desc}>
                  <h3>📌 Модуль 1:</h3>
                  <p>
                    Урок 1. Загальна інформація про YouTube. Правила та
                    стратегія. Авторські права.
                  </p>
                  <p>Урок 2. Як обрати нішу на ютуб.</p>
                  <p>Урок 3. Створення каналу.</p>
                  <p>
                    Урок 4. Оформлення головної сторінки. Знайомство з канвою на
                    телефоні.
                  </p>
                  <br />
                  <h3>📌 Модуль 2:</h3>
                  <p>Урок 1. Зйомка відео у вертикальному форматі.</p>
                  <p>Урок 2. Монтаж відео в мобільному додатку VN.</p>
                  <p>Урок 3. Завантаження відео через телефон.</p>
                  <br />
                  <h3>📌 Модуль 3:</h3>
                  <p>Урок 1. Аналітика каналу.</p>
                </div>
                <a className={s.buyLink}>
                  <button className={s.buyButton} type="button">
                    Купити
                  </button>
                </a>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={s.courseWrap}>
        <h3 id="basic" className={s.courseTitle}>
          Basic
        </h3>
        <div className={s.courseInfo}>
          <p>Ціна: 2490 UAH</p>
          <p>Тривалість: 6 місяців</p>
        </div>
        <Accordion
          className={s.accordion}
          allowZeroExpanded
          allowMultipleExpanded
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Програма</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={s.wrap}>
                <div className={s.desc}>
                  <h3>📌 Модуль 1:</h3>
                  <p>
                    Урок 1. Загальна інформація про YouTube. Правила та
                    стратегія. Авторські права.
                  </p>
                  <p>Урок 2. Як обрати нішу на ютуб.</p>
                  <p>Урок 3. Створення каналу.</p>
                  <p>
                    Урок 4. Оформлення головної сторінки. Знайомство з канвою на
                    телефоні та компʼютері.
                  </p>
                  <br />
                  <h3>📌 Модуль 2:</h3>
                  <p>
                    Урок 1. Зйомка відео в горизонтальному та вертикальному
                    форматі.
                  </p>
                  <p>
                    Урок 2. Монтаж відео в програмі Premier Pro. Монтаж відео в
                    мобільному додатку VN.
                  </p>
                  <p>
                    Урок 3. Завантаження відео через телефон та компʼютер.
                    Завантаження Shorts.
                  </p>
                  <p>Урок 4. Створення обкладинки для горизонтального відео.</p>
                  <br />
                  <h3>📌 Модуль 3:</h3>
                  <p>Урок 1. Аналітика каналу.</p>
                  <p>
                    Урок 2. Додаткові функції (Ведення спільноти та створення
                    плей-листів).
                  </p>
                  <br />
                  <h3>✨ Подарунки:</h3>
                  <p>🎁 База звуків та спецефектів.</p>
                </div>
                <a className={s.buyLink}>
                  <button className={s.buyButton} type="button">
                    Купити
                  </button>
                </a>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={s.courseWrap}>
        <h3 id="advanced" className={s.courseTitle}>
          Advanced
        </h3>
        <div className={s.courseInfo}>
          <p>Ціна: 4290 UAH</p>
          <p>Тривалість: 12 місяців</p>
        </div>
        <Accordion
          className={s.accordion}
          allowZeroExpanded
          allowMultipleExpanded
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Програма</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={s.wrap}>
                <div className={s.desc}>
                  <h3>📌 Модуль 1:</h3>
                  <p>
                    Урок 1. Загальна інформація про YouTube. Правила та
                    стратегія. Авторські права.
                  </p>
                  <p>Урок 2. Як обрати нішу на ютуб.</p>
                  <p>Урок 3. Створення каналу.</p>
                  <p>
                    Урок 4. Оформлення головної сторінки. Знайомство з канвою на
                    телефоні та компʼютері.
                  </p>
                  <br />
                  <h3>📌 Модуль 2:</h3>
                  <p>
                    Урок 1. Зйомка відео в горизонтальному та вертикальному
                    форматі.
                  </p>
                  <p>
                    Урок 2. Монтаж відео в програмі Premier Pro. Монтаж відео в
                    мобільному додатку VN.
                  </p>
                  <p>
                    Урок 3. Завантаження відео через телефон та компʼютер.
                    Завантаження Shorts.
                  </p>
                  <p>Урок 4. Створення обкладинки для горизонтального відео.</p>
                  <br />
                  <h3>📌 Модуль 3:</h3>
                  <p>Урок 1. Аналітика каналу.</p>
                  <p>
                    Урок 2. Додаткові функції (Ведення спільноти та створення
                    плей-листів).
                  </p>
                  <p>
                    Урок 3. Створення та запуск циклічних трансляцій на ютуб .
                  </p>
                  <br />
                  <h3>✨ Подарунки:</h3>
                  <p>🎁 База звуків та спецефектів.</p>
                  <p>🎁 Індивідуальна консультація від діючого ютубера.</p>
                  <p>🎁 Доступ до фонотеки з музикою без авторських прав .</p>
                  <p>
                    🎁 Файли з програмою Premier Pro (допомога зі
                    встановленням).
                  </p>
                </div>
                <a className={s.buyLink}>
                  <button className={s.buyButton} type="button">
                    Купити
                  </button>
                </a>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
export default Courses;
