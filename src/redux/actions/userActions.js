import { UserActions } from "../../constants.tsx";

const updateIsAuthenticated = ({ authenticated= Boolean }) => ({
    type: UserActions.UPDATE_IS_AUTHENTICATED,
    data: authenticated
});

export const updateIsAuthenticatedInit = ({ authenticated= Boolean }) => {
    return function(dispatch){
        dispatch(updateIsAuthenticated(authenticated));
    }
}

//Updating the CAD Rate
const updateCadRate = (cadRate) => ({
    type: UserActions.UPDATE_CAD_RATE,
    data: cadRate
});

export const updateCadRateInit = (cadRate) => {
    return function(dispatch){
        dispatch(updateCadRate(cadRate));
    }
}