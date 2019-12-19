import {
    call, 
    put, 
    takeLeading
} from 'redux-saga/effects'

import * as actions from '../actions/LocationActions';
import { api } from '../../services/LocationServices';

// Our worker Saga: will perform the async increment task
function* fetchLocationType({ accountId }) {
  
  yield put(actions.fetchLocationTypeStarted());
  
  try {
    const locationType = yield call(api.getLocationType, accountId );
    yield put(actions.fetchLocationTypeFinished(locationType));

    yield call(fetchAddresses, {accountId})

  } catch(error) {
    yield put(actions.fetchLocationTypeFailed(error));
  }
}

function* fetchAddresses({ accountId }) {

  yield put(actions.fetchAddressesStarted());
  
  try {
    const addresses = yield call(api.getAddresses, { accountId } );
    yield put(actions.fetchAddressesFinished(addresses));
  } catch(error) {
    yield put(actions.fetchAddressesFinished(error));
  }
}

function* setLocationType({ accountId, locationType }) {

  yield put(actions.setLocationTypeStarted());
  
  try {
    yield call(api.setLocationType, { accountId, locationType } );
    yield put(actions.setLocationTypeFinished(locationType));
  } catch(error) {
    yield put(actions.setLocationTypeFailed(error));
  }
}

function* setLocation({ accountId, locationId, location }) {
  yield put(actions.setLocationStarted());
  try {
    yield call(api.setLocation, { accountId, locationId, location } );
    yield put(actions.setLocationFinished(locationId, location));
  } catch(error) {
    yield put(actions.setLocationFailed(error));
  }
}

function* addEmptyLocation({ accountId }) {
  yield put(actions.addEmptyLocationStarted());
  try {
    const addresses = yield call(api.addEmptyAddress, { accountId } );
    yield put(actions.addEmptyLocationFinished(addresses));
  } catch(error) {
    yield put(actions.addEmptyLocationFailed(error));
  }
}

export function* watchLocationRequests() {
  yield takeLeading(actions.FETCH_LOCATION_TYPE_SAGA_ASYNC, fetchLocationType);
  yield takeLeading(actions.FETCH_ADDRESSES_SAGA_ASYNC, fetchAddresses);
  yield takeLeading(actions.SET_LOCATION_TYPE_SATA_ASYNC, setLocationType);
  yield takeLeading(actions.SET_LOCATION_SAGA_ASYNC, setLocation);
  yield takeLeading(actions.ADD_EMPTY_LOCATION_SAGA_ASYNC, addEmptyLocation);
}

