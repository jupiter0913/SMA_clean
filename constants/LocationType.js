export const LocationType = {
    FIXED: "FIXED",
    MOBILE: "MOBILE"
};

export const GetLocationType = typeStr => {
    let type = typeStr.toLowerCase().trim();
    alert(type);
    if ( type === "fixed") {
        return LocationType.FIXED;
    }
    else if ( type === "mobile") {
        return LocationType.MOBILE;
    }
    else {
        throw "type not valid"
    }
}