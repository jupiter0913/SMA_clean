import { fromJS } from 'immutable';
import * as actions from '../actions/ScheduleActions';

import { 
    // ScheduleType, 
    GetScheduleType 
} from '../../constants/ScheduleType'

const initialState = {
    busy: false,
    scheduleType: null,
    addresses: null,
    failReason: null
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

        case actions.FETCH_ADDRESSES_STARTED: {
            return prevState
                .set('busy', true)
                .set('addresses', null)
                .set('failReason', null);
        }

        case actions.DELETE_SCHEDULE_FINISHED:
        case actions.ADD_EMPTY_SCHEDULE_FINISHED:
        case actions.FETCH_ADDRESSES_FINISHED: {
            return prevState
                .set('busy', false)
                .set('addresses', action.addresses)
                .set('failReason', null);
        }

        case actions.DELETE_SCHEDULE_STARTED:
        case actions.ADD_EMPTY_SCHEDULE_STARTED:
        case actions.SET_SCHEDULE_STARTED: {
            return prevState
                .set('busy', true)
                .set('failReason', null);
        }

        case actions.SET_SCHEDULE_FINISHED: {
            return prevState
                .set('busy', false)
                .setIn(['addresses', action.scheduleId], action.schedule)
                .set('failReason', null);
        }

        case actions.SET_SCHEDULE_TYPE_FAILED:
        case actions.FETCH_SCHEDULE_TYPE_FAILED:
        case actions.ADD_EMPTY_SCHEDULE_FAILED:
        case actions.FETCH_ADDRESSES_FAILED: 
        case actions.DELETE_SCHEDULE_FAILED:
        case actions.SET_SCHEDULE_FAILED: {
            return prevState
                .set('busy', false)
                .set('failReason', action.failReason);
        }

        default: {
            return prevState;
        }
    }
}

export default scheduleReducer;