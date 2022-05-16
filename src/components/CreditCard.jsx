import React from 'react'
import { Card } from 'react-bootstrap';

interface Data{
    credit: CreditVault;
}

const CreditCard: React.FC<Data> = (props) => {
    
    const classes = props.credit.id === props.selectedVaultId ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';

    return(
        <Card style={{ width: '20rem' }} className={classes} onClick={() => props.setVaultId(props.credit.id)}>
             <Card.Header>
                <Card.Title>{props.credit.name}</Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Title>{props.credit.name}</Card.Title>
                <Card.Text>Credit used: {props.credit.used ? props.credit.used : 0 } / {props.credit.limit}</Card.Text>
            </Card.Body>

        </Card>
    );
}


export default CreditCard;