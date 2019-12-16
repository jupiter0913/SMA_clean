import { combineReducers } from 'redux';
import locationReducer from './LocationReducer';

const rootReducer = combineReducers({
    location: locationReducer
});

export default rootReducer;