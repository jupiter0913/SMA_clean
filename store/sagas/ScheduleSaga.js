import {
    call, 
    put, 
    takeLeading
} from 'redux-saga/effects'

import * as actions from '../actions/ScheduleActions';
import { api } from '../../services/ScheduleServices';

// Our worker Saga: will perform the async increment task
function* fetchScheduleType({ accountId }) {
  
  yield put(actions.fetchScheduleTypeStarted());
  
  try {
    const scheduleType = yield call(api.getScheduleType, accountId );
    yield put(actions.fetchScheduleTypeFinished(scheduleType));

    yield call(fetchAddresses, {accountId})

  } catch(error) {
    yield put(actions.fetchScheduleTypeFailed(error));
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

function* setScheduleType({ accountId, scheduleType }) {

  yield put(actions.setScheduleTypeStarted());
  
  try {
    yield call(api.setScheduleType, { accountId, scheduleType } );
    yield put(actions.setScheduleTypeFinished(scheduleType));
  } catch(error) {
    yield put(actions.setScheduleTypeFailed(error));
  }
}

function* setSchedule({ accountId, scheduleId, schedule }) {
  yield put(actions.setScheduleStarted());
  try {
    yield call(api.setSchedule, { accountId, scheduleId, schedule } );
    yield put(actions.setScheduleFinished(scheduleId, schedule));
  } catch(error) {
    yield put(actions.setScheduleFailed(error));
  }
}

function* addEmptySchedule({ accountId }) {
  yield put(actions.addEmptyScheduleStarted());
  try {
    const addresses = yield call(api.addEmptyAddress, { accountId } );
    yield put(actions.addEmptyScheduleFinished(addresses));
  } catch(error) {
    yield put(actions.addEmptyScheduleFailed(error));
  }
}

function* removeSchedule({ accountId, scheduleId }) {
  yield put(actions.removeScheduleStarted());
  try {
    const addresses = yield call(api.removeAddress, { accountId, scheduleId } );
    yield put(actions.removeScheduleFinished(addresses));
  } catch(error) {
    yield put(actions.removeScheduleFailed(error));
  }
}


export function* watchScheduleRequests() {
  yield takeLeading(actions.FETCH_SCHEDULE_TYPE_SAGA_ASYNC, fetchScheduleType);
  yield takeLeading(actions.FETCH_ADDRESSES_SAGA_ASYNC, fetchAddresses);
  yield takeLeading(actions.SET_SCHEDULE_TYPE_SATA_ASYNC, setScheduleType);
  yield takeLeading(actions.SET_SCHEDULE_SAGA_ASYNC, setSchedule);
  yield takeLeading(actions.ADD_EMPTY_SCHEDULE_SAGA_ASYNC, addEmptySchedule);
  yield takeLeading(actions.DELETE_SCHEDULE_SAGA_ASYNC, removeSchedule);
}

