import { Link } from "react-router-dom";
import "./infoF.css";

const InfoNosotras = () => {
  return (
    <div className="containerf" id="nosotras">
      <div className="ContenedorMujer">
        <img
          src="/images/img3.png"
          alt="imagen sobre nosotras"
          className="img-mujer"
        />
      </div>
      <div className="containerQS">
        <div className="titulo">
          <p>¿Quiénes Somos?</p>
        </div>
        <div className="texto-informativo">
          <p>
            Entendemos que el dinero mueve el mundo, pero también puede generar
            una montaña rusa de emociones: desde la emoción y el estrés hasta la
            ansiedad, la frustración, la comodidad y, a veces, un toque de
            confusión. No hay duda, es un tema complejo.
          </p>
          <p>
            En Finanfem, nos dedicamos a simplificar esta complejidad para que
            puedas disfrutar de los frutos de tu trabajo sin complicaciones. Te
            ayudamos a alcanzar la libertad de deudas, la independencia
            financiera, una cartera de inversiones sólida y la prosperidad, sin
            importar tu origen o situación actual.
          </p>
        </div>
        <div className="boton">
          <Link to="/register">
          <button className="botoncito">Únete a nuestra Comunidad</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoNosotras;
