import { VaultType, BankAccountOptions, CreditOptions } from '../constants.tsx';

export const getVaultName = ({ vaultId }) => {
    switch (vaultId) {
        case VaultType.BANK_ACCOUNT: return 'Bank';
        case VaultType.CASH: return 'Cash';
        case VaultType.STOCK: return 'Stock';
        case VaultType.CREDIT: return 'Credit';
        default: return '';
    }
}

export const getBankBalance = ({ trans }) =>{
    let cr = 0;
    let db = 0;
    if(trans){
        trans.map(t => {
            if(t.transactionType === BankAccountOptions.CREDIT){
                cr += t.amount;
            }else if(t.transactionType === BankAccountOptions.DEBIT){
                db += t.amount;
            }
        })
    }
    return cr - db;
}

export const getCreditBalance = ({ trans }) =>{
    let cr = 0;
    let db = 0;
    if(trans){
        trans.map(t => {
            if(t.transactionType === CreditOptions.CREDIT){
                cr += t.amount;
            }else if(t.transactionType === CreditOptions.DEBIT){
                db += t.amount;
            }
        })
    }
    return db - cr;
}

export const getFormattedCurrency = (n) => {
    return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR' }).format(n);
}