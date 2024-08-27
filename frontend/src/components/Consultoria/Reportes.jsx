import "./Reportes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ReportesCliente = () => {
  return (
    <div className="container02 mt-5">
      <div className="row02">
        <div className="col-md-602 mx-auto02">
          <div className="content02">
            <h2 className="text-center02 mb-402">Reportes Cliente FinamFem</h2>
            <ul className="list-group02">
              <li className="list-group-item02">Email: contacto@ejemplo.com</li>
              <li className="list-group-item02">Teléfono: +123456789</li>
            </ul>
            <div className="text-center02 mt-402">
              <a
                href="https://www.instagram.com/finanfem"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link02"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="instagram-icon02"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-402">
          <div className="contact-form02">
            <h3 className="text-center02 mb-402">Envíanos un mensaje</h3>
            <form action="enviar.php" method="POST">
              <div className="form-group02">
                <label htmlFor="nombre02">Nombre</label>
                <input
                  type="text"
                  className="form-control02"
                  id="nombre02"
                  name="nombre"
                  required
                />
              </div>
              <div className="form-group02">
                <label htmlFor="email02">Email</label>
                <input
                  type="email"
                  className="form-control02"
                  id="email02"
                  name="email"
                  required
                />
              </div>
              <div className="form-group02">
                <label htmlFor="mensaje02">Mensaje</label>
                <textarea
                  className="form-control02"
                  id="mensaje02"
                  name="mensaje"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary02 btn-block02">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportesCliente;
