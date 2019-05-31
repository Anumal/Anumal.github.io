var NAMESPACE_DateTime = NAMESPACE_DateTime || {};

NAMESPACE_DateTime.weeksInbetween = function(date1, date2){
    return Math.round((date2 - date1 + (5 * 24 * 60 * 60 * 1000)) / (7 * 24 * 60 * 60 * 1000));
}