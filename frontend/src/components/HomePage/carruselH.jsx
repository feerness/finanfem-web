
import "./carruselH.css";

const PrimerCarruselH = () => {
  const textos = [
    "#Ahorro",
    "#Inversiones",
    "#Créditos",
    "#Economía",
    "#MonedaVirtual",
  ];

  return (
    <div className="containerh">
      <div className="textos">
        {/* Bloque de contenido original */}
        {[...textos, ...textos].map((texto, index) => (
          <p key={index}>{texto}</p>
        ))}
        {/* Bloque de contenido duplicado */}
        {[...textos, ...textos].map((texto, index) => (
          <p key={index + textos.length}>{texto}</p>
        ))}
      </div>
    </div>
  );
};

export default PrimerCarruselH;


