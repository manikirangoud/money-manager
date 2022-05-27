import React from 'react'
import { Badge, Card } from 'react-bootstrap';
import { Constants } from '../constants.tsx';
import Transactions from './Transactions';
import { getVaultName } from '../helpers/helpers';

interface Data {
    bank: BankVault;
}

const BankCard: React.FC<Data> = (props) => {

    const isSelected = props.bank && props.bank.id === props.selectedVaultId;
    const classes = isSelected ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';
    const badgeClass = isSelected ? 'light text-dark' : 'dark';

    return (
        <Card style={{ width: '22rem' }} className={classes} onClick={() => props.setVaultId(props.bank.id)}>
            <Card.Header>
                <Card.Title className='mb-0'>
                    {props.bank.name} {' '}
                    <Badge bg={badgeClass} pill>{getVaultName({ vaultId: props.bank.type })}</Badge>
                </Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Text>
                    {Constants.BALANCE + Constants.COLON} {props.bank.balance}
                </Card.Text>
                {isSelected && <Transactions selectedVault={props.bank} />}
            </Card.Body>
        </Card>
    );
}


export default BankCard;