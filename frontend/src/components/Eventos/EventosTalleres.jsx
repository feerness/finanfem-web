import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "./EventosTalleres.css";
// import { useTranslation } from "react-i18next";
// import { t } from "i18next";

const EventsCard = ({ title, image, description, link }) => {
//   const { t } = useTranslation();
  return (
    <div className="custom-card">
      <div className="custom-card-img-container">
        <img src={image} className="custom-card-img-top" alt={title} />
      </div>
      <div className="custom-card-body">
        <h5 className="custom-card-title">{title}</h5>
        <p className="custom-card-text">{description}</p>
        <a
          href={link}
          className="btn-primary1"
          target="_blank"
          rel="noopener noreferrer">
          Leer más
        </a>
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  title: PropTypes.string.isRequired, // Aquí se cambia a string
  description: PropTypes.string.isRequired, // Aquí se cambia a string
  image: PropTypes.string.isRequired, // Aquí se cambia a string
  link: PropTypes.string.isRequired, // Aquí se cambia a string
};

const EventosTalleres = () => {
//   const { t } = useTranslation();
  const events = [
    {
      title: "Programa Mujeres Jefas de Hogar",
      image: "frontend/public/images/card-eventos-1.jpg",
      description:
        "El programa busca promover la autonomía económica de las mujeres jefas de hogar, a través de un conjunto de herramientas que les permitan generar y gestionar ingresos y recursos propios a partir del trabajo remunerado, el acceso a la oferta pública y a oportunidades de conciliación trabajo remunerado, doméstico y de cuidados.",
      link: "https://www.chileatiende.gob.cl/fichas/12885-programa-mujeres-jefas-de-hogar",
    },
    {
      title:
        "Talleres de Formación y Capacitación en oficios",
      image: "frontend/public/images/card-eventos-2.jpg",
      description:
        "Durante todos estos años de existencia de la Casa de la Mujer de Huamachuco, han sido miles de mujeres quienes se han capacitado e ingresado al mundo laboral, mejorando su calidad de vida y la de sus familias..",
      link: "https://www.casadelamujer.cl/servicios/talleres-de-formacion-y-capacitacion-en-oficios/",
    },
    {
      title: "Prodemu lanzó talleres gratuitos para 45 mil mujeres del país este 2024",
      image: "frontend/public/images/card-eventos-3.jpg",
      description:
        "Se trata de cursos que abordan distintas áreas, tales como el empoderamiento, la autonomía económica y el ejercicio de derechos, en 56 provincias y 16 regiones a lo largo de todo el territorio nacional.",
      link: "https://minmujeryeg.gob.cl/?p=53173",
    },
    {
      title: "Talleres Abiertos para el Crecimiento Personal",
      image: "frontend/public/images/card-eventos-4.jpg",
      description:
        "Si tienes interés por desarrollar el conocimento sobre tí misma, saber cómo nos afecta la educación de género y participar junto con otras mujeres en desmontar todas las ideas que nos mantienen atadas a la dependencia, la inseguridad, la sobrecarga, la falta de asertidad, etc… Los Talleres Abiertos para el Crecimento Personal de Mujeres para la Salud te proponen esta sugerente posibilidad.",
      link: "https://www.mujeresparalasalud.org/category/servicios-de-mujeres-para-la-salud/talleres-abiertos-para-el-crecimiento-personal/",
    },
    {
      title: "Calendario de eventos económicos",
      image: "frontend/public/images/card-eventos-5.jpg",
      description:
        "Calendario oficial de Banco Central de Chile, con las fechas de todos los eventos económicos.",
      link: "https://www.bcentral.cl/es/web/banco-central/noticias-y-publicaciones/prensa/calendario-eventos-economicos",
    },
    {
      title:
        "Chile Fintech Forum 2024",
      image: "frontend/public/images/card-eventos-6.jpg",
      description:
        "Chile Fintech Forum 2024, es una plataforma que genera y promueve el intercambio de conocimientos, experiencias y tecnologías que permiten al sector público y privado alcanzar nuevos niveles de innovación, competencia e inclusión financiera en el país, posicionando a su vez a Chile como referente en estos temas.",
      link: "https://www.chilefintechforum.com",
    },
  ]; 

  return (
    <section className="events-content">
      <div className="custom-container">
        <div className="custom-header">
          <h2>Eventos y Talleres</h2>
        </div>
        <div className="info-custom-header">
          <p>Encuentra eventos y talleres sobre finanzas y empoderamiento económico.</p>
        </div>
        <div className="custom-flex">
            {events.map((events, index) => (
             <EventsCard
                key={index}
                title={events.title}
                image={events.image}
                description={events.description}
                link={events.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventosTalleres;
