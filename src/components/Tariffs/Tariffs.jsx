import s from "./Tariffs.module.css";

const Tariffs = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Пакети</h2>
      <div className={s.tariffs}>
        <ul className="tariffsList">
          <li className="tariffItem"></li>
          <li className="tariffItem"></li>
          <li className="tariffItem"></li>
        </ul>
      </div>
    </div>
  );
};
export default Tariffs;
