import React from 'react'
import { Card, Form } from 'react-bootstrap';
import { StockOptions } from '../constants.tsx';

interface Data{
  transactionType: StockOptions.BUY;
  handleChange: () => void;
}

const StockTransaction: React.FC<Data> = (props) => {
    
  return (
    <>
      <Card style={{ width: '20rem' }} className="mb-3">

        <Card.Body>

            <Form.Group className="mb-3">
                <Form.Label>Stock name</Form.Label>
                <Form.Control
                    name='name'
                    placeholder='Add the stock name'
                    onChange={props.handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type="number"
                    name="amount"
                    placeholder="1.00"
                    min={1}
                    onChange={props.handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                    type="number"
                    name="quantity"
                    placeholder="0"
                    min={1}
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

        </Card.Body>

      </Card>
    </>
  );
}
  
export default StockTransaction;