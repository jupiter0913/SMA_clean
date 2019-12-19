export const FETCH_SCHEDULE_TYPE_SAGA_ASYNC = 'FETCH_ADDRESS_TYPE_SAGA_ASYNC';
export const FETCH_SCHEDULE_TYPE_STARTED = 'FETCH_SCHEDULE_TYPE_STARTED';
export const FETCH_SCHEDULE_TYPE_FINISHED = 'FETCH_SCHEDULE_TYPE_FINISHED';
export const FETCH_SCHEDULE_TYPE_FAILED = 'FETCH_SCHEDULE_TYPE_FAILED';

export const FETCH_ADDRESSES_SAGA_ASYNC = 'FETCH_ADDRESSES_SAGA_ASYNC';
export const FETCH_ADDRESSES_STARTED = 'FETCH_ADDRESSES_STARTED';
export const FETCH_ADDRESSES_FINISHED = 'FETCH_ADDRESSES_FINISHED';
export const FETCH_ADDRESSES_FAILED = 'FETCH_ADDRESSES_FAILED';

export const SET_SCHEDULE_TYPE_SATA_ASYNC = 'SET_SCHEDULE_TYPE_SATA_ASYNC';
export const SET_SCHEDULE_TYPE_STARTED = 'SET_SCHEDULE_TYPE_STARTED';
export const SET_SCHEDULE_TYPE_FINISHED = 'SET_SCHEDULE_TYPE_FINISHED';
export const SET_SCHEDULE_TYPE_FAILED = 'SET_SCHEDULE_TYPE_FAILED';

export const SET_SCHEDULE_SAGA_ASYNC = 'SET_SCHEDULE_SAGA_ASYNC';
export const SET_SCHEDULE_STARTED = 'SET_SCHEDULE_STARTED';
export const SET_SCHEDULE_FINISHED = 'SET_SCHEDULE_FINISHED';
export const SET_SCHEDULE_FAILED = 'SET_SCHEDULE_FAILED';

/*
export const ADD_SCHEDULE_SAGA_ASYNC = 'ADD_SCHEDULE_SAGA_ASYNC'; 
export const ADD_SCHEDULE_STARTED = 'ADD_SCHEDULE_STARTED';
export const ADD_SCHEDULE_FINISHED = 'ADD_SCHEDULE_FINISHED';
export const ADD_SCHEDULE_FAILED = 'ADD_SCHEDULE_FAILED';
*/

export const ADD_EMPTY_SCHEDULE_SAGA_ASYNC = 'ADD_EMPTY_SCHEDULE_SAGA_ASYNC'; 
export const ADD_EMPTY_SCHEDULE_STARTED = 'ADD_EMPTY_SCHEDULE_STARTED';
export const ADD_EMPTY_SCHEDULE_FINISHED = 'ADD_EMPTY_SCHEDULE_FINISHED';
export const ADD_EMPTY_SCHEDULE_FAILED = 'ADD_EMPTY_SCHEDULE_FAILED';

export const DELETE_SCHEDULE_SAGA_ASYNC = 'DELETE_SCHEDULE_SAGA_ASYNC'; 
export const DELETE_SCHEDULE_STARTED = 'DELETE_SCHEDULE_STARTED';
export const DELETE_SCHEDULE_FINISHED = 'DELETE_SCHEDULE_FINISHED';
export const DELETE_SCHEDULE_FAILED = 'DELETE_SCHEDULE_FAILED';


/*
 * fetching address type 
 */

export const fetchScheduleTypeAsync = (accountId) => {
    return { 
        type: FETCH_SCHEDULE_TYPE_SAGA_ASYNC,  
        accountId
    };
};

export const fetchScheduleTypeStarted = () => {
    return { 
        type: FETCH_SCHEDULE_TYPE_STARTED
    };
};

export const fetchScheduleTypeFinished = scheduleType => {
    return { 
        type: FETCH_SCHEDULE_TYPE_FINISHED, 
        scheduleType
    };
};

export const fetchScheduleTypeFailed = failReason => {
    return { 
        type: FETCH_SCHEDULE_TYPE_FAILED,  
        failReason
    };
};

/** 
 * Setting schedule type 
 */

export const setScheduleTypeAsync = (accountId, scheduleType) => {
    return { 
        type: SET_SCHEDULE_TYPE_SATA_ASYNC,  
        accountId,
        scheduleType
    };
};

export const setScheduleTypeStarted = () => {
    return { 
        type: SET_SCHEDULE_TYPE_STARTED
    };
};

export const setScheduleTypeFinished = scheduleType => {
    return { 
        type: SET_SCHEDULE_TYPE_FINISHED,
        scheduleType
    };
};

export const setScheduleTypeFailed = failReason => {
    return { 
        type: SET_SCHEDULE_TYPE_FAILED,  
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

export const setScheduleAsync = (accountId, scheduleId, schedule) => {
    return { 
        type: SET_SCHEDULE_SAGA_ASYNC,  
        accountId,
        scheduleId,
        schedule
    };
};

export const setScheduleStarted = () => {
    return { 
        type: SET_SCHEDULE_STARTED
    };
};

export const setScheduleFinished = (scheduleId, schedule) => {
    return { 
        type: SET_SCHEDULE_FINISHED,
        scheduleId,
        schedule
    };
};

export const setScheduleFailed = failReason => {
    return { 
        type: SET_SCHEDULE_FAILED,  
        failReason
    };
};



/** 
 * Add schedule Saga 
 */

export const addEmptyScheduleAsync = (accountId) => {
    return { 
        type: ADD_EMPTY_SCHEDULE_SAGA_ASYNC,  
        accountId
    };
};

export const addEmptyScheduleStarted = () => {
    return { 
        type: ADD_EMPTY_SCHEDULE_STARTED
    };
};

export const addEmptyScheduleFinished = (addresses) => {
    return { 
        type: ADD_EMPTY_SCHEDULE_FINISHED,
        addresses
    };
};

export const addEmptyScheduleFailed = failReason => {
    return { 
        type: ADD_EMPTY_SCHEDULE_FAILED,  
        failReason
    };
};


/** 
 * Remove schedule Saga 
 */

export const removeScheduleAsync = (accountId, scheduleId) => {
    return { 
        type: DELETE_SCHEDULE_SAGA_ASYNC,  
        accountId,
        scheduleId
    };
};

export const removeScheduleStarted = () => {
    return { 
        type: DELETE_SCHEDULE_STARTED
    };
};

export const removeScheduleFinished = (addresses) => {
    return { 
        type: DELETE_SCHEDULE_FINISHED,
        addresses
    };
};

export const removeScheduleFailed = failReason => {
    return { 
        type: DELETE_SCHEDULE_FAILED,  
        failReason
    };
};


