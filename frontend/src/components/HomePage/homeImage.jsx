
import './homeImage.css';

const HomeImage = () => {
  return (
    <div className="home-image-container">
      <img src="/images/women.working.1.jpg" alt="Imagen estatica del Home" className="img-fluid" />
      <div className="overlay-text">
      <p>Somos una <strong>comunidad</strong> dedicada a</p>
        <p>educar a <strong>mujeres</strong> chilenas en el</p>
        <p><strong> ámbito financiero.</strong></p>
      </div>
    </div>
  );
};

export default HomeImage;
