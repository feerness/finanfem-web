import "bootstrap/dist/css/bootstrap.min.css";
import ApiFunction from "./apiFunction";
import { useTranslation } from "react-i18next";

const Indicadores = () => {
  const { t } = useTranslation();
  return (
    <section className="api-content py-5">
      {" "}
      {/*Hacer css de api*/}
      <div className="container">
        <h2>{t('Indicadores Financieros')}</h2>
        {ApiFunction()}
        <ApiFunction />
      </div>
    </section>
  );
};

export default Indicadores;
