import React from 'react'
import { Badge, Card } from 'react-bootstrap';
import { Constants } from '../constants.tsx';
import { getVaultName } from '../helpers/helpers';
import Transactions from './Transactions';

interface Data {
    stock: StockVault;
}

const StockCard: React.FC<Data> = (props) => {

    const isSelected = props.stock.id === props.selectedVaultId;
    const classes = isSelected ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';
    const badgeClass = isSelected ? 'light text-dark' : 'dark';

    return (
        <Card style={{ width: '22rem' }} className={classes} onClick={() => props.setVaultId(props.stock.id)}>
            <Card.Header>
                <Card.Title className='mb-0'>
                    {props.stock.name} {' '}
                    <Badge bg={badgeClass} pill>{getVaultName({ vaultId: props.stock.type })}</Badge>
                </Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Text>
                    {Constants.BALANCE + Constants.COLON} {props.stock.balance}
                    <br />
                    {Constants.STOCKS + Constants.COLON} {props.stock.transactions && props.stock.transactions.length}
                </Card.Text>
                {isSelected && <Transactions selectedVault={props.stock} />}
            </Card.Body>
        </Card>
    );
}


export default StockCard;