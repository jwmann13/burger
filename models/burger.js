let connection = require('../config/connection');
let orm = require('../config/orm');

let model = {
    selectAll: function (table, cb) {
        orm.selectAll(table, cb);
    },
    insertOne: function(vals, cb) {
        console.log('3');
        orm.insertOne('burgers', ["burger_name", "devoured"], vals, cb);
    },
    // updateOne: function(table, prop, oldD, newD) {
    //     orm.updateOne(table, prop, oldD. newD);
    // }
}

module.exports = model;

// model.selectAll('burgers', res => console.log(res.burger_name));

// orm.insertOne('burgers', 'holy fuck', console.log);

// orm.updateOne('burgers', 'burger_name', 'holy fuck', 'nicer name');