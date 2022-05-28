import React from 'react'
import { Accordion, ListGroup } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { renderTransaction } from '../helpers/renderHelper';


const getFilteredTransactions = ({ trans }) => {

    if(trans){
        const filtered = {};

        trans.map(t => {
            if(!filtered[t.timeStamp]){
                filtered[t.timeStamp] = [];
            }
            filtered[t.timeStamp].push(t);
        })
        return filtered;
    }

}


const renderTrans = (filtered, props) => {

    if(filtered){
        const items = [];
        for(const key in filtered){
            items.push(
                <Accordion.Item key={key}>
                    <Accordion.Header>{key}</Accordion.Header>
                    <AccordionBody>
                        <ListGroup as="ol" numbered>
                            {filtered[key] && filtered[key].map((t, i) => {
                                return (
                                    <ListGroup.Item key={i} as="li" className="d-flex justify-content-start">
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
        <Accordion style={{maxHeight: '25rem', overflowY: 'auto'}} className='mb-3'>
            {items}
        </Accordion>
       )
    }
}


const Transactions: React.FC<Data> = (props) => {

    const filtered = getFilteredTransactions({trans: props.selectedVault.transactions});

    return (
        <div>
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
                {renderTrans(filtered, props)}
        </div>
    );
}

export default Transactions;
