
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('username');
        table.string('email');
        table.string('password_digest')
    }) 
  
};

exports.down = function(knex) {
  
};
