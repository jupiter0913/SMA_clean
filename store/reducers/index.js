import { combineReducers } from 'redux';
import locationReducer from './LocationReducer';
import scheduleReducer from './ScheduleReducer';

const rootReducer = combineReducers({
    location: locationReducer,
    schedule: scheduleReducer
});

export default rootReducer;