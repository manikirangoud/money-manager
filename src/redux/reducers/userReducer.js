import { UserActions } from "../../constants.tsx";

const initialState = {
    isAuthenticated: true,
    cadRate: 60.00
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case UserActions.UPDATE_IS_AUTHENTICATED:
            return{
                ...state,
                isAuthenticated: action.data
            }

        case UserActions.UPDATE_CAD_RATE:
            return{
                ...state,
                cadRate: action.data
            }

        default:
            return state;
    }
} 