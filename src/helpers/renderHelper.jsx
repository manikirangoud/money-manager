import { Form } from 'react-bootstrap';
import BankTransaction from '../components/BankTransaction';
import StockTransaction from '../components/StockTransaction';
import { VaultType, BankAccountOptions, StockOptions } from '../constants.tsx';

export function renderVaultOptions(vType, handleChange) {
    switch (vType) {
        case VaultType.BANK_ACCOUNT:

        case VaultType.CREDIT:

        case VaultType.CASH:
            return (
                <Form.Group className="mb-3">
                    <Form.Label>Select the bank/ cash options</Form.Label>
                    <Form.Select onChange={handleChange} name='transactionType'>
                        <option>Select any transaction type</option>
                        <option value={BankAccountOptions.CREDIT}>{BankAccountOptions[BankAccountOptions.CREDIT]}</option>
                        <option value={BankAccountOptions.DEBIT}>{BankAccountOptions[BankAccountOptions.DEBIT]}</option>
                        <option value={BankAccountOptions.BLOCKED}>{BankAccountOptions[BankAccountOptions.BLOCKED]}</option>
                    </Form.Select>
                </Form.Group>
            );

        case VaultType.STOCK:
            return (
                <Form.Group className="mb-3">
                    <Form.Label>Select the stock options</Form.Label>
                    <Form.Select onChange={handleChange} name='transactionType'>
                        <option>Select any transaction type</option>
                        <option value={StockOptions.BUY}>{StockOptions[StockOptions.BUY]}</option>
                        <option value={StockOptions.SELL}>{StockOptions[StockOptions.SELL]}</option>
                    </Form.Select>
                </Form.Group>
            );

        default:
            break;
    }
}

export function renderVaults(handleChange) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>Select the vault type</Form.Label>
            <Form.Select name="type" onChange={handleChange}>
                <option value="-1">Select a vault</option>
                <option value={VaultType.BANK_ACCOUNT}>{VaultType[VaultType.BANK_ACCOUNT].replace("_", " ")}</option>
                <option value={VaultType.CASH}>{VaultType[VaultType.CASH]}</option>
                <option value={VaultType.STOCK}>{VaultType[VaultType.STOCK]}</option>
                <option value={VaultType.CREDIT}>{VaultType[VaultType.CREDIT]}</option>
            </Form.Select>
        </Form.Group>
    );
}


export const renderTransactionUI = (vaultType, transactionType, handleChange) => {
    switch (vaultType) {
        case VaultType.BANK_ACCOUNT:

        case VaultType.CREDIT:

        case VaultType.CASH:
            return <BankTransaction transactionType={transactionType} handleChange={handleChange}></BankTransaction>;

        case VaultType.STOCK:
            return <StockTransaction transactionType={transactionType} handleChange={handleChange}></StockTransaction>;

        default:
            break;
    }
}

export const renderTransaction = (vault, t) => {
    if (vault.type === VaultType.STOCK) {
        return (
            <p className='mb-0'><span className='text-bold'>{t.amount}</span> {t.transactionType === StockOptions.BUY ? 'bought the ' : 'sold the '} <span className='text-bold'>{t.name}</span></p>
        );
    } else {
        return (
            <p className='mb-0'><span className='text-bold'>{t.amount}</span> {t.transactionType === BankAccountOptions.DEBIT ? 'spent for ' : 'credited from '} <span className='text-bold'>{t.transactionType === BankAccountOptions.DEBIT ? t.spentOn : t.source}</span> </p>
        );
    }
}