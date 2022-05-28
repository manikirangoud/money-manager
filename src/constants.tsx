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
    CREDIT = 1,
    DEBIT = 2,
    BLOCKED = 3
}

export const enum HistoryOperations{
    CREATE = 1,
    UPDATE = 2,
    DELETE = 3
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

export const enum VaultActions{
    GET_VAULTS = 'GET_VAULTS',
    GET_VAULT = 'GET_VAULT',
    ADD_VAULT = 'ADD_VAULT',
    UPDATE_VAULT = 'UPDATE_VAULT',
    DELETE_VAULT = 'DELETE_VAULT',
    UPDATE_SELECTED_VAULT_ID = 'UPDATE_SELECTED_VAULT_ID',
    UPDATE_SELECTED_VAULT = 'UPDATE_SELECTED_VAULT',
    UPDATE_VAULT_BALANCE = 'UPDATE_VAULT_BALANCE',
    ADD_TRANSACTION = 'ADD_TRANSACTION'
}

export const enum UserActions{
    UPDATE_IS_AUTHENTICATED = 'UPDATE_IS_AUTHENTICATED',
}

export const enum HistoryActions{
    GET_HISTORY = 'GET_HISTORY',
    ADD_HISTORY = 'ADD_HISTORY' 
}