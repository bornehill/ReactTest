"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmmiter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var authors = [];

var AuthorStore = assign({}, EventEmmiter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function(callback){
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: function(){
        return authors;
    },
    getAuthorById: function(id){
        return _.find(authors, {id: id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            authors = action.initialData.authors;
            AuthorStore.emitChange();
    }
});

module.exports = AuthorStore;