const express = require('express');
const { MeiliSearch } = require('meilisearch'); // Correct import statement
const searchRoutes = require('./routes/search');
const path = require('path');

const app = express();
const client = new MeiliSearch({ 
  host: 'http://127.0.0.1:7700',
  apiKey:'CVd3vRFoGW8_RDJnu3tvLw7O2K2YVIn-0gXPs1psf-0'
});

app.use(express.json()); // Middleware to parse JSON payloads

// Endpoint to index data
app.use('/search', searchRoutes(client));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
