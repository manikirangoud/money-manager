import { HistoryActions } from "../../constants.tsx";
import { addDoc, getDocs } from 'firebase/firestore';
import { HistoryRef } from "../../helpers/firebase";

// To fetch history
const getHistory = (history) => ({
    type: HistoryActions.GET_HISTORY,
    data: history
})

export const getHistoryInit = () => {
    return async function(dispatch){
        const hisData = await getDocs(HistoryRef);
        const history = []
        hisData.docs.map(doc => {
            history.push({...doc.data(), id: doc.id});
        })
        dispatch(getHistory(history));
    }
}

// To add history to firestore
const addHistory = () => ({
    type: HistoryActions.ADD_HISTORY,
})

export const addHistoryInit = (history) => {
    return function(dispatch){
        addDoc(HistoryRef, history);
        dispatch(addHistory());
    }
}