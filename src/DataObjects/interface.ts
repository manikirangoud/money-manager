export interface Vault {
    name: string;
    type: string;
    balance: number;
    description: string;
    lastTransaction: string;
}

export interface BankVault extends Vault {
    credits: Array<Credit>;
    debits: Array<Debit>;
}

interface Credit {
    amount: number,
    source: string,
    description: string,
}

interface Debit {
    amount: number,
    spentFor: string,
    description: string,
    onBehalfOf: string,
}


export interface CreditVault extends Vault {
    credits: Array<Credit>;
    debits: Array<Debit>;
}

interface Credit {
    amount: number,
    source: string,
    description: string,
}

interface Debit {
    amount: number,
    spentFor: string,
    description: string,
    onBehalfOf: string,
}

export interface StockVault extends Vault {
    buys: Array<Buy>;
    sells: Array<Sell>;
}

interface Buy {
    amount: number,
    quantity: number;
    name: string;
    description: string;
}

interface Sell {
    amount: number,
    quantity: number;
    name: string;
    description: string;
}