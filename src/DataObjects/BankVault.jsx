interface BankVault extends Vault{
    credits: Array<Credit>;
    debits: Array<Debit>;
}

interface Credit{
    amount: number,
    source: string,
    description: string,
}

interface Debit{
    amount: number,
    spentFor: string,
    description: string,
    onBehalfOf: string,
}