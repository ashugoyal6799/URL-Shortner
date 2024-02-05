const express = require('express');

const IDMap = new Map();

exports.getIdfromURL = (req,res,next) => {
    console.log("reached in IdGenerator");
    var url = req.body.url;
    console.log(url);

    const min = 1000000
    const max = 9999999999
    const id = Math.floor(Math.random()*max) + min;

    IDMap.set(id,url);
    console.log(IDMap.get(id),id);

    req.body.urlID = id;

};