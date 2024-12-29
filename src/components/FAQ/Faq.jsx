import s from "./Faq.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <div className={s.container}>
      <h2 id="faq" className={s.title}>
        Популярні питання
      </h2>
      <Accordion
        className={s.accordion}
        allowZeroExpanded
        allowMultipleExpanded
      >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Як мені оплатити курс?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {`Оплатити курс дуже просто, натиснувши на сайті на кнопку "Купити
              курс" , ви потрапите на сторінку покупки курсу, де ви зможете
              оплатити його зручним для себе способом. Після успішної оплати
              вашого замовлення, вас автоматично переадресує на Telegram канал
              онлайн курсу, також ви отримаєте повідомлення на ваш e-mail з
              посиланням на курс.`}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        className={s.accordion}
        allowZeroExpanded
        allowMultipleExpanded
      >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Чи надаєте підтримку, якщо виникнуть технічні питання?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {`Так звичайно ви можете зв'язатися зі мною в Telegram або Instagram`}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        className={s.accordion}
        allowZeroExpanded
        allowMultipleExpanded
      >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Що робити, якщо мене після оплати не перекинуло до Telegram
              каналу?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {`Після оплати курсу, на вказану електронну адресу при оплаті, вам надійде лист із посиланням на курс.`}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <Accordion
        className={s.accordion}
        allowZeroExpanded
        allowMultipleExpanded
      >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Де я можу ознайомитися з програмою курсу?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              {`Щоб ознайомитись з програмою курсу, вам потрібно перейти до розділу Пакети і натиснути кнопку "Детальніше".
               Після цього ви зможете ознайомитися більш детально з інформацією курсу, який вас цікавить`}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Faq;
