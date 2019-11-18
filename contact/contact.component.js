module.exports = {
    templateUrl: '/contact/contact.default.template.html',
    bindings: {
        contact: '<',
        onUpdate: '&',
        onDelete: '&'
    },
    controller: function() {
        this.$onInit = () => {
            this.editMode = false;
        };

        this.update = function(data) {
            console.log("received from contact.component: ", data);
            this.onUpdate({
                data: data, 
                id: this.contact.id
            })
        };

        this.delete = function() {
            let result = confirm("Are you sure you want to delete?");

            if(result) {
                this.onDelete({
                    id: this.contact.id
                });
            }
        };

        this.setEditMode = function(value) {
            this.editMode = value || false;
        };
    }
}