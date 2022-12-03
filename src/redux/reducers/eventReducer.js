import { EventActions } from "../../constants.tsx";

const initialState = {
    events: []
}

export const eventReducer = (state = initialState, action) => {

    switch(action.type){
        case EventActions.GET_EVENTS:
            return {
                ...state,
                events: action.data
            }

        case EventActions.ADD_EVENT:
            return state;

        default: 
            return state;
    }

}