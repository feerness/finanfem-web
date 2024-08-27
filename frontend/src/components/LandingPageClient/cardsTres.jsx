import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./cardsTres.css";

const CustomCards = () => {
  return (
    <Container fluid className="bg-light-gray">
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
          <Card.Text className="texto-Y">Infórmate, avanza & descubre en finanzas.</Card.Text>
            <Card.Img
              variant="top"
              src="/images/wm.noticias.bn.jpg"
              className="custom-img-1"
            />
            <Card.Body className="text-center">
              <Button variant="primary" className="custom-btn">
                Recursos
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
          <Card.Text className="texto-X">Progresemos juntas</Card.Text>
            <Card.Img
              variant="top"
              src="/images/friends.bn.jpg"
              className="custom-img-2"
            />
            <Card.Body className="text-center">
              <Button variant="primary" className="custom-btn">
                Comunidad
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100">
          <Card.Text className="texto-Z">Descubre lo último en el mundo financiero.</Card.Text>
            <Card.Img
              variant="top"
              src="/images/herramientas-woman.jpg"
              className="custom-img-3"
            />
            <Card.Body className="text-center">
              <Button variant="primary" className="custom-btn">
                Herramientas
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomCards;
