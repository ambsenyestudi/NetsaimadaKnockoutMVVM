var CalendarMonthModel = function (weekDayStructure, monthsNames, monthNumber, monthDates) {
   
    
    var self = this;
    self.name = ko.observable(monthsNames[monthNumber - 1]);
    self.weekDays = ko.observableArray(weekDayStructure);
    //mock data
    self.mainEvent = ko.observable(new EventModel("12/04/2016", "Knockout: mvvm on the client side",
        "This is going to be my first introduction for you to KO library" 
        +"which enable Model View ViewModel for client applicaitions to"+
        "have automated bindings and such"));
    self.getWeeks = function (weekDayStructure, monthsNames, monthNumber, monthDates) {
        var daysPerWeek = 7;

        var weeks = [];
        for (var m = 0; m < monthDates.length / daysPerWeek; m++) {
            var currWeek = new CalendarWeekModel(self, null);
            var days = [];

            for (var w = 0; w < daysPerWeek; w++) {
                var index = m * daysPerWeek + w;
                if ((index) < monthDates.length) {
                    var separatedDate = monthDates[index].split("/");
                    var weekDay = weekDayStructure[w];
                    var monthDay = parseInt(separatedDate[0]);
                    var month = monthsNames[parseInt(separatedDate[1]) - 1];
                    var year = parseInt(separatedDate[2])
                    var currDay = new CalendarDayModel(weekDay, monthDay, month, year, currWeek);
                    days.push(currDay);
                }
            }
            if (currWeek.month() === undefined || currWeek.month() === null) {
                currWeek.month(self);
            }
            currWeek.weekDayList(days);
            weeks.push(currWeek);
        }
        return weeks;
    };
    self.weekList = ko.observableArray(self.getWeeks(weekDayStructure, monthsNames, monthNumber, monthDates));

};