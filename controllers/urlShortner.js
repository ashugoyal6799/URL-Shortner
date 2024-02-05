const express = require("express");

var map1 = new Map();

const IdGenerator = require("./IdGenerator");
const Base62UrlGenerator = require("./Base62UrlGenerator");

exports.URLShortnerLogic = (req, res, next) => {
  
  req.body.url = req.protocol + '://' + req.get('host') + req.originalUrl;

  var url = req.body.url;

  IdGenerator.getIdfromURL(req);

  Base62UrlGenerator.getShortURLfromID(req);

  map1.set(req.body.base62Code,req.body.url);

  res.redirect("/s/" + req.body.base62Code);
};

exports.getOriginalUrl = (req,res,next) => {
  console.log(req.params.base62Code);
  console.log(map1.get(req.params.base62Code));
  //res.send("You have sucessfully shorten the url");
  res.send(map1.get(req.params.base62Code));
}