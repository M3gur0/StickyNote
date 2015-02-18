(function () {

    app.service('$noteService', ['$http', function ($http) {

        var notes = [];
        
        var serviceBaseUrl = {
            get: '/api/note'
        };

        var find = function (prop, value) {
            return value == item[prop];
        };

        return {

            post: function (note) {
                // create
                if (!notes.filter(find, 'title', note.title))
                    notes.push(note);
            },
            put: function (note) {
                if (!notes.filter(find, note.title))
                    notes.filter();
            },
            get: function (id) {

                var url = serviceBaseUrl.get;
                if (id) url += '/' + id;

                var promise = $http
                    .get(url)
                    .then(function (response) {

                        notes = response.data;
                        console.log(response.data.length + ' notes found');

                        return notes;

                    });

                return promise;
            }
        }

    }]);

})();