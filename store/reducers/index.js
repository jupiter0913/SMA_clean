import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import scheduleReducer from './scheduleReducer';

const rootReducer = combineReducers({
    location: locationReducer,
    schedule: scheduleReducer
});

export default rootReducer;