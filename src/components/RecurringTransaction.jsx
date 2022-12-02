import React from "react";
import { Badge, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getFormattedCurrency, getFormattedCurrencyInCAD } from "../helpers/helpers";


const RecurringTransaction: React.FC = (props) => {

    const rtData = props.recurringTransaction;
    const dateStatus = rtData.dateStatus;

    const userData = useSelector(state => state.userData);
    const cadRate = userData && userData.cadRate;

    return (
        <Card style={{ width: '22rem' }} className="mb-3">
            <Card.Header className='mb-0 d-flex justify-content-between align-items-center'>
                {rtData.name} <Badge bg="dark" pill>{getFormattedCurrency(rtData.amount)}</Badge>
                <Badge bg="dark" pill>{getFormattedCurrencyInCAD(rtData.amount / cadRate)}</Badge>
            </Card.Header>

            <Card.Body>
                <Card.Text>Amount: <span className="fw-bold">{getFormattedCurrency(rtData.amount)}</span> <br/>
                    Completed <span className="fw-bold">{dateStatus.monthsCompleted + ' / ' + rtData.tenureInMonths}</span> in months <br/>
                    Start Date: <span className="fw-bold">{rtData.startDate}</span> <br/>
                    Total Paid: <span className="fw-bold">{getFormattedCurrency(rtData.amount * dateStatus.monthsCompleted)}</span> <br/>
                    Total Upcoming: <span className="fw-bold">{getFormattedCurrency(rtData.amount * (rtData.tenureInMonths - dateStatus.monthsCompleted))}</span>
                </Card.Text>

                {dateStatus.days === 0 && <Card.Text className="text-danger"><span className="fw-bold">Today</span> is the presentation day.</Card.Text>}
                {dateStatus.days > 0 ? <Card.Text className="text-success">Completed <span className="fw-bold">{Math.abs(dateStatus.days)}</span> day/s ago.</Card.Text> 
                    : <Card.Text className="text-danger">Upcoming in <span className="fw-bold">{Math.abs(dateStatus.days)}</span> day/s.</Card.Text>}
            </Card.Body>
        </Card>
    );
}

export default RecurringTransaction;