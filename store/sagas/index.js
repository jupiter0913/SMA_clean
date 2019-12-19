import { 
  all, 
  call
} from 'redux-saga/effects'

import { watchLocationRequests } from './LocationSaga';
import { watchScheduleRequests } from './ScheduleSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    const {location, schedule} = yield all({
      location : call(watchLocationRequests),
      schedule : call(watchScheduleRequests)
    })
}