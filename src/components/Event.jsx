import React from "react";
import { Card } from "react-bootstrap";

function getDays(d){
    const diffTime = new Date(d).getTime() - new Date().getTime();
    const daysLeft = diffTime / (1000 * 3600 * 24);
    const date = {diffDays: daysLeft, daysLeft: Math.trunc(daysLeft) + 1, hours: Math.trunc((daysLeft / 10))};
    return date;
}

const Event: React.FC = (props) => {

    const targetDate = getDays(props.event?.targetDate);

    const upcomingEvent = targetDate?.daysLeft > 0;

    return (
        <Card style={{ width: '22rem' }} className="mb-3">
            <Card.Header>
                {props.event?.name}
            </Card.Header>

            <Card.Body>
                <p><b>{ Math.abs(targetDate?.daysLeft) + ' days '}</b> and <b>{ targetDate?.hours + ' hours '}</b> 
                    {upcomingEvent ? ' are left for the event.' : ' past the event.'}</p>
                <p><b>Target Date: </b> {props.event?.targetDate}</p>
            </Card.Body>
        </Card>
    );
}

export default Event;