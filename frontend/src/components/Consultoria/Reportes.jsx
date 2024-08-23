import './Reportes.css';

const ReportesCliente = () => {
  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="content">
          <h2 className="text-center mb-4">Reportes Cliente FinamFem</h2>
          <ul className="list-group">
            <li className="list-group-item">Email: contacto@ejemplo.com</li>
            <li className="list-group-item">Teléfono: +123456789</li>
          </ul>
          <div className="text-center mt-4">
            <a href="https://www.instagram.com/finanfem" className="btn btn-danger"><i className="fab fa-instagram"></i> Instagram</a>              
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contact-form">
          <h3 className="text-center mb-4">Envíanos un mensaje</h3>
          <form action="enviar.php" method="POST">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" className="form-control" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea className="form-control" id="mensaje" name="mensaje" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

}

export default ReportesCliente;