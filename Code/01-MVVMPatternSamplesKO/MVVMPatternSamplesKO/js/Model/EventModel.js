var EventModel = function (date, title, description) {
    "use strict";
    var
        _date = ko.observable(date),
        _title = ko.observable(title),
        _description = ko.observable(description);
    return {
        date: _date, title: _title, description: _description
    };
};