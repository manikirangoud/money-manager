import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { renderVaultOptions, renderTransactionUI } from '../helpers/renderHelper';
import { Constants, CommonFeilds } from '../constants.tsx';
import { db, HistoryRef } from '../helpers/firebase';
import { updateDoc, doc, addDoc } from 'firebase/firestore';
import { BankAccountOptions, BankFeilds } from '../constants.tsx';
import { useDispatch } from 'react-redux';
import { addTransToVaultInit } from '../redux/actions/vaultActions';
import { addHistoryInit } from '../redux/actions/historyActions';

interface Data {
    vaults: Array;
}

const AddTransaction: React.FC<Data> = (props) => {

    const [vaultType] = React.useState(props && props.selectedVault && props.selectedVault.type);
    const [transactionType, setTransactionType] = React.useState(0);
    const [formData, updateFormData] = React.useState({});
    const [vaultId] = React.useState(props && props.selectedVault && props.selectedVault.id);
    const dispatch = useDispatch();

    const handleChange = (e) => {

        if (e.target.name === CommonFeilds.TRANSACTIONTYPE) {
            setTransactionType(e.target.value);
        }

        updateFormData({
            ...formData,
            [e.target.name]: (e.target.name === CommonFeilds.TRANSACTIONTYPE || e.target.name === CommonFeilds.AMOUNT) ? Number(e.target.value.trim()) : e.target.value.trim()
        });
    };

    const getHistoryFieldName = ({ formData, tType }) => {
        if(formData){
            if(formData.name){
                return formData.name;
            }else{
                if(tType === BankAccountOptions.DEBIT){
                    return formData[BankFeilds.SPENTON];
                } else if(tType === BankAccountOptions.CREDIT){
                    return formData[BankFeilds.SOURCE];
                }
            }
        }
    }

    const addTransaction = () => {
        formData.createdDate = Date().toString();
        formData.updatedDate = formData.createdDate;
        const history = {
            operation: 1,
            name: getHistoryFieldName({ formData: formData, tType: formData.transactionType }),
            parentType: props.selectedVault.type,
            parentId: vaultId,
            type: formData.transactionType,
            amount: formData.amount,
            createdDate: formData.createdDate,
        }
        let tempTrans = props.selectedVault.transactions ? [...props.selectedVault.transactions, formData] : [formData];

        dispatch(addTransToVaultInit(vaultId, tempTrans, props.selectedVault.type));
        dispatch(addHistoryInit(history));

        props.handleAddTransaction(true);
    }

    return (
        <Card style={{ width: '20rem', height: 'fit-content' }} className="mb-3 mt-3">

            <Card.Header>
                <Card.Title className='fs-6 mb-0'>Add a transaction to <span className='text-bold'>{props.selectedVault.name}</span></Card.Title>
            </Card.Header>

            <Card.Body>
                <Form>
                    {vaultType > 0 && renderVaultOptions(vaultType, handleChange)}

                    <Form.Group className="mb-3">
                        <Form.Label>Trasanction Date</Form.Label>
                        <Form.Control
                            type="date"
                            name={CommonFeilds.TRANSACTED_DATE}
                            placeholder="DD/MM/YYYY"
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {(vaultType > 0 && transactionType > 0) && renderTransactionUI(vaultType, transactionType, handleChange)}

                </Form>
            </Card.Body>

            <Card.Footer className='text-end'>
                <Button variant="outline-dark" className='me-3' onClick={() => props.handleAddTransaction(true)} size='sm'>{Constants.CANCEL}</Button>
                <Button variant="outline-dark" onClick={addTransaction} size='sm'>{Constants.SAVE_CHANGES}</Button>
            </Card.Footer>

        </Card>
    );
}


export default AddTransaction;