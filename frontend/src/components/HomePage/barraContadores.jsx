import "./barraContadores.css";

const BarraContadores = () => {
  return (
    <div className="containerB">
      <div className="tituloDatos">
        <div className="tituloB">
          <p>¡Cada día somos más en nuestra plataforma!</p>
        </div>
      </div>
      <div className="Datos">
        <div className="contador-miembros">
          <p>2000</p>
          <p>Miembros</p>
        </div>
        <div className="contador-comentarios">
          <p>6481</p>
          <p>Comentarios</p>
        </div>
        <div className="contador-noticias">
          <p>83</p>
          <p>Noticias</p>
        </div>
        <div className="contador-socios">
          <p>6</p>
          <p>Socios</p>
        </div>
      </div>
    </div>
  );
};

export default BarraContadores;
