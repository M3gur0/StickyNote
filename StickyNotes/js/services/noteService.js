(function () {

    app.service('noteService', function () {

        var notes = [];
        notes.push({ title: 'note #1', content: 'that is the content of note #1' });
        notes.push({ title: 'note #2', content: 'that is the content of note #2' });
        notes.push({ title: 'note #3', content: 'that is the content of note #3' });
        notes.push({ title: 'note #4', content: 'that is the content of note #4' });
        notes.push({ title: 'note #5', content: 'that is the content of note #5' });
        notes.push({ title: 'note #6', content: 'that is the content of note #6' });


        var find = function (item) {
            return this == item.title;
        };

        return {

            post: function (note) {
                // create
                if (!notes.filter(find, note.title))
                    notes.push(note);
            },
            put: function (note) {
                if (!notes.filter(find, note.title))
                    notes.filter();
            },
            get: function (title) {
                if (!title) {
                    return notes;
                }
                else {
                    return notes.filter(find, title);
                }
            }

        }

    });

})();