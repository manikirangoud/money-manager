import { VaultActions } from '../../constants.tsx';

const initialState = {
    vaults: [],
    selectedVault: {},
    selectedVaultId: ''
}

const vaultReducer = (state = initialState, action) => {
    switch (action.type){
        case VaultActions.GET_VAULTS:
            return {
                ...state,
                vaults: action.data
            }

        case VaultActions.UPDATE_SELECTED_VAULT_ID:
            return {
                ...state,
                selectedVaultId: action.data
            }

        case VaultActions.UPDATE_SELECTED_VAULT:
            return {
                ...state,
                selectedVault: action.data
            }

        default: 
            return state;
            
    }
}

export default vaultReducer;