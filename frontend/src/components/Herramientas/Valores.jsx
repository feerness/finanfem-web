import { useEffect, useState } from "react";
import "./Valores.css";

const Valores = () => {
  const [indicadores, setIndicadores] = useState([]);

  useEffect(() => {
    const apiUrl = "https://mindicador.cl/api";

    const fetchValores = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const valoresArray = [];

        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const indicador = data[key];
            if (indicador && indicador.valor !== undefined) {
              valoresArray.push(indicador);
            }
          }
        }
        setIndicadores(valoresArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchValores();
  }, []);

  return (
    <div className="carrusel4">
      <div className="contenedor4">
        {indicadores.map((valores, index) => (
          <div className="indicador4" key={index}>
            <h5>{valores.nombre}</h5>
            <div className="valor-container4">
              <h5 className="signo4">$</h5>
              <h5 className="valor4">{valores.valor}</h5>
            </div>
            <h5 className="fecha4">
              {new Date(valores.fecha).toLocaleDateString("es-ES")}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Valores;
