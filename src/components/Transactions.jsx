import React from 'react'
import { Accordion, Badge, ListGroup } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { renderTransaction } from '../helpers/renderHelper';
import * as moment from 'moment';
import { Constants, BankAccountOptions, StockOptions } from '../constants.tsx';
import { createRenderer } from 'react-dom/test-utils';

const DATE_FORMAT = 'DD/MM/YYYY';

const getFilteredTransactions = ({ trans }) => {

    if(trans){
        const filtered = {};
        trans.map(t => {
            // if(!filtered[getFormattedTimeStamp(t.createdDate, DATE_FORMAT)]){
            //     filtered[getFormattedTimeStamp(t.createdDate, DATE_FORMAT)] = [];
            // }
            // filtered[getFormattedTimeStamp(t.createdDate, DATE_FORMAT)].push(t);
            if(!filtered[t.transactedDate]){
                filtered[t.transactedDate] = [];
            }
            filtered[t.transactedDate].push(t);
        });
        //console.log("unordered", filtered)
        const ordered = Object.keys(filtered).reverse().reduce(
            (obj, key) => { 
              obj[key] = filtered[key]; 
              return obj;
            }, 
            {}
          );
         // console.log("ordered", ordered)
        return ordered;
    }
}

const getFormattedTimeStamp = (ts, df) => {
    return moment(ts).format(df);
}

const getTransactionCount = (tList) => {
    if(tList){
        const crT = tList.filter(t => t.transactionType === BankAccountOptions.CREDIT);
        const drT = tList.filter(t => t.transactionType === BankAccountOptions.DEBIT);

        const crA = crT && crT.reduce((total, next) => {return total + next.amount}, 0);
        const drA = drT && drT.reduce((total, next) => {return total + next.amount}, 0);
        return (
            <>
                {crT && crT.length > 0 && <Badge bg="success" pill className='me-1'>{crT.length + ' - ' + crA}</Badge>}
                {drT && drT.length > 0 && <Badge bg="danger" pill className='me-3'>{drT.length + ' - ' + drA} </Badge>}
            </>
        )
    }
}


const renderTrans = (filtered, props) => {

    let firstKey = ''; 

    if(filtered){
        const items = [];
        for(const key in filtered){
            if(firstKey.length === 0){
                firstKey = key;
            }

            items.push(
                <Accordion.Item key={key} eventKey={key}>
                    <Accordion.Header><span style={{flex: 1}}>{key}</span> {getTransactionCount(filtered[key])}</Accordion.Header>
                    <AccordionBody>
                        <ListGroup as="ol" numbered>
                            {filtered[key] && filtered[key].map((t, i) => {
                                const classes = t.transactionType === (StockOptions.SELL || BankAccountOptions.CREDIT) ? 'd-flex justify-content-start text-danger' : 'd-flex justify-content-start mb-0 text-success';
                                return (
                                    <ListGroup.Item key={i} as="li" className={classes}>
                                        <div className="ms-2 me-auto">
                                            {/* <div className="fw-bold">Subheading</div> */}
                                            {renderTransaction(props.selectedVault, t)}
                                        </div>
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </AccordionBody>
                </Accordion.Item>
            );
        }
       return (
        <Accordion style={{maxHeight: '25rem', overflowY: 'auto'}} defaultActiveKey={firstKey}>
            {items}
        </Accordion>
       )
    }
}


const Transactions: React.FC<Data> = (props) => {

    const filtered = getFilteredTransactions({trans: props.selectedVault.transactions});

    return (
        <div>
            <hr/>
            <div className='mb-1 fw-bold'>Transactions:</div>

                  {/* <Accordion style={{maxHeight: '25rem', overflowY: 'auto'}}>
                     <Accordion.Item>
                         <Accordion.Header>{Date().toString()}</Accordion.Header>
                         <AccordionBody>
                             <ListGroup as="ol" numbered className='mb-3' >
                                 {props.selectedVault.transactions && props.selectedVault.transactions.map((t, i) => {
                //                     return (
                //                         <ListGroup.Item key={i} as="li" className="d-flex justify-content-start">
                //                             <div className="ms-2 me-auto">
                //                                 {/* <div className="fw-bold">Subheading</div> }
                //                                 {renderTransaction(props.selectedVault, t)}
                //                             </div>
                //                         </ListGroup.Item>
                //                     );
                //                 })}
                //             </ListGroup>
                //         </AccordionBody>
                //     </Accordion.Item>
                // </Accordion> */}
                {filtered ? renderTrans(filtered, props) : <div className='text-warning'>{Constants.NO_TRANSACTION}</div>}
        </div>
    );
}

export default Transactions;
