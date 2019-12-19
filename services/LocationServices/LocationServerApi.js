/**
 * API calls wrapping firebase database save and  calls. 
 * all firebase calls should be wrapped in seperate api calls.
 */

import * as firebase from 'firebase';

import { 
    LocationType,
    GetLocationType
} from '../constants'


class LocationApi {

    getLocationType = accountId => {
        return new Promise((resolve, reject) => {
            // TODO: firebase call to fetch
            resolve(locationType);
        });
    };

    setLocationType = (accountId, typeStr) => {
        return new Promise((resolve, reject) => {
            // TODO: firebase call to store
            this.locationType = GetLocationType(typeStr);
            resolve(true);
        });
    };

}

const usersApi = new LocationApi();

export default usersApi;