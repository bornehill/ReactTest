"use strict";

var Dispacher = require('../dispatcher/appDispatcher');
var AuthorAPI = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author){
        var newAuthor = AuthorAPI.saveAuthor(author);

        Dispacher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }
};

module.exports = AuthorActions;