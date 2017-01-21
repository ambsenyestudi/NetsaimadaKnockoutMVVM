var CalendarWeekModel = function (calendarMonthModel, calendarDayModelArray) {
    "use strict";
    var asureWeek = function (days) {
        if (days != null){
            for (var i = 0; i < days.length; i++) {
                if (days[i].week() === null) {
                    days[i].week(this);
                }
            }
        }
        
        return days
    };
    var _weekDayList = ko.observableArray(asureWeek(calendarDayModelArray)),
        _month = ko.observable(calendarMonthModel);
    
    return {
        weekDayList: _weekDayList,
        month: _month
    };
};