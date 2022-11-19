import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const RecurringTransactionsDashBoard: React.FC = () => {

    // const dispatch = useDispatch();
    // const historyData = useSelector(state => state.historyData);
    // const history = historyData && historyData.history;

    // useEffect(() => {
    //   dispatch(getHistoryInit());
    // }, []);

    return (
        <div className="mt-3 d-flex flex-column align-items-center" style={{minHeight: '80vh'}}>
          <h3>Recurring Transactions</h3>
        </div>
    );
}

export default RecurringTransactionsDashBoard;