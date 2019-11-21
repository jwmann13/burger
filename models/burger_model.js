let connection = require('../config/connection');
let orm = require('../config/orm');

let model = {
    selectAll: function (cb) {
        orm.selectAll('burgers', cb);
    },
    insertOne: function(vals, cb) {
        // console.log('3');
        orm.insertOne('burgers', ["burger_name", "devoured"], vals, cb);
    },
    updateOne: function(prop, indexProp, indexVal, newVal) {
        newVal = newVal ? '1' : '0';
        orm.updateOne('burgers', prop, indexProp, indexVal, newVal);
    }
}

module.exports = model;