let connection = require('../config/connection');
let orm = require('../config/orm');

orm.selectAll('burgers');

// orm.insertOne('burgers', 'holy fuck');

orm.updateOne('burgers', 'burger_name', 'holy fuck', 'nicer name');