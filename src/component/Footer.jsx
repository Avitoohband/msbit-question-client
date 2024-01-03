import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Col from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer>
      <Container className="bg-dark text-white mt-4">
        <Row className="py-3 ">
          <Col md={6} className="text-center">Copyright &copy; Avi Tuchband 2024</Col>
          <Col md={6} className="text-center"> Private Policy | Terms of Use </Col>
        </Row>
      </Container>
    </footer>
    
  );
};
export default Footer;
