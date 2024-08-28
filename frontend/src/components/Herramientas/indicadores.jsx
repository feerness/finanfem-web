import "bootstrap/dist/css/bootstrap.min.css";
import ApiFunction from "./apiFunction";

const Indicadores = () => {
  const { t } = useTranslation();
  return (
    <section className="api-content py-5">
      {" "}
      <div className="container">
        <h2>Indicadores Financieros</h2>
        {ApiFunction()}
      </div>
    </section>
  );
};

export default Indicadores;
