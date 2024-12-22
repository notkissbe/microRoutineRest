import { Button, Container } from "react-bootstrap";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export interface Termek{
    id: number;
    nev: string;
    leiras: string;
    ar: number;
    keszlet: number;
    keplink: string;
}


export default function Products(){
   /* let products = [
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
    ]*/

    const [products, setProducts] = useState([] as Termek[]);
    
    function fetchTablets() {
        fetch("http://localhost:3000/termekek")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setProducts(data);
            })
    }

    useEffect(() => {
        fetchTablets();
    }, [])


    return(
        <Container>
            <h1>Products</h1>
            <div className="d-flex flex-wrap">
                {products.map((product, index) => (
                    <Card key={index} id={index} image={product.keplink} name={product.nev} price={product.ar} buyButton={true}/>
                ))}
            </div>
        </Container>
    )
}