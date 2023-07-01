import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function Post({title, description, cover, id}) {

  const url = "/list/" + id;

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cover} style={{ maxWidth: "100%", maxHeight: "300px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary" href={url}>View</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Post;
