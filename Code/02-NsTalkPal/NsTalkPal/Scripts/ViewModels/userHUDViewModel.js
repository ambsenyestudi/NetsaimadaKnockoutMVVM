function UserHUDViewModel() {
    var self = this;

    self.User = ko.observable({
        UserId: 0,
        NMailNotifications: 3,
        NEventNotifications: 0,
        NNewsNotifications: 0,
        NWarningsNotifications:11,
        Name: "Name",
        Surname: "Surname",
        Nickname: "Nickname",
        Email: "Email",
        City: "City",
        Neighbourhood: "Neighbourhood",
        ProfilePictureSource: "http://simpleicon.com/wp-content/uploads/user1.png"
    });

    self.Name = ko.computed(function () {
        return self.User().Name;
    });
    self.IsMailNotification = ko.computed(function () {
        return self.User().NMailNotifications > 0;
    });
    self.NMailNotifications = ko.computed(function () {
        return self.User().NMailNotifications;
    });
    self.IsEventNotification = ko.computed(function () {
        return self.User().NEventNotifications > 0;
    });
    self.NEventNotifications = ko.computed(function () {
        return self.User().NEventNotifications;
    });
    self.IsNewsNotification = ko.computed(function () {
        return self.User().NNewsNotifications > 0;
    });
    self.NNewsNotifications = ko.computed(function () {
        return self.User().NNewsNotifications;
    });
    self.IsWarningsNotification = ko.computed(function () {
        return self.User().NWarningsNotifications > 0;
    });
    self.NWarningsNotifications = ko.computed(function () {
        return self.User().NWarningsNotifications;
    });
    self.ProfilePictureSource =
        ko.computed(function () {
            return self.User().ProfilePictureSource;
        });
    //self.NStars = ko.observableArray([{ isStar: true }, { isStar: false }, { isStar: false }, { isStar: false }, { isStar: false }]);
    self.NStars = ko.observableArray([true, false, false, false, false]);
    self.isHud = ko.observable(false);
}