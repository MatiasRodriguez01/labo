import { FC } from "react"
import { Card } from "react-bootstrap"

interface ItemProduct {
    precio: number,
    imagen: string,
    nombre: string
}

interface IPropsListProducts {
    arrItems: ItemProduct[]
}

export const ListProducts: FC<IPropsListProducts> = ({ arrItems }) => {
    return (
        <div 
        className="p-4 m-3 border rounded d-grid gap-2"
        style={{
            gridTemplateColumns:'repeat(4, 1fr)',
            justifyItems:'center',
            alignItems:'center'
        }}>
            {
                arrItems.map((el, index) => (
                    <Card key={index} style={{ width: '18rem', height: '20rem' }}>
                        <Card.Img variant="top" src={el.imagen} style={{width: '100%', height: '15rem'}} />
                        <Card.Body>
                            <Card.Title>{el.nombre}</Card.Title>
                            <Card.Text>{el.precio}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}
