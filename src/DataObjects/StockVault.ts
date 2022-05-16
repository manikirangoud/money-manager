import Vault from './Vault';

export interface StockVault extends Vault{
    buys: Array<Buy>;
    sells: Array<Sell>;
}

interface Buy{
    amount: number,
    quantity: number;
    name: string;
    description: string;
}

interface Sell{
    amount: number,
    quantity: number;
    name: string;
    description: string;
}