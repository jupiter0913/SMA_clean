export const FETCH_SCHEDULE_TYPE_SAGA_ASYNC = 'FETCH_ADDRESS_TYPE_SAGA_ASYNC';
export const FETCH_SCHEDULE_TYPE_STARTED = 'FETCH_SCHEDULE_TYPE_STARTED';
export const FETCH_SCHEDULE_TYPE_FINISHED = 'FETCH_SCHEDULE_TYPE_FINISHED';
export const FETCH_SCHEDULE_TYPE_FAILED = 'FETCH_SCHEDULE_TYPE_FAILED';

export const SET_SCHEDULE_TYPE_SATA_ASYNC = 'SET_SCHEDULE_TYPE_SATA_ASYNC';
export const SET_SCHEDULE_TYPE_STARTED = 'SET_SCHEDULE_TYPE_STARTED';
export const SET_SCHEDULE_TYPE_FINISHED = 'SET_SCHEDULE_TYPE_FINISHED';
export const SET_SCHEDULE_TYPE_FAILED = 'SET_SCHEDULE_TYPE_FAILED';

/*
 * fetching schedule type 
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