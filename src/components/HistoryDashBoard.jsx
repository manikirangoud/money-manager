import React, { useEffect } from "react";
import { db, HistoryRef } from '../helpers/firebase';
import { collection, getDocs } from 'firebase/firestore';
import History from "./History";

const HistoryDashBoard: React.FC = () => {

    const [history, setHistory] = React.useState([]);

    useEffect(() => {
        const getHistory = async () => {
          const his = await getDocs(HistoryRef);
          setHistory(his.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        getHistory();
        
      }, []);

    return (
        history && 
        <div className="mt-3 d-flex flex-column align-items-center">
          {history.map(h => <History history={h}></History>)}
        </div>
    );
}

export default HistoryDashBoard;