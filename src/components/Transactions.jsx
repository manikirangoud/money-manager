import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { VaultType, BankAccountOptions, StockOptions } from '../constants.tsx';
import { db } from '../helpers/firebase';
import { renderTransaction } from '../helpers/renderHelper';


const Transactions: React.FC<Data> = (props) => {

    // console.log(props);

    // const transactionsDoc = doc(db, "vaults", props.selectedVault.id);
    // const [transactions, setTransactions] = React.useState([]);

    // useEffect(() => {
    //     const getTransactions = async () => {
    //         const docSnap = await getDoc(transactionsDoc);
    //         if (docSnap.exists()) {
    //             setTransactions(docSnap.data().transactions);
    //         }
    //     }
    //     getTransactions();
    // }, [props.selectedVault.id]);


    // const getTransaction = (t) => {
    //     if (props.selectedVault.type === VaultType.STOCK) {
    //         return (
    //             <p><span className='text-bold'>{t.amount}</span> {t.transactionType === StockOptions.BUY ? 'bought the ' : 'sold the '} <span className='text-bold'>{t.name}</span></p>
    //         );
    //     } else {
    //         return (
    //             <p><span className='text-bold'>{t.amount}</span> {t.transactionType === BankAccountOptions.DEBIT ? 'spent for ' : 'credited from '} <span className='text-bold'>{t.transactionType === BankAccountOptions.DEBIT ? t.spentOn : t.source}</span> </p>
    //         );
    //     }
    // }


    return (
        // <div>
        //     {transactions && transactions.map(t => {
        //         return (
        //             <Card style={{ width: '20rem' }} className="mb-3" key={t.amount}>
        //                 <Card.Body>
        //                     <Card.Text>
        //                         <div>{getTransaction(t)}</div>
        //                     </Card.Text>
        //                 </Card.Body>
        //             </Card>
        //         );
        //     })}
        // </div>
        <div>
            Transactions:
            <ListGroup as="ol" numbered>
                {props.selectedVault.transactions && props.selectedVault.transactions.map(t => {
                    return (
                        <ListGroup.Item as="li" className="d-flex justify-content-start">
                            <div className="ms-2 me-auto">
                                {/* <div className="fw-bold">Subheading</div> */}
                                {renderTransaction(props.selectedVault, t)}
                            </div>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>

    );
}

export default Transactions;
