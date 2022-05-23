export const enum VaultType{
    BANK_ACCOUNT = 1,
    CASH = 2,
    STOCK = 3,
    CREDIT = 4
}

export const enum BankAccountOptions{
    CREDIT = 1,
    DEBIT = 2,
    BLOCKED = 3
}

export const enum StockOptions{
    BUY = 1,
    SELL = 2
}

export const enum CreditOptions{
    BUY = 1,
    SELL = 2
}

export const enum Constants{
    GO_TO_DETAILS = "Go to Details",
    CANCEL = "Cancel",
    ADD_VAULT = 'Add Vault',
    ADD_TRANSACTION = 'Add Transaction',
    SAVE_CHANGES = 'Save Changes',
    BALANCE = 'Balance',
    COLON = ': ',
    STOCKS = 'Stocks',
}

export const enum CommonFeilds{
    NAME = "name",
    ID = "id",
    TYPE = 'type',
    BALANCE = 'balance',
    DESCRIPTION = 'description',
    LASTTRANSACTION = "lastTransaction",
    AMOUNT = "amount",
    TRANSACTIONTYPE = "transactionType"
}

export const enum BankFeilds{
    NAME = "name",
    ID = "id",
    TYPE = 'type',
    BALANCE = 'balance',
    DESCRIPTION = 'description',
    LASTTRANSACTION = "lastTransaction",
    AMOUNT = "amount",
    SOURCE = "source",
    ONBEHALFOF = "onBehalfOf",
    SPENTON = "spentOn",
    TRANSACTIONTYPE = "transactionType"
}

export const enum StockFeilds{
    NAME = "name",
    ID = "id",
    TYPE = 'type',
    BALANCE = 'balance',
    DESCRIPTION = 'description',
    LASTTRANSACTION = "lastTransaction",
    AMOUNT = "amount",
    QUANTITY = "quantity",
    TRANSACTIONTYPE = "transactionType"
}

export const enum CreditFeilds{
    NAME = "name",
    ID = "id",
    TYPE = 'type',
    BALANCE = 'balance',
    LIMIT = "limit",
    DESCRIPTION = 'description',
    LASTTRANSACTION = "lastTransaction",
    AMOUNT = "amount",
    SOURCE = "source",
    ONBEHALFOF = "onBehalfOf",
    SPENTON = "spentOn",
    TRANSACTIONTYPE = "transactionType"
}