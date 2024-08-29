import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RecursosCliente.css";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const VideoCard = ({ title, description, videoUrl }) => {
const { t } = useTranslation();   
  return (
    <div className="card1">
      <div className="card1-img-container">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="200px" /* Ajusta la altura para que coincida con las imágenes */
          controls={true}
          className="card1-img-top" /* Usamos la clase de imagen para mantener la consistencia */
        />
      </div>
      <div className="card1-body">
        <h5 className="card1-title">{title}</h5>
        <p className="card1-text">{description}</p>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired, // Cambiado a string
  description: PropTypes.string.isRequired, // Cambiado a string
  videoUrl: PropTypes.string.isRequired, // Cambiado a string
};

const VideosCliente = () => {
  const { t } = useTranslation();
  const videos = [
  
    {
      title:"La Manera Más Fácil para Entender las Finanzas",
      description:
        "Explora los conceptos clave de la economía y las finanzas en este completo diccionario.",
      videoUrl: "https://www.youtube.com/watch?v=dUiZ5is-Chw",
    },
    {
      title:
        "CONTABILIDAD DEL HOGAR EN EXCEL FÁCIL Y PRÁCTICO | PLANTILLA DESCARGABLE GRATIS:",
      description:
        "Descubre las mejores plataformas de trading y cómo utilizarlas para maximizar tus inversiones.",
      videoUrl: "https://www.youtube.com/watch?v=QKH_RylEMEU",
    },
    {
      title: "Pequeños LADRONES que te roban el DINERO - Gastos Hormiga",
      description:
        "Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.",
      videoUrl: "https://www.youtube.com/watch?v=5tL96a8FZU4",
    },
    {
      title: "Aprende a gestionar MEJOR tu dinero con LA REGLA 50/30/20",
      description:
        "Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.",
      videoUrl: "https://www.youtube.com/watch?v=_bgUUswBttU",
    },
    {
      title: "Finanzas en pareja:",
      description:
        "Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.",
      videoUrl: "https://www.youtube.com/watch?v=g8TUvldg8L4",
    },
    {
      title: "Pequeños LADRONES que te roban el DINERO - Gastos Hormiga",
      description:
        "Accede a recursos educativos sobre finanzas proporcionados por la Comisión para el Mercado Financiero de Chile.",
      videoUrl: "https://www.youtube.com/watch?v=29iU2NA0rDQ",
    },
  ];

  return (
    <section className="article-content">
      <div className="container1">
        <div className="header1">
          <h2>Videos</h2>
        </div>
        <div className="info-header1"> 
        <p> {t('Encuentra videos sobre finanzas y empoderamiento económico.')}</p>
        </div>
        <div className="d-flex1">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              videoUrl={video.videoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default VideosCliente;
