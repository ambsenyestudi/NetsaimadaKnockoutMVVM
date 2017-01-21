ShoppingCartViewModel = function () {
    var self = this;
    self.newProduct = ko.observable(Product("", "", "", ""))
    self.catalog = ko.observableArray([
        Product(1, "T-Shirt", 10.00, 20),
        Product(2, "Trousers", 20.00, 10),
        Product(3, "Shirt", 15.00, 20),
        Product(4, "Shorts", 5.00, 10)
    ]);
    
    self.addProduct = function (context) {  
        var id = new Date().valueOf();//random id from time  
        var newProduct = Product(id, context.name(), context.price(),
        context.stock());
        self.catalog.push(newProduct);
        self.newProduct().clear();
    };
    self.clearName = function () {
        self.newProduct().name("");
    };
    self.clearPrice = function () {
        self.newProduct().price("");
    };
    self.clearStock = function () {
        self.newProduct().stock("");
    };
};