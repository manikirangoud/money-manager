import { Form } from 'react-bootstrap';
import { VaultType, BankAccountOptions, StockOptions } from '../constants.tsx';

export function renderVaultOptions(vType){
    switch (vType) {
        case VaultType.BANK_ACCOUNT: 

        case VaultType.CASH:
            return (
                <Form.Group className="mb-3">
                    <Form.Label>Select the bank/ cash options</Form.Label>
                    <Form.Select>
                        <option value={BankAccountOptions.CREDIT}>{BankAccountOptions[BankAccountOptions.CREDIT]}</option>
                        <option value={BankAccountOptions.DEBIT}>{BankAccountOptions[BankAccountOptions.DEBIT]}</option>
                    </Form.Select>
                </Form.Group>
            );
        
        case VaultType.STOCK:
            return (
                <Form.Group className="mb-3">
                    <Form.Label>Select the stock options</Form.Label>
                    <Form.Select>
                        <option value={StockOptions.BUY}>{StockOptions[StockOptions.BUY]}</option>
                        <option value={StockOptions.SELL}>{StockOptions[StockOptions.SELL]}</option>
                    </Form.Select>
                </Form.Group>
            );

        default:
            break;
    }
}

