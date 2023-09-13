const express = require('express');
const axios = require('axios');
const router = express.Router();

const db = require('../config/db.js');

// Endpoint to search by PAN
router.get('/searchByPAN', async (req, res) => {
  try {
    const pan = req.query.pan;
    console.log(req.query.pan);
    const search_query= `SELECT * FROM details WHERE PanNum='${pan}'`;
    console.log(search_query);
    const result  = db.query(search_query);
    console.log(result,"sajalresult");
    // const response = await axios.get(`https://localhost:3000/commonapi/v1.0/fip/searchbypan?pan=${pan}`);
    res.json(result);
    // res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error form pan' });
  }
});

module.exports = router;
