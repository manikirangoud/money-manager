import React from "react";
import { Card } from "react-bootstrap";
import { HistoryOperations } from "../constants.tsx";


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

const History: React.FC = (props) => {

    return (
        <Card style={{width: '20rem'}} className="mb-3">
            <Card.Body>
                "{props.history.name}" was {getOperationName(props.history.operation)} 
            </Card.Body>
        </Card>
    );
}

export default History;