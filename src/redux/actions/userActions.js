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