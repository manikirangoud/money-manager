import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { db } from '../helpers/firebase';


const Transactions: React.FC<Data> = (props) => {

  const transactionsDoc = doc(db, "vaults", props.id);
  const [transactions, setTransactions] = React.useState([]);

  useEffect(() => {
    const getTransactions = async () => {
        const docSnap = await getDoc(transactionsDoc);
        if (docSnap.exists()) {
            setTransactions(docSnap.data().transactions);
        }
    }

    getTransactions();
  }, [props.id]);


  return (

    <div>
        {transactions && transactions.map(t => {
            return (
                <Card style={{ width: '20rem' }} className="mb-3" key={t.amount}>
                    <Card.Body>
                        <Card.Text>
                            <span className='text-bold'>{t.amount}</span> spent for <span className='text-bold'>{t.spentOn}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        })}
    </div>

  );
}

export default Transactions;
