import React from 'react'
import { Card, Form } from 'react-bootstrap';
import { BankAccountOptions, CommonFeilds, BankFeilds } from '../constants.tsx';

interface Data {
  transactionType: BankAccountOptions.CREDIT;
  handleChange: () => void;
}

const BankTransaction: React.FC<Data> = (props) => {

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          name={CommonFeilds.AMOUNT}
          placeholder="1.00"
          min={1.00}
          onChange={props.handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{props.transactionType == BankAccountOptions.DEBIT ? 'Spent on' : 'Source'}</Form.Label>
        <Form.Control
          name={props.transactionType == BankAccountOptions.DEBIT ? BankFeilds.SPENTON : BankFeilds.SOURCE}
          placeholder={props.transactionType == BankAccountOptions.DEBIT ? 'On which item you have spent on?' : 'From which source have you received the amount.'}
          onChange={props.handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name={CommonFeilds.DESCRIPTION}
          placeholder="Add a detailed description"
          onChange={props.handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>On behalf of anyone?</Form.Label>
        <Form.Control
          name={BankFeilds.ON_BEHALF_OF}
          placeholder="You can mention any person's name that you did for transaction for them"
          onChange={props.handleChange}
          required
        />
      </Form.Group>
    </>
  );
}

export default BankTransaction;