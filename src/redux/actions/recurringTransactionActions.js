import { RecurringTransactionActions } from "../../constants.tsx";
import { addDoc, getDocs } from 'firebase/firestore';
import { RecurringTransactionsRef } from "../../helpers/firebase";

// To fetch Recurring Transactions data
const getRecurringTransactions = (recurringTransactions) => ({
    type: RecurringTransactionActions.GET_RECURRING_TRANSACTION,
    data: recurringTransactions
})

export const getRecurringTransactionsInit = () => {
    return async function(dispatch){
        const rtData = await getDocs(RecurringTransactionsRef);
        const rtList = []
        rtData.docs.map(doc => {
            rtList.push({...doc.data(), id: doc.id});
        })
        dispatch(getRecurringTransactions(rtList));
    }
}

// To add history to firestore
const addRecurringTransaction = () => ({
    type: RecurringTransactionActions.ADD_RECURRING_TRANSACTION,
})

export const addRecurringTransactionInit = (recurringTransaction) => {
    return function(dispatch){
        addDoc(RecurringTransactionsRef, recurringTransaction);
        dispatch(addRecurringTransaction());
    }
}