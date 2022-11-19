import React from "react";
import { Card } from "react-bootstrap";

function getDays(d){
    const diffTime = new Date(d).getTime() - new Date().getTime();
    const daysLeft = diffTime / (1000 * 3600 * 24);

    const date = {diffDays: daysLeft, daysLeft: Math.trunc(daysLeft) + 1, hours: Math.trunc((daysLeft / 10))};
    // console.log("date", date);

    return date;

}

const DaysLeft: React.FC = (props) => {

    const targetDate = getDays(props.daysLeft.targetDate);

    return (
        <Card style={{ width: '22rem' }} className="mb-3">
            <Card.Header>
                {props.daysLeft.name}
            </Card.Header>

            <Card.Body>
                <p><b>{ targetDate.daysLeft + ' days '}</b> and <b>{ targetDate.hours + ' hours '}</b> are left for the event.</p>
                <p><b>Target Date: </b> {props.daysLeft.targetDate}</p>
            </Card.Body>
        </Card>
    );
}

export default DaysLeft;