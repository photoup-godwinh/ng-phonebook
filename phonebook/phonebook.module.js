angular.module("phonebook", [
        require('../contact/contact.module')
    ])
    .constant("api", {
        endpoint: "http://localhost:3000/contacts"
    })
    .component("phonebook", require("./phonebook.component"));

module.exports = "phonebook";