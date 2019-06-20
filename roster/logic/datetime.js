var NAMESPACE_DateTime = NAMESPACE_DateTime || {};

NAMESPACE_DateTime.weeksInbetween = function(date1, date2){
    return Math.floor((date2 - date1) / (7 * 24 * 60 * 60 * 1000));
}