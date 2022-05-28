import { UserActions } from "../../constants.tsx";

const initialState = {
    isAuthenticated: true,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case UserActions.UPDATE_IS_AUTHENTICATED:
            return{
                ...state,
                isAuthenticated: action.data
            }

        default:
            return state;
    }
} 