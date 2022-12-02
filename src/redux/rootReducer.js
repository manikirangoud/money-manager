import { combineReducers } from 'redux';
import { historyReducer } from './reducers/historyReducer';
import { daysLeftReducer } from './reducers/daysLeftReducer';
import { userReducer } from './reducers/userReducer';
import vaultsReducer from './reducers/vaultReducer';
import { recurringTransactionReducer } from './reducers/recurringTransactionReducer';

const rootReducer = combineReducers({
    vaultData: vaultsReducer,
    userData: userReducer,
    historyData: historyReducer,
    daysLeftData: daysLeftReducer,
    recurringTransactionData: recurringTransactionReducer
});

export default rootReducer;