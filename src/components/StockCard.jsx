import React from 'react'
import { Button, Card } from 'react-bootstrap';

interface Data{
    stock: StockVault;
}

const StockCard: React.FC<Data> = (stock: StockVault) => {
    
    return(
        <Card style={{ width: '20rem' }} className="mb-3">
            <Card.Body>
            <Card.Title>{stock.stock.name}</Card.Title>
            <Card.Text>
                Balance: {stock.stock.balance}
            </Card.Text>
            <Button variant="dark">Go to Details</Button>
            </Card.Body>
        </Card>
    );
}


export default StockCard;