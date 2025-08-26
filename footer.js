import { Container, Row, Col } from "react-bootstrap";

export function Footer({ data, name, phone }) {
  console.log(data);

  return (
    <div className="footer">
      <h3>
        {/* props */}
        {name}| {phone} |
      </h3>
      <Container fluid className="bg-dark text-white p-3">
        <Container>
          <Row>
            <Col className="lg-4 md-6 sm-12">
              <h4>Student Details:</h4>
              <p>Name: {data.Name}</p>
              <p>Class: {data.class}</p>
              <p>Roll No: {data.Roll_No}</p>
            </Col>
            <Col className="lg-4 md-6 sm-12">
              <h4>Student Details:</h4>
              <p>Name: {data.Name}</p>
              <p>Class: {data.class}</p>
              <p>Roll No: {data.Roll_No}</p>
            </Col>
            <Col className="lg-4 md-6 sm-12">
              <h4>Student Details:</h4>
              <p>Name: {data.Name}</p>
              <p>Class: {data.class}</p>
              <p>Roll No: {data.Roll_No}</p>
            </Col>
            <Col className="lg-4 md-6 sm-12">
              <h4>Student Details:</h4>
              <p>Name: {data.Name}</p>
              <p>Class: {data.class}</p>
              <p>Roll No: {data.Roll_No}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
