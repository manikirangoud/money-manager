import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { renderVaultOptions, renderTransactionUI } from '../helpers/renderHelper';
import { VaultType, Constants } from '../constants.tsx';
import { db } from '../helpers/firebase';
import { collection, updateDoc, doc } from 'firebase/firestore';
import BankTransaction from './BankTransaction';

interface Data{
    vaults: Array;
}

const AddTransaction: React.FC<Data> = (props) => {

    const [vaultType, setVaultType] = React.useState(props.selectedVault.type);
    const [transactionType, setTransactionType] = React.useState(0);
    const [formData, updateFormData] = React.useState({});
    const [vaultId, setVaultId] = React.useState('');    

    const handleChange = (e) => {

        // if(e.target.name === "vName"){
        //     const v = props.vaults.find(v => v.id == e.target.value);
        //     if(v && v.type){
        //         setVaultType(v.type);
        //     }
        //     setVaultId(e.target.value);
        // } else{

            if(e.target.name === "transactionType"){
                setTransactionType(e.target.value);
            }

            updateFormData({
                ...formData,
                [e.target.name]: (e.target.name === "transactionType" || e.target.name === "amount") ? Number(e.target.value.trim()) : e.target.value.trim()
              });
       // }   
      };

      const addTransaction = ( ) => {
        const vaultRef = doc(db, "vaults", vaultId);
        updateDoc(vaultRef, {transactions: [formData]});
        props.handleAddTransaction(true);
      }
    
    return(
        <Card style={{ width: '35rem', height: 'fit-content' }} className="mb-3">

            <Card.Header>
                <Card.Title>Add a transaction to <span className='text-bold'>{props.selectedVault.name}</span></Card.Title>
            </Card.Header>

            <Card.Body>
                <Form>

                    {/* <Form.Group className="mb-3">
                        <Form.Label>Select the vault</Form.Label>
                        <Form.Select onChange={handleChange} required name="vName">
                            <option value='-1'>Select any vault to add a transaction</option>;
                            {props.vaults.map(v => {
                                return <option key={v.id} value={v.id}>{v.name}</option>;
                            })}
                        </Form.Select>
                    </Form.Group> */}

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