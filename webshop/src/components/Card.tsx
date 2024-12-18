import { Button, Card } from "react-bootstrap";

interface Product {
  image: string;
  name: string;
  price: number;
  buyButton?: boolean;
}

export default function ProductCard({ image, name, price, buyButton = false }: Product) {
  return (
    <Card style={{ width: "18rem" }} className="me-auto my-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        {buyButton && <Button variant="primary">Buy</Button>}
      </Card.Body>
    </Card>
  );
}
