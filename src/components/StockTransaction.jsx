import React from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { StockOptions } from '../constants.tsx';

interface Data {
  transactionType: StockOptions.BUY;
  handleChange: () => void;
}

const StockTransaction: React.FC<Data> = (props) => {

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Stock name</Form.Label>
        <Form.Control
          name='name'
          placeholder='Add the stock name'
          onChange={props.handleChange}
          required
        />
      </Form.Group>

      <Row>
        <Col xs={8}>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                name="amount"
                placeholder="1.00"
                min={1}
                onChange={props.handleChange}
                required
              />
            </InputGroup>
          </Form.Group>
        </Col>

        <Col>
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
        </Col>
      </Row>

      

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          rows={3}
          placeholder="Add a detailed description"
          onChange={props.handleChange}
          required
        />
      </Form.Group>
    </>
  );
}

export default StockTransaction;