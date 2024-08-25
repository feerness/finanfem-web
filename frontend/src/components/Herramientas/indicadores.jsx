import "bootstrap/dist/css/bootstrap.min.css";
import ApiFunction from "./apiFunction";

const Indicadores = () => {
  return (
    <section className="content py-5">
      {" "}
      {/*Esto crea conflicto con ./consultoria/reportes.css*/}
      <div className="container">
        <h2>Indicadores Financieros</h2>
        {ApiFunction()}
        <ApiFunction />
      </div>
    </section>
  );
};

export default Indicadores;
