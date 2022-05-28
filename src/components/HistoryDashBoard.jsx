import React, { useEffect } from "react";
import History from "./History";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryInit } from "../redux/actions/historyActions";

const HistoryDashBoard: React.FC = () => {

    const dispatch = useDispatch();
    const historyData = useSelector(state => state.historyData);
    const history = historyData && historyData.history;

    useEffect(() => {
      dispatch(getHistoryInit());
    }, []);

    return (
        history && 
        <div className="mt-3 d-flex flex-column align-items-center" style={{minHeight: '80vh'}}>
          {history.map(h => <History history={h} key={h.id}></History>)}
        </div>
    );
}

export default HistoryDashBoard;