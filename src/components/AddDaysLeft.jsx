import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import DaysLeft from '../DataObjects/DaysLeft.ts';
import { CommonFeilds, Constants } from '../constants.tsx';
import { useDispatch } from 'react-redux';
import { addDaysLeftInit } from '../redux/actions/daysLeftActions';

interface Data{
  show: false;
  showCard: () => void;
}

const AddDaysLeft: React.FC<Data> = (props) => {

  const [daysLeft, updateDaysLeft] = React.useState(DaysLeft);
  const dispatch = useDispatch();
  
  function addDaysLeft(){

    daysLeft.createdDate = Date().toString();
    daysLeft.updatedDate = daysLeft.createdDate;
    dispatch(addDaysLeftInit(daysLeft));
    props.hideCard(true);

  }

  const handleChange = (e) => {

    updateDaysLeft({
      ...daysLeft,
      [e.target.name]: e.target.value.trim()
    });
  };
    
  return (
    <>
      <Card style={{ width: '22rem' }} className="mb-3">

        <Card.Header>
          <Card.Title>Add a new days left</Card.Title>
        </Card.Header>

        <Card.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Days left name</Form.Label>
              <Form.Control
                name={CommonFeilds.NAME}
                placeholder="Days left name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Trasanction Date</Form.Label>
                <Form.Control
                    type="date"
                    name={CommonFeilds.TARGET_DATE}
                    placeholder="DD/MM/YYYY"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

          </Form>
        </Card.Body>

        <Card.Footer className='text-end'>
          <Button variant="dark" onClick={(e) => {addDaysLeft(e)}}>
           {Constants.SAVE_CHANGES}
          </Button>
        </Card.Footer>

      </Card>
    </>
  );
}
  
export default AddDaysLeft;