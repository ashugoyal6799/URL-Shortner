var express = require("express");
var router = express.Router();
const urlShortnerController = require("../controllers/urlShortner");

/* GET users listing. */
router.get("/", urlShortnerController.URLShortnerLogic);
router.get("/s/:base62Code", urlShortnerController.getOriginalUrl);

module.exports = router;
