
exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table){
        table.increments();
        table.string('name').notNullable();
        table.text('message').notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('messages')
};
