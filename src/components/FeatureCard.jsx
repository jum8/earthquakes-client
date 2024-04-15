import Card from 'react-bootstrap/Card';

function FeatureCard({ item }) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.attributes.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Magnitude: {item.attributes.magnitude}</Card.Subtitle>
        <Card.Text>
          Place: {item.attributes.place}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;