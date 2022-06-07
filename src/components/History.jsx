import React from "react";
import { Card } from "react-bootstrap";
import { HistoryOperations } from "../constants.tsx";
import { getFormattedCurrency } from "../helpers/helpers";
import * as moment from 'moment';

const getOperationName = (o) => {
    switch(o){
        case HistoryOperations.CREATE:
            return " created ";
        case HistoryOperations.UPDATE:
            return " updated ";
        case HistoryOperations.DELETE:
            return " deleted ";
    }
}

const DATE_FORMAT = 'DD-MM-YYYY hh:mm:ss A';

const getFormattedTimeStamp = (ts, df) => {
    return moment(ts).format(df);
}

const History: React.FC = (props) => {

    return (
        <Card style={{width: '20rem'}} className="mb-3">
            <Card.Body>
                <span className="fw-bold">{props.history.name}</span> 
                 {' '}was{' '}
                {getOperationName(props.history.operation)} 
                {' '}with {' '}
                <span className="fw-bold">{getFormattedCurrency(props.history.amount)}</span>
                {' '} rupees on {' '}
                <span className="fw-bold">{getFormattedTimeStamp(props.history.createdDate, DATE_FORMAT)}</span>
                {' '} date time.
            </Card.Body>
        </Card>
    );
}

export default History;