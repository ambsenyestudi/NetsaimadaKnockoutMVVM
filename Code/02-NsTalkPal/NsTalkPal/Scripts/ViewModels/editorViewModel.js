function EditorViewModel(summaryViewModel, loginViewModel, userHUDViewModel) {
    //fields
    var self = this;
    self.isEditor = ko.observable(true);
    self.Name = ko.observable("");
    self.Surname = ko.observable("");
    self.Nickname = ko.observable("");
    self.Email = ko.observable("");
    self.City = ko.observable("");
    self.Neighbourhood = ko.observable("");
    self.ProfilePictureSource = ko.observable("http://simpleicon.com/wp-content/uploads/user1.png");
    self.Password = ko.observable("");
    self.ConfirmPassword = ko.observable("");
    self.sumVM = summaryViewModel;
    self.loginVM = loginViewModel;
    self.userHUDVM = userHUDViewModel;
    self.isPostUserError = ko.observable(false);
    self.errorMessage = ko.observable("No error yet");
    self.validateAndSave = function (form) {
        if (!$(form).validate())
            return;

        var newItem = {
            UserId: self.getNextId(),
            Name: self.Name(), Surname: self.Surname(), Nickname: self.Nickname(),
            Email: self.Email(), City: self.City(), Neighbourhood: self.Neighbourhood(),
            ProfilePictureSource: self.ProfilePictureSource()
        }
        self.postNewUserProfile(newItem);



    };
    self.getNextId = function () {
        var nextId = 0;
        for (var i = 0; i < self.sumVM.userProfiles().length; i++) {
            if (self.sumVM.userProfiles()[i].UserId > nextId) {
                nextId = self.sumVM.userProfiles()[i].UserId;
            }
        }
        nextId++;
        return nextId;
    };
    self.postNewUserProfile = function (newItem) {
        $.ajax("/api/web", {
            type: "POST",
            success: function (newItem) {
                self.sumVM.userProfiles.push(newItem);
                self.userHUDVM.User({
                    UserId: newItem.UserId,
                    NMailNotifications: 1,
                    NEventNotifications: 0,
                    NNewsNotifications: 1,
                    NWarningsNotifications: 200,
                    Name: newItem.Name,
                    Surname: newItem.Surname,
                    Nickname: newItem.Nickname,
                    Email: newItem.Email,
                    City: newItem.City,
                    Neighbourhood: newItem.Neighbourhood,
                    ProfilePictureSource: newItem.ProfilePictureSource
                });
                self.sumVM.isSummary(true);
                self.userHUDVM.isHud(true);
                self.loginVM.isLogin(false);
                self.isEditor(false);
                
            },
            error: function () {
                console.log("there has been an error");
                self.isPostUserError(true);
                self.errorMessage("There has been an error while singing up check your connection");
            },
            data: newItem
        });
    };
}