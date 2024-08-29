import { Link } from "react-router-dom";
import { Card, Container, Row, Col} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./cardsTres.css";



const CustomCards = () => {

  const { t } = useTranslation();



  return (
    <Container fluid className="foro-contenido1">
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="/images/wm.noticias.bn.jpg"
              className="custom-img-1"
            />
            <Card.Body className="text-center card-body">
              <Card.Text className="texto-Y">
                {t("Infórmate, avanza & descubre en finanzas.")}
               
              </Card.Text>
              <Link className="custom-btn" to="/recursos">
                    {t("Recursos")}
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="/images/comunidad.jpg"
              className="custom-img-2"
            />
            <Card.Body className="text-center card-body">
              <Card.Text className="texto-X">
              {t("Progresemos juntas.")}
                </Card.Text>
              <Link className="custom-btn" to="/foro">
                    {t("Comunidad")}
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="/images/herramientas-woman.jpg"
              className="custom-img-3"
            />
            <Card.Body className="text-center card-body">
              <Card.Text className="texto-Z">
              {t("Descubre lo último en el mundo financiero.")}
              </Card.Text>
              <Link className="custom-btn" to="/Recursos">
                    {t("Herramientas")}
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomCards;
