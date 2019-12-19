/**
 * API calls wrapping firebase database save and  calls. 
 * all firebase calls should be wrapped in seperate api calls.
 */

import { 
    ScheduleType,
    GetScheduleType
} from '../../constants'

import {
    delay
} from '../../utils'

/**
 * Mock Server, the data stored here is pretend database data
 * real api should fetch from backend api
 */
class MockScheduleApi {

    constructor() {
        this.scheduleType = ScheduleType.MONTH;
    }

    getScheduleType = ({ accountId }) => {
        return delay(this.fakeDelayMs).then( () => {
            return this.scheduleType;
        });
    };

    setScheduleType = ({ accountId, scheduleType }) => {
        return delay(this.fakeDelayMs).then( () => {
            this.scheduleType = GetScheduleType(scheduleType);
            return this.scheduleType;
        });

        /*
        return new Promise((resolve, reject) => {
            try {
                this.scheduleType = GetScheduleType(scheduleType);
                resolve(this.scheduleType);
            }
            catch (e) {
                reject(e)
            }
        });
        */
    };
 
}

const api = new MockScheduleApi();

export default api;