import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecurringTransaction from "./RecurringTransaction";
import { getRecurringTransactionsInit } from "../redux/actions/recurringTransactionActions";
import AddRecurringTransaction from "./AddRecurringTransaction";
import { Constants, RecurringTrasactionStatus } from '../constants.tsx';
import { Accordion, Badge, Button, Form } from "react-bootstrap";
import { getFormattedCurrency, getFormattedCurrencyInCAD } from "../helpers/helpers";
import { updateCadRateInit } from '../redux/actions/userActions';


const RecurringTransactionsDashBoard: React.FC = () => {

  const [showAddRT, setShowAddRT] = React.useState(false);
  const dispatch = useDispatch();
  const rtData = useSelector(state => state.recurringTransactionData);
  const rtList = rtData && rtData.recurringTransactions;
  const TRANS_STATUSES = ['TODAY', 'UPCOMING', 'COMPLETED', 'ALL'];

  const userData = useSelector(state => state.userData);
  const cadRate = userData && userData.cadRate;

  if(rtList){
    rtList.map(r => {
      r.dateStatus = getDays(r.startDate);
      console.log("r.dateStatus", r.dateStatus);
    });
  }

  function getDays(d){
    const startDate = new Date(d);
    const currentDate = new Date();
    const dateStatus = getDateStatus(startDate, currentDate);
    return getCompletedMonths(dateStatus);
  }

  function getDateStatus(startDate, currentDate){
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    const daysDiff = currentDate.getDate() - startDate.getDate();
    return {years: yearsDiff, months: monthsDiff, days: daysDiff };
  }

  function getCompletedMonths(dateStatus){
    if(dateStatus.days === 0){
        dateStatus.paymentDay = 'Today';
        dateStatus.status = RecurringTrasactionStatus.TODAY;
        dateStatus.monthsCompleted = (dateStatus.years * 12) + dateStatus.months;
        if(dateStatus.years > 0 && dateStatus.months === 0){
          dateStatus.monthsCompleted -= 1;
        }
    } else if(dateStatus.days < 0){
        dateStatus.paymentDay = 'Upcoming';
        dateStatus.status = RecurringTrasactionStatus.UPCOMING;
        dateStatus.monthsCompleted = (dateStatus.years * 12) + dateStatus.months;
        if(dateStatus.years > 0 && dateStatus.months === 0){
          dateStatus.monthsCompleted -= 1;
        }
    } else {
        dateStatus.paymentDay = 'Completed';
        dateStatus.status = RecurringTrasactionStatus.COMPLETED;
        dateStatus.monthsCompleted = (dateStatus.years * 12) + dateStatus.months + 1;
    }
    return dateStatus;
  }

  useEffect(() => {
    dispatch(getRecurringTransactionsInit());
  }, []);

  const handleAddRT= (show) => {
    setShowAddRT(!show);
  }

  const handleChange = (e) => {
    dispatch(updateCadRateInit(Number(e.target.value.trim())));
  };

  return (
      <div className="mt-3 d-flex flex-column align-items-center" style={{minHeight: '80vh'}}>
        <div className="d-flex justify-content-center">
          <h3>Recurring Transactions</h3>
          <Form.Group className="mb-3 ms-5" style={{ width: '5rem' }}>
            <Form.Control
              type="number"
              min={1}
              value={cadRate}
              onChange={handleChange}
              required
            />
          </Form.Group>  
        </div>

        <Accordion defaultActiveKey="0" style={{ width: '24rem' }} className="mb-3">
          {
            TRANS_STATUSES.map((key, index) => {
              const filteredList = rtList && key !== 'ALL' ? rtList.filter(d => d.dateStatus.status === RecurringTrasactionStatus[key]) : rtList;
              const totalAmount = filteredList.reduce((a, c) => {return a + Number(c.amount)}, 0);
              const pillClasses = key === 'UPCOMING' ? 'danger' : key === 'COMPLETED' ? 'success' : key === 'TODAY' ? 'warning text-dark' : 'dark'; 
              return (
                <Accordion.Item eventKey={index.toString()} key={index.toString()} className="mb-3">
                  <Accordion.Header className="fw-bold">{key}
                    <Badge bg={pillClasses} pill className="ms-3 me-2">{filteredList.length}</Badge>
                    <Badge bg={pillClasses} pill className="me-2">{getFormattedCurrency(totalAmount)}</Badge>
                    <Badge bg={pillClasses} pill className="me-2">{getFormattedCurrencyInCAD(totalAmount/cadRate)}</Badge>
                  </Accordion.Header>
                  <Accordion.Body>
                    {filteredList.map(d => <RecurringTransaction recurringTransaction={d} key={d.id}></RecurringTransaction>)}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })
          }
        </Accordion>

        {showAddRT && <AddRecurringTransaction hideCard={handleAddRT} ></AddRecurringTransaction>}

        <div className='text-center mb-3' style={{width: '22rem'}}>
          <Button style={{width: '20rem'}} variant="outline-dark" size='sm' 
              onClick={() => handleAddRT(showAddRT)}>{showAddRT ? Constants.CANCEL : Constants.ADD_RECURRING_TRANSACTION}
          </Button>
        </div>
      </div>
  );
}

export default RecurringTransactionsDashBoard;