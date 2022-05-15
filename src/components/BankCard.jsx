import React from 'react'
import { Button, Card } from 'react-bootstrap';

interface Data{
    bank: BankVault;
}

const BankCard: React.FC<Data> = (bank: BankVault) => {
    
    return(
        <Card style={{ width: '20rem' }} className="mb-3">
            <Card.Body>
            <Card.Title>{bank.bank.name}</Card.Title>
            <Card.Text>
                Balance: {bank.bank.balance}
            </Card.Text>
            <Button variant="dark">Go to Details</Button>
            </Card.Body>
        </Card>
    );
}


export default BankCard;