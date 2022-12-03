import { combineReducers } from 'redux';
import { historyReducer } from './reducers/historyReducer';
import { eventReducer } from './reducers/eventReducer';
import { userReducer } from './reducers/userReducer';
import vaultsReducer from './reducers/vaultReducer';
import { recurringTransactionReducer } from './reducers/recurringTransactionReducer';

const rootReducer = combineReducers({
    vaultData: vaultsReducer,
    userData: userReducer,
    historyData: historyReducer,
    eventsData: eventReducer,
    recurringTransactionData: recurringTransactionReducer
});

export default rootReducer;