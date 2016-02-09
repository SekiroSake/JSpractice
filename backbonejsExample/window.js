function ViewModel() {
    this.firstName = ko.observable("Joe");
    this.lastName = ko.observable("Bloggs");

    this.fullName = ko.computed(
        function() { return this.firstName() + " " + this.lastName(); }, 
        this);
}

ko.applyBindings(new ViewModel());