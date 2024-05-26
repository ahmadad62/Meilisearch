// const mysql = require('mysql2');

// // Create a connection pool
// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: 'P@ssw0rd1',
//   database: 'sql_store',
//   port: 3306
// });

// pool.query('select * from	sql_store.products', (error, results, fields) => {
//   if (error) {
//     console.error('Error executing query:', error);
//     return;
//   }

//  return results//JSON.stringify(results);
// });

// process.on('exit', () => {
//   pool.end();
// });

const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd1',
  database: 'sql_store',
  port: 3306
});

// Define a function to execute queries
function executeQuery(query) {
  return new Promise((resolve, reject) => {
    pool.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

// End the pool when the process exits
process.on('exit', () => {
  pool.end();
});

// Export the function to be used in other modules
module.exports = executeQuery;
