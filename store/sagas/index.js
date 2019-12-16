import { 
  all, 
  call
} from 'redux-saga/effects'

import { watchLocationRequests } from './LocationSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
      call(watchLocationRequests)
    ])
}