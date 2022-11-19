import { DaysLeftActions } from "../../constants.tsx";
import { addDoc, getDocs } from 'firebase/firestore';
import { DaysLeftRef } from "../../helpers/firebase";

// To fetch days left data
const getDaysLeft = (daysLeft) => ({
    type: DaysLeftActions.GET_DAYS_LEFT,
    data: daysLeft
})

export const getDaysLeftInit = () => {
    return async function(dispatch){
        const daysLeftData = await getDocs(DaysLeftRef);
        const daysLeft = []
        daysLeftData.docs.map(doc => {
            daysLeft.push({...doc.data(), id: doc.id});
        })
        dispatch(getDaysLeft(daysLeft));
    }
}

// To add history to firestore
const addDaysLeft = () => ({
    type: DaysLeftActions.ADD_DAYS_LEFT,
})

export const addDaysLeftInit = (daysLeft) => {
    return function(dispatch){
        addDoc(DaysLeftRef, daysLeft);
        dispatch(addDaysLeft());
    }
}