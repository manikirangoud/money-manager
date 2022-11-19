import React, { useEffect } from "react";
import { Constants } from '../constants.tsx';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getDaysLeftInit } from "../redux/actions/daysLeftActions";
import AddDaysLeft from "./AddDaysLeft";
import DaysLeft from "./DaysLeft";


const DaysLeftDashBoard: React.FC = () => {

    const [showAddDaysLeft, setShowAddDaysLeft] = React.useState(false);
    const dispatch = useDispatch();
    const daysLeftData = useSelector(state => state.daysLeftData);
    const daysLeft = daysLeftData && daysLeftData.daysLeft;

    useEffect(() => {
      dispatch(getDaysLeftInit());
    }, []);

    const handleAddDaysLeft = (show) => {
        setShowAddDaysLeft(!show);
    }

    return (
        <div className="mt-3 d-flex flex-column align-items-center" style={{minHeight: '80vh'}}>
          <h3>Days left</h3>
          {daysLeft.map(d => <DaysLeft daysLeft={d} key={d.id}></DaysLeft>)}

          {showAddDaysLeft && <AddDaysLeft hideCard={handleAddDaysLeft} ></AddDaysLeft>}

          <div className='text-center mb-3' style={{width: '22rem'}}>
            <Button style={{width: '20rem'}} variant="outline-dark" size='sm' 
                onClick={() => handleAddDaysLeft(showAddDaysLeft)}>{showAddDaysLeft ? Constants.CANCEL : Constants.ADD_DAYS_LEFT}
            </Button>
          </div>
        </div>
    );
}

export default DaysLeftDashBoard;