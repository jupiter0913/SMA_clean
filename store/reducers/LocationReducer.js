import { fromJS } from 'immutable';
import * as actions from '../actions/LocationActions';

import { 
    // LocationType, 
    GetLocationType 
} from '../../constants/LocationType'

const initialState = {
    busy: false,
    locationType: null,
    addresses: null,
    failReason: null
};

const locationReducer = ( prevState = fromJS(initialState), action ) => {
    switch (action.type) {

        /*
         * DO NOT HANDLE ANY *_SAGA_ASYNC HERE
         * All Saga related actions should be handled
         * in the saga files 
         */

        case actions.SET_LOCATION_TYPE_STARTED:
        case actions.FETCH_LOCATION_TYPE_STARTED: {
            return prevState
                .set('busy', true)
                .set('locationType', null)
                .set('failReason', null);
        }

        case actions.SET_LOCATION_TYPE_FINISHED: 
        case actions.FETCH_LOCATION_TYPE_FINISHED: {
            try {
                let type = GetLocationType(action.locationType)
                return prevState
                    .set('busy', false)
                    .set('locationType', type)
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

        case actions.DELETE_LOCATION_FINISHED:
        case actions.ADD_EMPTY_LOCATION_FINISHED:
        case actions.FETCH_ADDRESSES_FINISHED: {
            return prevState
                .set('busy', false)
                .set('addresses', action.addresses)
                .set('failReason', null);
        }

        case actions.DELETE_LOCATION_STARTED:
        case actions.ADD_EMPTY_LOCATION_STARTED:
        case actions.SET_LOCATION_STARTED: {
            return prevState
                .set('busy', true)
                .set('failReason', null);
        }

        case actions.SET_LOCATION_FINISHED: {
            return prevState
                .set('busy', false)
                .setIn(['addresses', action.locationId], action.location)
                .set('failReason', null);
        }

        case actions.SET_LOCATION_TYPE_FAILED:
        case actions.FETCH_LOCATION_TYPE_FAILED:
        case actions.ADD_EMPTY_LOCATION_FAILED:
        case actions.FETCH_ADDRESSES_FAILED: 
        case actions.DELETE_LOCATION_FAILED:
        case actions.SET_LOCATION_FAILED: {
            return prevState
                .set('busy', false)
                .set('failReason', action.failReason);
        }

        default: {
            return prevState;
        }
    }
}

export default locationReducer;