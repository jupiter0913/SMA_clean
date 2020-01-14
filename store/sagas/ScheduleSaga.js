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

function* setScheduleType({ accountId, scheduleType }) {

  yield put(actions.setScheduleTypeStarted());
  
  try {
    yield call(api.setScheduleType, { accountId, scheduleType } );
    yield put(actions.setScheduleTypeFinished(scheduleType));
  } catch(error) {
    yield put(actions.setScheduleTypeFailed(error));
  }
}

export function* watchScheduleRequests() {
  yield takeLeading(actions.FETCH_SCHEDULE_TYPE_SAGA_ASYNC, fetchScheduleType);
  yield takeLeading(actions.SET_SCHEDULE_TYPE_SATA_ASYNC, setScheduleType);
}

