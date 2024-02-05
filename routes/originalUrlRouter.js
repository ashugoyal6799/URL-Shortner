const express = require("express");
const router = express.Router();
const urlShortnerController = require("../controllers/urlShortner");

router.get("/:base62Code", urlShortnerController.getOriginalUrl);

module.exports= router;