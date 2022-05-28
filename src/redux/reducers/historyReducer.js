import { HistoryActions } from "../../constants.tsx";

const initialState = {
    history: []
}

export const historyReducer = (state = initialState, action) => {

    switch(action.type){
        case HistoryActions.GET_HISTORY:
            return {
                ...state,
                history: action.data
            }

        case HistoryActions.ADD_HISTORY:
            return state;

        default: 
            return state;
    }

}