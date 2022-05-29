import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap';
import { Constants } from '../constants.tsx';
import Transactions from './Transactions';
import { getVaultName, getBankBalance } from '../helpers/helpers';
import AddTransaction from './AddTransaction';

interface Data {
    bank: BankVault;
}

const BankCard: React.FC<Data> = (props) => {

    const isSelected = props.bank && props.bank.id === props.selectedVaultId;
    const classes = isSelected ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';
    const badgeClass = isSelected ? 'light text-dark' : 'dark';
    const [showAddTransaction, setShowAddTransaction] = React.useState(false);

    const handleAddTransaction = (show) => {
        setShowAddTransaction(!show);
    }

    return (
        <Card style={{ width: '22rem' }} className={classes} onClick={() => props.setVaultId(props.bank.id)}>
            <Card.Header>
                <Card.Title className='mb-0 d-flex justify-content-between align-items-center'>
                    {props.bank.name} {' '}
                    <Badge bg={badgeClass} pill>{getVaultName({ vaultId: props.bank.type })}</Badge>
                </Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Text>
                    {Constants.BALANCE + Constants.COLON} {props.bank.balance}
                    {/* {getBankBalance({trans: props.bank.transactions})} */}
                </Card.Text>
                {isSelected && <Transactions selectedVault={props.bank} />}
                {showAddTransaction &&
                    <AddTransaction
                        selectedVault={props.bank}
                        handleAddTransaction={handleAddTransaction}>
                    </AddTransaction>
                }
            </Card.Body>
            
            {(isSelected && !showAddTransaction) && (
                <div className='text-center mb-3'>
                    <Button size='sm' variant="outline-dark" onClick={() => handleAddTransaction(showAddTransaction)}>
                         {Constants.ADD_TRANSACTION}
                    </Button>
                </div>
            )}
        </Card>
    );
}


export default BankCard;