angular.module("contact", [])
    .component("contact", require("./contact.component"))
    .component("contactEdit", require("./contact.edit.component"))
    .component("contactNew", require("./contact.new.component"));

module.exports = "contact";