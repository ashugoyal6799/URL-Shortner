const express = require("express");

function base10ToBase62(num) {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let base = characters.length; // 62
  let result = "";

  if (num === 0) {
    return "0";
  }

  while (num > 0) {
    result = characters[num % base] + result;
    num = Math.floor(num / base);
  }

  return result;
}
exports.getShortURLfromID = (req, res, next) => {
  console.log("reached in Base62UrlGenerator");
  //console.log(req.body.urlID);
  var base62Code = base10ToBase62(req.body.urlID);
  req.body.base62Code = base62Code;
  //var id = req.body.urlID;
  console.log(base62Code);
};
