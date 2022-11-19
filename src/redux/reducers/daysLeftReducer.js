import { DaysLeftActions } from "../../constants.tsx";

const initialState = {
    daysLeft: []
}

export const daysLeftReducer = (state = initialState, action) => {

    switch(action.type){
        case DaysLeftActions.GET_DAYS_LEFT:
            return {
                ...state,
                daysLeft: action.data
            }

        case DaysLeftActions.ADD_DAYS_LEFT:
            return state;

        default: 
            return state;
    }

}