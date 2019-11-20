let connection = require('./connection')

let orm = {
    selectAll: function(tableInput) {
        let queryString = "SELECT * from ??";
        connection.query(queryString, [tableInput], (err, data) => {
            if (err) throw err;
            console.log(data);
        })
    },
    insertOne: function(tableInput, burgerName) {
        let queryString = "INSERT INTO ?? VALUES (null, ?, false)";
        connection.query(queryString, [tableInput, burgerName], (err) => {
            if (err) throw err;
            console.log("burger added!")
        });
    },
    updateOne: function(tableInput, propertyToUpdate, oldValue, newValue) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, propertyToUpdate, newValue, propertyToUpdate, oldValue], (err) => {
            if (err) throw err;
            console.log('burger updated');
        })
    }
}

module.exports = orm;