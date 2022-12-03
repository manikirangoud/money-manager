import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import Event from '../DataObjects/Event.ts';
import { CommonFeilds, Constants } from '../constants.tsx';
import { useDispatch } from 'react-redux';
import { addEventInit } from '../redux/actions/eventActions';

interface Data{
  show: false;
  showCard: () => void;
}

const AddEvent: React.FC<Data> = (props) => {

  const [event, updateEvent] = React.useState(Event);
  const dispatch = useDispatch();
  
  function addEvent(){

    event.createdDate = Date().toString();
    event.updatedDate = event.createdDate;
    dispatch(addEventInit(event));
    props.hideCard(true);

  }

  const handleChange = (e) => {

    updateEvent({
      ...event,
      [e.target.name]: e.target.value.trim()
    });

    console.log("event", event);
  };
    
  return (
    <>
      <Card style={{ width: '22rem' }} className="mb-3">

        <Card.Header>
          <Card.Title>Add a new event</Card.Title>
        </Card.Header>

        <Card.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Label>Event name</Form.Label>
              <Form.Control
                name={CommonFeilds.NAME}
                placeholder="Event name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Target Date</Form.Label>
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
          <Button variant="dark" onClick={(e) => {addEvent(e)}}>
           {Constants.SAVE_CHANGES}
          </Button>
        </Card.Footer>

      </Card>
    </>
  );
}
  
export default AddEvent;