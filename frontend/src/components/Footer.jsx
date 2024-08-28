
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./Footer.css";

const MyFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>FinanFem</h2>
          </div>
          <div className="col-md-2">
            <h5>{t('Información')}</h5>
            <ul className="list-unstyled">
              <li>{t('Acerca de nosotras')}</li>
              <li>{t('Testimonios')}</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>{t('Links de Ayuda')}</h5>
            <ul className="list-unstyled">
              <Link to="/Recursos"><li>{t('Indicadores Financieros')}</li></Link>
              <Link to="/Articulos"><li>{t('Recursos')}</li></Link>
              <Link to="/Pdf"><li>{t('Archivos')}</li></Link>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>{t('Nuestros Servicios')}</h5>
            <ul className="list-unstyled">
              <Link to="/Profile"><li>{t('Perfil')}</li></Link>
              <Link to="/foro"><li>{t('Foro')}</li></Link>
              <Link to="/Noticias"><li>{t('Noticias')}</li></Link>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>{t('Contacto')}</h5>
            <ul className="list-unstyled contact-info">
              <li><i className="fas fa-phone"></i> +569 3567 8910</li>
              <li><i className="fas fa-envelope"></i> contacto@finanfem.cl</li>
              <li><i className="fas fa-map-marker-alt"></i> {t('Calle 123, Santiago, Chile')}</li>
            </ul>
            <ul className="list-inline footer-links">
              <li className="list-inline-item">
                <a href="https://www.google.cl">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.cl">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.cl">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.cl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>© 2024 FinanFem. {t('Todos los derechos reservados')}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
