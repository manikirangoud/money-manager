import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import RecurringTransaction from '../DataObjects/RecurringTransaction.ts';
import { CommonFeilds, Constants } from '../constants.tsx';
import { useDispatch } from 'react-redux';
import { addRecurringTransactionInit } from '../redux/actions/recurringTransactionActions';

interface Data{
  show: false;
  showCard: () => void;
}

const AddRecurringTransaction: React.FC<Data> = (props) => {

  const [rtData, updateRtData] = React.useState(RecurringTransaction);
  const dispatch = useDispatch();
  
  function addRecurringTransaction(){

    rtData.createdDate = Date().toString();
    rtData.updatedDate = rtData.createdDate;
    dispatch(addRecurringTransactionInit(rtData));
    props.hideCard(true);

  }

  const handleChange = (e) => {

    updateRtData({
      ...rtData,
      [e.target.name]: e.target.type === "number" ? Number(e.target.value.trim()) : e.target.value.trim()
    });
  };
    
  return (
    <>
      <Card style={{ width: '22rem' }} className="mb-3">

        <Card.Header>
          <Card.Title>Add a new recurring transaction</Card.Title>
        </Card.Header>

        <Card.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Transaction name</Form.Label>
              <Form.Control
                name={CommonFeilds.NAME}
                placeholder="Recurring transaction name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Loan amount</Form.Label>
              <Form.Control
                type="number"
                name={CommonFeilds.LOAN_AMOUNT}
                placeholder="1.00"
                min={1.00}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name={CommonFeilds.AMOUNT}
                placeholder="1.00"
                min={1.00}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tenure in months</Form.Label>
              <Form.Control
                type="number"
                name={CommonFeilds.TENURE_IN_MONTHS}
                placeholder="1"
                min={1}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                    type="date"
                    name={CommonFeilds.START_DATE}
                    placeholder="DD/MM/YYYY"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

          </Form>
        </Card.Body>

        <Card.Footer className='text-end'>
          <Button variant="dark" onClick={(e) => {addRecurringTransaction(e)}}>
           {Constants.SAVE_CHANGES}
          </Button>
        </Card.Footer>

      </Card>
    </>
  );
}
  
export default AddRecurringTransaction;