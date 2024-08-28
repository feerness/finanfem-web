import "bootstrap/dist/css/bootstrap.min.css";
import ApiFunction from "./apiFunction";
import './indicadores.css';

import "./indicadores.css";

const Indicadores = () => {
  return (
    <section className="api-content py-5">
      {" "}
      <div className="container">
        <h2 className="tituloI">Indicadores Financieros</h2>
        {ApiFunction()}
      </div>
    </section>
  );
};

export default Indicadores;
