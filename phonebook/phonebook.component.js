const _ = require('lodash');

const component = {
    templateUrl: '/phonebook/phonebook.template.html',
    controller: ["$http", "api", function($http, api) {
        this.$onInit = () => {
            this.contacts = [];
            this.adding = false;

            $http.get(api.endpoint)
                .then((response) => {
                    this.contacts = response.data;

                });
        };

        this.update = (data, id) => {
            $http.put(`${api.endpoint}/${id}`, data)
                .then((response) => {
                    _.assign(
                        _.find(this.contacts, {
                            id: id
                        }), response.data);
                })
        };

        this.delete = (id) => {
            $http.delete(`${api.endpoint}/${id}`)
                .then((response) => {
                    this.contacts = _.reject(this.contacts, {
                        id: id
                    });
                });
        };

        this.add = (data) => {
            $http.post(api.endpoint, data)
                .then((response) => {
                    this.contacts.push(response.data);
                })
                .finally(() => {
                    this.adding = false;
                })
        };

        this.addNew = () => {
            this.adding = true;
        };

        this.cancelAdd = () => {
            this.adding = false;
        };
        
    }]
};

module.exports = component;