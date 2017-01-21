function SummaryViewModel() {
    //fields
    var self = this;
    self.userProfiles = ko.observableArray();
    self.isSummary = ko.observable(false);
    //functions
    self.getAllItems = function () {

        sendAjaxRequest("GET", function (data) {
            self.userProfiles.removeAll();
            for (var i = 0; i < data.length; i++) {
                self.userProfiles.push(data[i]);
            }

        });
    }
    self.removeItem = function (id) {

        var oldItem = self.searchUserInObservableUserProfile(id);

        var item =
        sendAjaxRequest("DELETE", function () {
            self.userProfiles.remove(oldItem);
        }, oldItem.UserId);

    }

    self.searchUserInObservableUserProfile = function (id) {
        var count = 0;
        var isFound = false;
        var user;
        //al loro que como es observable array el acceso es como función de ahi el ()
        while (!isFound && count < self.userProfiles().length) {
            var currId = self.userProfiles()[count].UserId;
            if (currId === id) {
                isFound = true;
                user = self.userProfiles()[count];
            }
            count++;
        }
        return user;

    }
    self.loadImage = function (element, index, data) {
        $('#profileImage_' + index.UserId).attr('src', index.ProfilePictureSource);

    };


}