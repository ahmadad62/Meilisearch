// const express = require('express');
// const router = express.Router();
// const executeQuery = require('./config/database');

// module.exports = (client, pool) => {
//   router.post('/index', async (req, res) => {

//     try {
//       const { rows } = await executeQuery.query();
//       const index = client.index("products");
      
//       await index.addDocuments(rows);
//       res.status(200).send('Data indexed successfully');
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   });

//   return router;
// };
// // 

const express = require('express');
const router = express.Router();
const executeQuery = require('../config/database'); // Ensure the path is correct

module.exports = (client, pool) => {
  router.post('/index', async (req, res) => {
    try {
      const rows = await executeQuery('SELECT * FROM sql_store.products');
      const index = client.index("products");
           await index.addDocuments(rows);
      res.status(200).send('Data indexed successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  return router;
};

