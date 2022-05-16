import React from 'react'
import { Card, Form } from 'react-bootstrap';
import { BankAccountOptions } from '../constants.tsx';

interface Data{
  transactionType: BankAccountOptions.CREDIT;
  handleChange: () => void;
}

const BankTransaction: React.FC<Data> = (props) => {

//   const vaultsRef = collection(db, "vaults");
//   const [formData, updateFormData] = React.useState(BankVault);
//   const [balanceOrLimit, setBalanceOrLimit] = React.useState('balance');
  
//   function addVault(){
//     addDoc(vaultsRef, formData);
//     props.hideCard(true);
//   }

//   const handleChange = (e) => {

//     if(e.target.name === "type"){
//         if(Number(e.target.value.trim()) === VaultType.CREDIT){
//           setBalanceOrLimit('limit');
//         }else{
//           setBalanceOrLimit('balance');
//         }
//     }

//     updateFormData({
//       ...formData,
//       [e.target.name]: (e.target.name === "type" || e.target.name === "balance") ? Number(e.target.value.trim()) : e.target.value.trim()
//     });
//   };
    
  return (
    <>
      <Card style={{ width: '20rem' }} className="mb-3">

        <Card.Body>

            <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type="number"
                    name="amount"
                    placeholder="0.00"
                    min={0.00}
                    onChange={props.handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>{props.transactionType == BankAccountOptions.DEBIT ? 'Spent on' : 'Source'}</Form.Label>
                <Form.Control
                    name={props.transactionType == BankAccountOptions.DEBIT ? 'spentOn' : 'source'}
                    placeholder={props.transactionType == BankAccountOptions.DEBIT ? 'On which item you have spent on?' : 'From which source have you received the amount.'}
                    onChange={props.handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name="description"
                    placeholder="Add a detailed description"
                    onChange={props.handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>On behalf of anyone?</Form.Label>
                <Form.Control
                    name="onBehalfOf"
                    placeholder="You can mention any person's name that you did for transaction for them"
                    onChange={props.handleChange}
                    required
                />
            </Form.Group>

        </Card.Body>

      </Card>
    </>
  );
}
  
export default BankTransaction;