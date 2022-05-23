import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { renderVaultOptions, renderTransactionUI } from '../helpers/renderHelper';
import { Constants, CommonFeilds } from '../constants.tsx';
import { db } from '../helpers/firebase';
import { updateDoc, doc } from 'firebase/firestore';

interface Data{
    vaults: Array;
}

const AddTransaction: React.FC<Data> = (props) => {

    const [vaultType] = React.useState(props && props.selectedVault && props.selectedVault.type);
    const [transactionType, setTransactionType] = React.useState(0);
    const [formData, updateFormData] = React.useState({});
    const [vaultId] = React.useState(props && props.selectedVault && props.selectedVault.id); 

    const handleChange = (e) => {

        if(e.target.name === CommonFeilds.TRANSACTIONTYPE){
            setTransactionType(e.target.value);
        }

        updateFormData({
            ...formData,
            [e.target.name]: (e.target.name === CommonFeilds.TRANSACTIONTYPE || e.target.name === CommonFeilds.AMOUNT) ? Number(e.target.value.trim()) : e.target.value.trim()
        });
      };

      const addTransaction = ( ) => {
        const vaultRef = doc(db, "vaults", vaultId);

        updateDoc(vaultRef, {transactions: props.selectedVault.transactions ? props.selectedVault.transactions.concat(formData) : [formData]});
        props.handleAddTransaction(true);
      }
    
    return(
        <Card style={{ width: '35rem', height: 'fit-content' }} className="mb-3">

            <Card.Header>
                <Card.Title>Add a transaction to <span className='text-bold'>{props.selectedVault.name}</span></Card.Title>
            </Card.Header>

            <Card.Body>
                <Form>

                    {vaultType > 0 && renderVaultOptions(vaultType, handleChange)}

                    { (vaultType > 0 && transactionType > 0) && renderTransactionUI(vaultType, transactionType, handleChange) }

                </Form>
            </Card.Body>

            <Card.Footer className='text-end'>
                <Button variant="dark" onClick={addTransaction}>{Constants.SAVE_CHANGES}</Button>
            </Card.Footer>

        </Card>
    );
}


export default AddTransaction;