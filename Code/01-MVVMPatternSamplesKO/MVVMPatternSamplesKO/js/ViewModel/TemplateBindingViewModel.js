TemplateBindingViewModel = function (calendarMonthModels) {
    var self = this;
    self.months = ko.observableArray(calendarMonthModels);
    self.currentMonth = ko.observable(calendarMonthModels[0].name());
    self.events = ko.computed(function () {
       return new EventModel("12/04/2016", "Knockout: mvvm on the client side",
       "This is going to be my first introduction for you to KO library"
       + "which enable Model View ViewModel for client applicaitions to" +
       "have automated bindings and such")
    });
};