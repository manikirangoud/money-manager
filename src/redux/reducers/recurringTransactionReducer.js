import { RecurringTransactionActions } from "../../constants.tsx";

const initialState = {
    recurringTransactions: []
}

export const recurringTransactionReducer = (state = initialState, action) => {

    switch(action.type){
        case RecurringTransactionActions.GET_RECURRING_TRANSACTION:
            return {
                ...state,
                recurringTransactions: action.data
            }

        case RecurringTransactionActions.ADD_RECURRING_TRANSACTION:
            return state;

        default: 
            return state;
    }

}