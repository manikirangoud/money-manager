import React from 'react'
import { Card } from 'react-bootstrap';
import { Constants } from '../constants.tsx';

interface Data{
    bank: BankVault;
}

const BankCard: React.FC<Data> = (props) => {

    const classes = props.bank.id === props.selectedVaultId ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';

    return(
        <Card style={{ width: '20rem' }} className={classes} onClick={() => {props.setVaultId(props.bank.id)}}>
            <Card.Header>
                <Card.Title>{props.bank.name}</Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Text>
                    {Constants.BALANCE + Constants.COLON} {props.bank.balance}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


export default BankCard;