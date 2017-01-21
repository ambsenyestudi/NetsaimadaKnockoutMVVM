function LoginViewModel() {
    //fields
    var self = this;
    self.isLogin = ko.observable(true);
    self.Email = ko.observable("user@notanadress.com");
    self.Password = ko.observable("");
    self.clearEmail = function () {
        console.log("clear email function executing");
        self.Email("");
    };
    self.clearPassword = function () {
        self.Password("");
    };

}