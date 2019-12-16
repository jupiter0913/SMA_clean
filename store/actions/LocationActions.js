

export const FETCH_LOCATION_TYPE_SAGA_ASYNC = 'FETCH_ADDRESS_TYPE_SAGA_ASYNC';
export const FETCH_LOCATION_TYPE_STARTED = 'FETCH_LOCATION_TYPE_STARTED';
export const FETCH_LOCATION_TYPE_FINISHED = 'FETCH_LOCATION_TYPE_FINISHED';
export const FETCH_LOCATION_TYPE_FAILED = 'FETCH_LOCATION_TYPE_FAILED';

export const FETCH_ADDRESSES_SAGA_ASYNC = 'FETCH_ADDRESSES_SAGA_ASYNC';
export const FETCH_ADDRESSES_STARTED = 'FETCH_ADDRESSES_STARTED';
export const FETCH_ADDRESSES_FINISHED = 'FETCH_ADDRESSES_FINISHED';
export const FETCH_ADDRESSES_FAILED = 'FETCH_ADDRESSES_FAILED';

export const SET_LOCATION_TYPE_SATA_ASYNC = 'SET_LOCATION_TYPE_SATA_ASYNC';
export const SET_LOCATION_TYPE_STARTED = 'SET_LOCATION_TYPE_STARTED';
export const SET_LOCATION_TYPE_FINISHED = 'SET_LOCATION_TYPE_FINISHED';
export const SET_LOCATION_TYPE_FAILED = 'SET_LOCATION_TYPE_FAILED';

export const SET_LOCATION_SAGA_ASYNC = 'SET_LOCATION_SAGA_ASYNC';
export const SET_LOCATION_STARTED = 'SET_LOCATION_STARTED';
export const SET_LOCATION_FINISHED = 'SET_LOCATION_FINISHED';
export const SET_LOCATION_FAILED = 'SET_LOCATION_FAILED';

/*
export const ADD_LOCATION_SAGA_ASYNC = 'ADD_LOCATION_SAGA_ASYNC'; 
export const ADD_LOCATION_STARTED = 'ADD_LOCATION_STARTED';
export const ADD_LOCATION_FINISHED = 'ADD_LOCATION_FINISHED';
export const ADD_LOCATION_FAILED = 'ADD_LOCATION_FAILED';
*/

export const ADD_EMPTY_LOCATION_SAGA_ASYNC = 'ADD_EMPTY_LOCATION_SAGA_ASYNC'; 
export const ADD_EMPTY_LOCATION_STARTED = 'ADD_EMPTY_LOCATION_STARTED';
export const ADD_EMPTY_LOCATION_FINISHED = 'ADD_EMPTY_LOCATION_FINISHED';
export const ADD_EMPTY_LOCATION_FAILED = 'ADD_EMPTY_LOCATION_FAILED';

export const DELETE_LOCATION_SAGA_ASYNC = 'DELETE_LOCATION_SAGA_ASYNC'; 
export const DELETE_LOCATION_STARTED = 'DELETE_LOCATION_STARTED';
export const DELETE_LOCATION_FINISHED = 'DELETE_LOCATION_FINISHED';
export const DELETE_LOCATION_FAILED = 'DELETE_LOCATION_FAILED';


/*
 * fetching address type 
 */

export const fetchLocationTypeAsync = (accountId) => {
    return { 
        type: FETCH_LOCATION_TYPE_SAGA_ASYNC,  
        accountId
    };
};

export const fetchLocationTypeStarted = () => {
    return { 
        type: FETCH_LOCATION_TYPE_STARTED
    };
};

export const fetchLocationTypeFinished = locationType => {
    return { 
        type: FETCH_LOCATION_TYPE_FINISHED, 
        locationType
    };
};

export const fetchLocationTypeFailed = failReason => {
    return { 
        type: FETCH_LOCATION_TYPE_FAILED,  
        failReason
    };
};

/** 
 * Setting location type 
 */

export const setLocationTypeAsync = (accountId, locationType) => {
    return { 
        type: SET_LOCATION_TYPE_SATA_ASYNC,  
        accountId,
        locationType
    };
};

export const setLocationTypeStarted = () => {
    return { 
        type: SET_LOCATION_TYPE_STARTED
    };
};

export const setLocationTypeFinished = locationType => {
    return { 
        type: SET_LOCATION_TYPE_FINISHED,
        locationType
    };
};

export const setLocationTypeFailed = failReason => {
    return { 
        type: SET_LOCATION_TYPE_FAILED,  
        failReason
    };
};


/*
 * fetching addresses 
 */

export const fetchAddressesAsync = (accountId) => {
    return { 
        type: FETCH_ADDRESSES_SAGA_ASYNC,  
        accountId
    };
};

export const fetchAddressesStarted = () => {
    return { 
        type: FETCH_ADDRESSES_STARTED
    };
};

export const fetchAddressesFinished = addresses => {
    return { 
        type: FETCH_ADDRESSES_FINISHED, 
        addresses
    };
};

export const fetchAddressesFailed = failReason => {
    return { 
        type: FETCH_ADDRESSES_FAILED,  
        failReason
    };
};


/** 
 * address setting 
 */

export const setLocationAsync = (accountId, locationId, location) => {
    return { 
        type: SET_LOCATION_SAGA_ASYNC,  
        accountId,
        locationId,
        location
    };
};

export const setLocationStarted = () => {
    return { 
        type: SET_LOCATION_STARTED
    };
};

export const setLocationFinished = (locationId, location) => {
    return { 
        type: SET_LOCATION_FINISHED,
        locationId,
        location
    };
};

export const setLocationFailed = failReason => {
    return { 
        type: SET_LOCATION_FAILED,  
        failReason
    };
};



/** 
 * Add location Saga 
 */

export const addEmptyLocationAsync = (accountId) => {
    return { 
        type: ADD_EMPTY_LOCATION_SAGA_ASYNC,  
        accountId
    };
};

export const addEmptyLocationStarted = () => {
    return { 
        type: ADD_EMPTY_LOCATION_STARTED
    };
};

export const addEmptyLocationFinished = (addresses) => {
    return { 
        type: ADD_EMPTY_LOCATION_FINISHED,
        addresses
    };
};

export const addEmptyLocationFailed = failReason => {
    return { 
        type: ADD_EMPTY_LOCATION_FAILED,  
        failReason
    };
};


/** 
 * Remove location Saga 
 */

export const removeLocationAsync = (accountId, locationId) => {
    return { 
        type: DELETE_LOCATION_SAGA_ASYNC,  
        accountId,
        locationId
    };
};

export const removeLocationStarted = () => {
    return { 
        type: DELETE_LOCATION_STARTED
    };
};

export const removeLocationFinished = (addresses) => {
    return { 
        type: DELETE_LOCATION_FINISHED,
        addresses
    };
};

export const removeLocationFailed = failReason => {
    return { 
        type: DELETE_LOCATION_FAILED,  
        failReason
    };
};


