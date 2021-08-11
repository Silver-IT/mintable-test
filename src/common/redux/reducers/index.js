import { combineReducers } from 'redux';

import ticketsReducer from './tickets-reducer';

const rootReducer = combineReducers({
    ticketsReducer,
});

export default rootReducer;
