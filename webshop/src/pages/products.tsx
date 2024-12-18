import { Button, Container } from "react-bootstrap";
import Card from "../components/Card";

export default function Products(){
    let products = [
        {
            image: "https://picsum.photos/id/3/200/200",
            name: "Product 1",
            price: 1000
        },
        {
            image: "kissbence.png",
            name: "Product 2",
            price: 2000
        },
        {
            image: "https://picsum.photos/id/33/200/200",
            name: "Product 3",
            price: 3000
        },
        {
            image: "https://picsum.photos/id/44/200/200",
            name: "Product 4",
            price: 4000
        },
        {
            image: "https://picsum.photos/id/55/200/200",
            name: "Product 5",
            price: 5000
        },
        {
            image: "kissbence.png",
            name: "Product 6",
            price: 6000
        }
    ]
    return(
        <Container>
            <h1>Products</h1>
            <div className="d-flex flex-wrap">
                {products.map((product, index) => (
                    <Card key={index} image={product.image} name={product.name} price={product.price} buyButton={true}/>
                ))}
            </div>
        </Container>
    )
}