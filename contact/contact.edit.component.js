const _ = require("lodash");

module.exports = {
    templateUrl: '/contact/contact.edit.template.html',
    bindings: {
        contact: '<',
        onUpdate: '&'
    },
    require: {
        contactCtrl: '^contact'
    },
    controller: function() {
        this.$onInit = () => {
            this.copy = _.clone(this.contact);
        };

        this.cancelEdit = () => {
            this.contactCtrl.setEditMode(false);
        }

        this.save = () => {
            if(this.form.$invalid) return;

            this.contactCtrl.update({
                first_name: this.copy.$modelValue, 
                last_name: this.copy.$modelValue,
                number: this.copy.$modelValue
            });

            this.contactCtrl.setEditMode(false);

        };
    }
}