export const ScheduleType = {
    WEEK: "WEEK",
    MONTH: "MONTH"
};

export const GetScheduleType = typeStr => {
    let type = typeStr.toLowerCase().trim();
    alert(type);
    if ( type === "week") {
        return ScheduleType.WEEK;
    }
    else if ( type === "month") {
        return ScheduleType.MONTH;
    }
    else {
        throw "type not valid"
    }
}