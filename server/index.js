require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const { default: axios } = require('axios');
const PORT = process.env.SERVER_PORT || 3001;

const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(cors());

app.get('/api/getAll', async (req, res) => {
  try {
    const url = `https://perenual.com/api/species-list?key=${API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
