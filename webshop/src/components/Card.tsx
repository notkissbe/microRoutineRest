import React from "react";
import { Button, Card } from "react-bootstrap";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  buyButton?: boolean;
}

export class CartItem {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

function handleBuy(cartitem: CartItem) {
  let currentCart = localStorage.getItem("cart");
  let cart = currentCart ? JSON.parse(currentCart) : [];
  cart.push({ id: cartitem.id, name: cartitem.name, price: cartitem.price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

export default function ProductCard({id, image, name, price, buyButton = false }: Product) {
  return (
    <Card style={{ width: "18rem" }} className="me-auto my-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        {buyButton && <Button variant="primary" onClick={()=>{handleBuy(new CartItem(id,name,price))}}>Buy</Button>}
      </Card.Body>
    </Card>
  );
}
