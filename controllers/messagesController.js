const knex = require ('../db/knex')

exports.getAllMessages = function (req, res) {
    knex('messages')
        .then(messages => res.json(messages))
}

exports.addMessage = function (req, res) {
    knex('messages')
        .insert(req.body)
        .returning("*")
        .then(newMessage => res.json(newMessage))
}

exports.editMessage = function (req, res) {
    knex('messages')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning('*')
        .then(editedMessage => res.json(editedMessage))
}

exports.deleteMessage = function (req, res) {
    knex('messages')
        .where('id', req.params.id)
        .del()
        .returning('*')
        .then(deletedMessage => res.json(deleteMessage))
}