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
        this.schedules = {
            '001': { 
                address: "Via della Maddalena, 12, 00186 Roma RM, Italy",
                lat: 41.900284,
                lon: 12.476497
            },
            '002': { 
                address: "Corso Buenos Aires, 60, 20124 Milano MI, Italy",
                lat: 45.482040,
                lon: 9.212984
            },
            '003': { 
                address: "Piazza degli Zingari, 5, 00184 Roma RM, Italy",
                lat: 41.900284,
                lon: 12.476497
            },
            /*
            '004': { 
                address: "Via delle Terme di Tito, 72, 00184 Roma RM, Italy",
                lat: 45.482040,
                lon: 9.212984
            },
            '005': { 
                address: "Piazza Beniamino Gigli, 00184 Roma RM, Italy",
                lat: 41.900284,
                lon: 12.476497
            },
            '006': { 
                address: "Via Giovanni Giolitti, 65, 00185 Roma RM, Italy",
                lat: 45.482040,
                lon: 9.212984
            },
            '007': { 
                address: "Via Giovanni Giolitti, 65, 00185 Roma RM, Italy",
                lat: 41.900284,
                lon: 12.476497
            },
            '008': { 
                address: "Via Venti Settembre, 60, 00184 Roma RM, Italy",
                lat: 45.482040,
                lon: 9.212984
            },
            '009': { 
                address: "Via Giovanni Giolitti, 65, 00185 Roma RM, Italy",
                lat: 41.900284,
                lon: 12.476497
            },
            '010': { 
                address: "10",
                lat: 45.482040,
                lon: 9.212984
            },
            '011': { 
                address: "11",
                lat: 45.482040,
                lon: 9.212984
            },
            */
        }
        this.addressCounter = 1;
        this.fakeDelayMs = 250;
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

    getAddresses = ({ accountId }) => {

        return delay(this.fakeDelayMs).then( () => {
            return this.schedules;
        });
    }

    setSchedule = ({ accountId, scheduleId, schedule }) => {
        return delay(this.fakeDelayMs).then( () => {
            if (!scheduleId in this.schedules) {
                throw "scheduleId not found in schedule";
            }

            this.schedules[scheduleId] = schedule
            return this.schedules;
        });

        /*
        return new Promise((resolve, reject) => {

            if (!scheduleId in this.schedules) {
                reject("scheduleId not found in schedule")
            }

            this.schedules[scheduleId] = schedule
            resolve(this.schedules);
        });
        */
    }

    setAddresses = (accountId, addresses) => {
        return new Promise((resolve, reject) => {
            this.schedules = addresses;
            resolve(this.schedules);
        });
    }

    addAddress = (accountId, address) => {
        return new Promise((resolve, reject) => {
            let newId = this.addressCounter.toString().padStart(2, '0')
            this.schedules[newId] = address;
            this.addressCounter += 1;
            resolve(this.schedules);
        });
    }

    addEmptyAddress = (accountId) => {
        return new Promise((resolve, reject) => {
            let newId = this.addressCounter.toString().padStart(2, '0')
            this.schedules[newId] = "";
            this.addressCounter += 1;
            resolve(this.schedules);
        });
    }


    removeAddress = ({ accountId, scheduleId }) => {
        return delay(this.fakeDelayMs).then( () => {
            if (!scheduleId in this.schedules) {
                throw "scheduleId not found in schedule";
            }
            delete this.schedules[scheduleId];
            return this.schedules;
        });
    }

}

const api = new MockScheduleApi();

export default api;