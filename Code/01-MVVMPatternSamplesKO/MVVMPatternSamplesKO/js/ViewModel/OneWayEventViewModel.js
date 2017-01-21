OneWayEventViewModel = function (contactInfoPassiveModel) {
    var self = this;
    self.model = ko.observable(contactInfoPassiveModel);
    self.updateModel = function (context) {
        console.log("updating model");
        console.log("old model");
        console.log(self.model());
        var newContactInfo = ContactInfoModel(
            context.name,    
            context.surname,
            context.phone
        );
        console.log("new model");
        console.log(newContactInfo);
        self.model(newContactInfo);
    };
};