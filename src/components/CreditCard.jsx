import React from 'react'
import { Badge, Card, ProgressBar } from 'react-bootstrap';
import Transactions from './Transactions';
import { getVaultName, getCreditBalance } from '../helpers/helpers';
import AddTransaction from './AddTransaction';
import { Button } from 'react-bootstrap';
import { Constants } from '../constants.tsx';

interface Data {
    credit: CreditVault;
}

const getProgress = (bal, lim) => {
    return (((lim - bal) / lim) * 100).toFixed(2);
}

const CreditCard: React.FC<Data> = (props) => {

    const isSelected = props.credit && props.credit.id === props.selectedVaultId;
    const classes = isSelected ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';
    const badgeClass = isSelected ? 'light text-dark' : 'dark';
    const [showAddTransaction, setShowAddTransaction] = React.useState(false);

    const handleAddTransaction = (show) => {
        setShowAddTransaction(!show);
    }

    const progress = getProgress(props.credit.balance, props.credit.limit);

    return (
        <Card style={{ width: '22rem' }} className={classes} onClick={(e) => props.setVaultId(props.credit.id)}>
            <Card.Header>
                <Card.Title className='mb-0 d-flex justify-content-between align-items-center'>
                    {props.credit.name} {' '}
                    <Badge bg={badgeClass} pill>{getVaultName({ vaultId: props.credit.type })}</Badge>
                </Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Text className='mb-2'>
                    Credit used:
                    <span className='text-danger fw-bold'> {getCreditBalance({ trans: props.credit.transactions })} </span>
                    /
                    <span className='fw-bold'> {props.credit.limit}</span>
                </Card.Text>
                <ProgressBar variant='success' now={progress} label={`${progress}%`} style={{height: '.7rem', fontSize: '.6rem'}} className='mb-2'/>
                {isSelected && <Transactions selectedVault={props.credit} />}
                {showAddTransaction &&
                    <AddTransaction
                        selectedVault={props.credit}
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


export default CreditCard;