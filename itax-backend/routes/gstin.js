const express = require('express');
const axios = require('axios');
const router = express.Router();

const db = require('../config/db.js');

// Endpoint to search by GSTIN
router.get('/searchByGSTIN/:gstin', async (req, res) => {
  try {
    const gstin = req.query.gstin;
    console.log(req.query.gstin);
    const search_query= `SELECT * FROM itaxschema.details WHERE gstinNum = '${gstin}'`;
    const result  = db.query(search_query);
    console.log(result);
    // const response = await axios.get(`https://localhost3000/commonapi/v1.3/search?gstin=${gstin}`);
    res.json(result);
    // res.json(response.data);
  } 
 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error from gstin' });
  }
});

module.exports = router;
