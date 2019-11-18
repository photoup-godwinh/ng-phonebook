module.exports = {
    templateUrl: '/contact/contact.new.template.html',
    bindings: {
        onAdd: '&',
        onCancel: '&'
    },
    controller: function() {
        this.$onInit = () => {
            this.data = {};
        };

        this.cancel = () => {
            this.onCancel();
        };

        this.add = () => {
            if(this.form.$invalid) return;

            this.onAdd({
                data: this.data
            });
        }
    }
};