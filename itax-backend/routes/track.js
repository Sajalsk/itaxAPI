const express = require("express");
const axios = require("axios");
const router = express.Router();

// Endpoint to track GSTIN returns
router.get("/trackGSTINReturns", async (req, res) => {
  try {
    const track = req.query.track;
    console.log(req.query.track);
    const search_query= `SELECT * FROM itaxschema.details WHERE track = '${track}'`;
    const result  = db.query(search_query);
    console.log(result);
    // const response = await axios.get(`https://localhost:3000/commonapi/v1.0/returns?track=${track}`);
    res.json(result);
    // res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error for tracking return" });
  }
});

module.exports = router;



