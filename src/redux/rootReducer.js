import { combineReducers } from 'redux';
import { historyReducer } from './reducers/historyReducer';
import { userReducer } from './reducers/userReducer';
import vaultsReducer from './reducers/vaultReducer';

const rootReducer = combineReducers({
    vaultData: vaultsReducer,
    userData: userReducer,
    historyData: historyReducer
});

export default rootReducer;