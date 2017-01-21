var ContactInfoModel=function (name, surname, phone) {
    "use strict";
    var
        _name = ko.observable(name),
        _surname = ko.observable(surname),
        _phone = ko.observable(phone);
    return {
        name: _name,
        surname: _surname,
        phone: _phone
    };
};