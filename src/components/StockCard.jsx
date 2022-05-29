import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap';
import { Constants } from '../constants.tsx';
import { getVaultName } from '../helpers/helpers';
import AddTransaction from './AddTransaction';
import Transactions from './Transactions';

interface Data {
    stock: StockVault;
}

const StockCard: React.FC<Data> = (props) => {

    const isSelected = props.stock.id === props.selectedVaultId;
    const classes = isSelected ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';
    const badgeClass = isSelected ? 'light text-dark' : 'dark';
    const [showAddTransaction, setShowAddTransaction] = React.useState(false);

    const handleAddTransaction = (show) => {
        setShowAddTransaction(!show);
    }

    return (
        <Card style={{ width: '22rem' }} className={classes} onClick={() => props.setVaultId(props.stock.id)}>
            <Card.Header>
                <Card.Title className='mb-0 d-flex justify-content-between align-items-center'>
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
                {showAddTransaction &&
                    <AddTransaction
                        selectedVault={props.stock}
                        handleAddTransaction={handleAddTransaction}>
                    </AddTransaction>
                }
            </Card.Body>

            {(isSelected || showAddTransaction) && (
                <div className='text-center mb-3'>
                <Button size='sm' variant="outline-dark" onClick={() => handleAddTransaction(showAddTransaction)}>
                    {showAddTransaction ? Constants.CANCEL : Constants.ADD_TRANSACTION}
                </Button>
            </div>
            )}
        </Card>
    );
}


export default StockCard;