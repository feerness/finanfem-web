import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RecursosCliente.css";

const VideoCard = ({ title, description, videoUrl }) => {
  return (
    <div className="card1">
      {" "}
      {/* Usando la clase 'card1' para consistencia */}
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
  title: PropTypes.node.isrequired,
  description: PropTypes.node.isrequired,
  videoUrl: PropTypes.isrequired,
};

const VideosCliente = () => {
  const videos = [
    {
      title: "La Manera Más Fácil para Entender las Finanzas",
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
      {" "}
      {/* Usando la clase 'article-content' */}
      <div className="container1">
        <div className="header1">
          <h2>Videos</h2>
        </div>
        <div className="info-header1">
          <p>Encuentra videos sobre finanzas y empoderamiento económico.</p>
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
