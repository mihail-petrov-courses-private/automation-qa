const mysql = require('mysql');

module.exports = (query, callback) => {

    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'wordpress'
    });
    
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {

            if(error) {
                return reject(error)
            }

            resolve(results);
        });
    });
};