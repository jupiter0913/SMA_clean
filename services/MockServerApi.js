/**
 * API calls wrapping firebase database save and  calls. 
 * all firebase calls should be wrapped in seperate api calls.
 */

import { 
    LocationType,
    GetLocationType
} from '../constants'

import {
    delay
} from '../utils'

/**
 * Mock Server, the data stored here is pretend database data
 * real api should fetch from backend api
 */
class MockLocationApi {

    constructor() {
        this.locationType = LocationType.MOBILE;
        this.locations = {
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

    getLocationType = ({ accountId }) => {
        return delay(this.fakeDelayMs).then( () => {
            return this.locationType;
        });
    };

    setLocationType = ({ accountId, locationType }) => {
        return delay(this.fakeDelayMs).then( () => {
            this.locationType = GetLocationType(locationType);
            return this.locationType;
        });

        /*
        return new Promise((resolve, reject) => {
            try {
                this.locationType = GetLocationType(locationType);
                resolve(this.locationType);
            }
            catch (e) {
                reject(e)
            }
        });
        */
    };

    getAddresses = ({ accountId }) => {

        return delay(this.fakeDelayMs).then( () => {
            return this.locations;
        });
    }

    setLocation = ({ accountId, locationId, location }) => {
        return delay(this.fakeDelayMs).then( () => {
            if (!locationId in this.locations) {
                throw "locationId not found in location";
            }

            this.locations[locationId] = location
            return this.locations;
        });

        /*
        return new Promise((resolve, reject) => {

            if (!locationId in this.locations) {
                reject("locationId not found in location")
            }

            this.locations[locationId] = location
            resolve(this.locations);
        });
        */
    }

    setAddresses = (accountId, addresses) => {
        return new Promise((resolve, reject) => {
            this.locations = addresses;
            resolve(this.locations);
        });
    }

    addAddress = (accountId, address) => {
        return new Promise((resolve, reject) => {
            let newId = this.addressCounter.toString().padStart(2, '0')
            this.locations[newId] = address;
            this.addressCounter += 1;
            resolve(this.locations);
        });
    }

    addEmptyAddress = (accountId) => {
        return new Promise((resolve, reject) => {
            let newId = this.addressCounter.toString().padStart(2, '0')
            this.locations[newId] = "";
            this.addressCounter += 1;
            resolve(this.locations);
        });
    }


    removeAddress = ({ accountId, locationId }) => {
        return delay(this.fakeDelayMs).then( () => {
            if (!locationId in this.locations) {
                throw "locationId not found in location";
            }
            delete this.locations[locationId];
            return this.locations;
        });
    }

}

const api = new MockLocationApi();

export default api;