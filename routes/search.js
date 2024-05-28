const express = require("express");
const router = express.Router();
const executeQuery = require("../config/database"); // Ensure the path is correct

module.exports = (client) => {
  router.post("/index", async (req, res) => {
    try {
      const rows = await executeQuery("SELECT * FROM sql_store.products");
      const index = client.index("products");
      await index.addDocuments(rows);
      res.status(200).send("Data indexed successfully");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  router.get("/products", async (req, res) => {
    try {
      const { q } = req.query;
      const index = client.index("products");
      const searchResult = await index.search(q);
      res.status(200).send(searchResult);
    } catch (error) {
      console.log(error);
      
    }
  });

  return router;
};
