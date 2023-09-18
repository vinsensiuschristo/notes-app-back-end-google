const {
  addNoteHandler,
  getNotesHandler,
  getNoteHandler,
  editNoteHandler,
  deleteNoteHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteHandler,
  },
];

module.exports = routes;
