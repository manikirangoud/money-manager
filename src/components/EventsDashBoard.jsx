import React, { useEffect } from "react";
import { Constants } from '../constants.tsx';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getEventsInit } from "../redux/actions/eventActions";
import AddEvent from "./AddEvent";
import Event from "./Event";


const EventsDashBoard: React.FC = () => {

    const [showAddEvent, setShowAddEvent] = React.useState(false);
    const dispatch = useDispatch();
    const eventData = useSelector(state => state.eventsData);
    const events = eventData && eventData.events;

    useEffect(() => {
      dispatch(getEventsInit());
    }, []);

    const handleAddEvent = (show) => {
      setShowAddEvent(!show);
    }

    return (
        <div className="mt-3 d-flex flex-column align-items-center" style={{minHeight: '80vh'}}>
          <h3>All Events</h3>
          {events && events.map(d => <Event event={d} key={d.id}></Event>)}

          {showAddEvent && <AddEvent hideCard={handleAddEvent} ></AddEvent>}

          <div className='text-center mb-3' style={{width: '22rem'}}>
            <Button style={{width: '20rem'}} variant="outline-dark" size='sm' 
                onClick={() => handleAddEvent(showAddEvent)}>{showAddEvent ? Constants.CANCEL : Constants.ADD_EVENT}
            </Button>
          </div>
        </div>
    );
}

export default EventsDashBoard;