import './Ilustracion.css';

const Ilustracion = () => {
  return (
    <div className="containerImagen">
      <div className="imagenContainer">
        <h2 className="titleImagen">Únete a nuestra comunidad</h2>
        <img
          src="/images/login-ilustracion.webp"
          alt="Ilustración"
          className="illustration-image"
        />
      </div>
    </div>
  );
};

export default Ilustracion;

