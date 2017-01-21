
var CalendarDayModel = function (weekDay, monthDay, monthName, year, calendarWeekModel) {
    "use strict";
    var _weekDay = ko.observable(weekDay),
        _monthDay = ko.observable(monthDay),
        _month = ko.observable(monthName),
        _year = ko.observable(year),
        _week = ko.observable(calendarWeekModel),
        _isCurrentMonth = ko.computed(function () {
            
            if (_week() != null)
            {
                var week = _week();
                if (week.month() != null) {
                    var month = week.month();
                    var monthName = ko.unwrap(month.name);
                    var isThisMonth = monthName === _month();
                    console.log("is " + monthName + " == " + _month() + " : " + isThisMonth);
                    return isThisMonth;
                }
                
            }
            else
            {
                
                return false;
            }
        });
    return {
        weekDay: _weekDay,
        monthDay: _monthDay,
        month: _month,
        year: _year,
        isCurrentMonth: _isCurrentMonth
    };
};