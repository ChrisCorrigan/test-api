module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // create new note
    app.post('/notes', notes.create);

    // retrieve all notes
    app.post('/notes', notes.findAll);

    // retrieve single note
    app.post('/notes/:noteId', notes.findOne);

    // update a note with noteId
    app.put('/notes/:noteId', notes.update);

    // delete a note with noteId
    app.delete('/notes/:noteId', notes.delete);
}
