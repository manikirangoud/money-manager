import { VaultActions, VaultType } from '../../constants.tsx';
import { VaultsRef, db } from '../../helpers/firebase';
import { getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { getBankBalance } from '../../helpers/helpers';

// Fetching vaults from firestore
const getVaults = (vaults) => ({
    type: VaultActions.GET_VAULTS,
    data: vaults
});

export const getVaultsInit = () => {
    console.log('called');
    return async function(dispatch){
        const vaultsData = await getDocs(VaultsRef);
        const vaults = [];
        vaultsData.docs.map(doc => ( 
            vaults.push({...doc.data(), id: doc.id })
        ));
        console.log(vaults);
        dispatch(getVaults(vaults));
    }
}

// Updating the selected vault id
const updateSelectedVaultId = (vaultId) => ({
    type: VaultActions.UPDATE_SELECTED_VAULT_ID,
    data: vaultId
});

export const updateSelectedVaultIdInit = (vaultId) => {
    return function(dispatch){
        dispatch(updateSelectedVaultId(vaultId));
    }
}

// Updating the selected vault
const updateSelectedVault = (vault) => ({
    type: VaultActions.UPDATE_SELECTED_VAULT,
    data: vault
});

export const updateSelectedVaultInit = (vault) => {
    return function(dispatch){
        dispatch(updateSelectedVault(vault));
    }
}

// Adding vault to firestore
const addVault = () => ({
    type: VaultActions.ADD_VAULT,
});

export const addVaultInit = (vault) => {
    return function(dispatch){
        addDoc(VaultsRef, vault);
        dispatch(addVault());
        dispatch(getVaultsInit());
    }
}

// Adding transaction to the specified vault
const addTransToVault = () => ({
    type: VaultActions.ADD_TRANSACTION,
});

export const addTransToVaultInit = (id, transactions, vaultType) => {
    return function(dispatch){
        const vaultRef = doc(db, "vaults", id);
        
        if(vaultType === VaultType.BANK_ACCOUNT || vaultType === VaultType.CASH){
            const bal = getBankBalance({trans: transactions});
            updateDoc(vaultRef, { transactions: transactions, balance: bal });
        } else{
            updateDoc(vaultRef, { transactions: transactions });
        }
        dispatch(addTransToVault());
        dispatch(getVaultsInit());
    }
}

// Updating vault balance on addition of transaction to vault 
// const updateVaultBalance = () => ({
//     type: VaultActions.ADD_TRANSACTION,
// });

// export const updateVaultBalanceInit = (transactions) => {
//     return function(dispatch){
//         const vaultRef = doc(db, "vaults", id);
//         updateDoc(vaultRef, { transactions: transactions });
//         dispatch(updateVaultBalance());
//     }
// }