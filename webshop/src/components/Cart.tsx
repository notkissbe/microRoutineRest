import { useEffect, useState } from "react";
import { Button, Container, Tab, Table } from "react-bootstrap";
import { Termek } from "../pages/products";
import { CartItem } from "./Card";

export default function Cart(){

    const [kosar, setKosar] = useState([] as CartItem[]);

    useEffect(() => {
        localStorage.getItem("cart") && setKosar(JSON.parse(localStorage.getItem("cart")!));
    }, []);

    function handleDelete(){
        localStorage.removeItem("cart");
        setKosar([]);
    }

    function deleteOne(id: number){
        let newCart = kosar.filter((termek) => termek.id !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        setKosar(newCart);
    }

    return(
        <Container>
        <h1>Cart</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Név</th>
                    <th>Price</th>
                    <th>*</th>
                </tr>
            </thead>
            <tbody>
                {kosar.length === 0 ? (
                    <tr>
                        <td className="text-center" colSpan={3}>Az Ön kosara üres</td>
                    </tr>
                ) : null}
                {kosar.map((termek, index) => (
                    <tr key={termek.id}>
                        <td>{index + 1}</td>
                        <td>{termek.name}</td>
                        <td>{termek.price}</td>
                        <Button variant="danger" onClick={() => {deleteOne(termek.id)}}>Törlés</Button>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={2}>Total</td>
                    <td>{kosar.reduce((acc, curr) => acc + curr.price, 0)}</td>
                </tr>

            </tfoot>

            </Table>

            <Button variant="danger" className="w-100" onClick={handleDelete}>Kosár ürítése</Button>
        </Container>
    )
}
