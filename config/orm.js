let connection = require('./connection');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

let orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * from ??";
        connection.query(queryString, [tableInput], (err, data) => {
            if (err) throw err;
            cb(data);
        })
    },
    insertOne: function (tableInput, cols, vals, cb) {
        // console.log('4');
        let queryString = `INSERT INTO ${tableInput} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
        connection.query(queryString, vals, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function (tableInput, propertyToUpdate, indexProperty, indexValue, newValue) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, propertyToUpdate, newValue, indexProperty, indexValue], (err, res) => {
            if (err) throw err;
            // console.log(res, queryString);
        })
    },
    deleteOne: function (tableInput, indexProperty, indexValue) {
        let queryString = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, indexProperty, indexValue], (err, res) => {
            if (err) throw err;
            console.log('deleted it')
        });
    }
}

module.exports = orm;