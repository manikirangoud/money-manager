import React from 'react'
import { Badge, Card } from 'react-bootstrap';
import Transactions from './Transactions';
import { getVaultName } from '../helpers/helpers';

interface Data {
    credit: CreditVault;
}

const CreditCard: React.FC<Data> = (props) => {

    const isSelected = props.credit && props.credit.id === props.selectedVaultId;
    const classes = isSelected ? 'vault-selected mb-3 c-pointer' : 'mb-3 c-pointer';
    const badgeClass = isSelected ? 'light text-dark' : 'dark';

    return (
        <Card style={{ width: '20rem' }} className={classes} onClick={() => props.setVaultId(props.credit.id)}>
            <Card.Header>
                <Card.Title className='mb-0'>
                    {props.credit.name} {' '}
                    <Badge bg={badgeClass} pill>{getVaultName({ vaultId: props.credit.type })}</Badge>
                </Card.Title>
            </Card.Header>

            <Card.Body>
                <Card.Title>{props.credit.name}</Card.Title>
                <Card.Text>Credit used: {props.credit.used ? props.credit.used : 0} / {props.credit.limit}</Card.Text>
                {isSelected && <Transactions selectedVault={props.credit} />}
            </Card.Body>

        </Card>
    );
}


export default CreditCard;