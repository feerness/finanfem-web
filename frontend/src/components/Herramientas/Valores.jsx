import "./Valores.css";

const Valores = () => {
  const apiUrl = "https://mindicador.cl/api";

  // Función que se encarga de manejar cada indicador
  function miIndicador(valores) {
    const { nombre, valor, fecha } = valores;
    const container = document.querySelector(".contenedor");

    const nomb = document.createElement("h5");
    nomb.textContent = nombre;

    const valorContainer = document.createElement("div");
    valorContainer.classList.add("valor-container");

    const val = document.createElement("h5");
    val.textContent = valor;
    val.classList.add("valor");

    const text = document.createElement("h5");
    text.textContent = "$";
    text.classList.add("signo");

    // Simplificar la fecha
    const date = new Date(fecha);
    const simplifiedDate = date.toLocaleDateString("es-ES");

    const fec = document.createElement("h5");
    fec.textContent = simplifiedDate;
    fec.classList.add("fecha");

    const indicador = document.createElement("div");
    indicador.classList.add("indicador");

    indicador.appendChild(nomb);

    // Añadir el valor y la imagen al contenedor de valor
    valorContainer.appendChild(text);
    valorContainer.appendChild(val);

    indicador.appendChild(valorContainer);
    indicador.appendChild(fec);

    container.appendChild(indicador);
  }

  async function tenerValores(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Aquí recorremos las propiedades del objeto de datos
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const indicador = data[key];
          // Verificamos que el indicador tenga la propiedad 'valor'
          if (indicador && indicador.valor !== undefined) {
            miIndicador(indicador);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  

  // Llamamos a la función principal
  tenerValores(apiUrl);

  return (
    <div className="carrusel">
      <div className="contenedor"></div>
    </div>
  );
};

export default Valores;
