import React from 'react'
import { Card } from 'react-bootstrap';
import { Constants } from '../constants.tsx';

interface Data{
    stock: StockVault;
}

const StockCard: React.FC<Data> = (props) => {

    const classes = props.stock.id === props.selectedVaultId ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';
    
    return(
        <Card style={{ width: '20rem' }} className={classes} onClick={() => props.setVaultId(props.stock.id)}>
             <Card.Header>
                <Card.Title>{props.stock.name}</Card.Title>
            </Card.Header>
            
            <Card.Body>
                <Card.Text>
                    {Constants.BALANCE + Constants.COLON} {props.stock.balance}
                    <br/>
                    {Constants.STOCKS + Constants.COLON} { props.stock.transactions && props.stock.transactions.length} //Test stock - history
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


export default StockCard;