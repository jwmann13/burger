let orm = require('../config/orm');

let model = {
    selectAll: function (cb) {
        orm.selectAll('burgers', cb);
    },
    insertOne: function(vals, cb) {
        orm.insertOne('burgers', ["burger_name", "devoured"], vals, cb);
    },
    updateOne: function(prop, indexProp, indexVal, newVal, cb) {
        newVal = newVal ? '1' : '0';
        orm.updateOne('burgers', prop, indexProp, indexVal, newVal, cb);
    },
    deleteOne: function(indexProp, indexVal, cb) {
        orm.deleteOne('burgers', indexProp, indexVal, cb)
    }
}

module.exports = model;