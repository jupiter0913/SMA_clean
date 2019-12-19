import { fromJS } from 'immutable';
import * as actions from '../actions/ScheduleActions';

import { 
    GetScheduleType 
} from '../../constants/ScheduleType'

const initialState = {
    busy: false,
    scheduleType: null,
};

const scheduleReducer = ( prevState = fromJS(initialState), action ) => {
    switch (action.type) {

        /*
         * DO NOT HANDLE ANY *_SAGA_ASYNC HERE
         * All Saga related actions should be handled
         * in the saga files 
         */

        case actions.SET_SCHEDULE_TYPE_STARTED:
        case actions.FETCH_SCHEDULE_TYPE_STARTED: {
            return prevState
                .set('busy', true)
                .set('scheduleType', null)
                .set('failReason', null);
        }

        case actions.SET_SCHEDULE_TYPE_FINISHED: 
        case actions.FETCH_SCHEDULE_TYPE_FINISHED: {
            try {
                let type = GetScheduleType(action.scheduleType)
                return prevState
                    .set('busy', false)
                    .set('scheduleType', type)
                    .set('failReason', null);

            } catch (e) {
                return prevState
                    .set('busy', false)
                    .set('failReason', e);
            }
        }

        default: {
            return prevState;
        }
    }
}

export default scheduleReducer;