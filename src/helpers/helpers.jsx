import { VaultType } from '../constants.tsx';

export const getVaultName = ({ vaultId }) => {

    switch (vaultId) {
        case VaultType.BANK_ACCOUNT: return 'Bank';
        case VaultType.CASH: return 'Cash';
        case VaultType.STOCK: return 'Stock';
        case VaultType.CREDIT: return 'Credit';
        default: return '';
    }
}