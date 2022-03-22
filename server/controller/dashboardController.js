const express = require("express");
const db = require("../../database");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.dashboardview = (req, res, next) => {
  var sql = "SELECT prodID, prodCategory, product, price FROM sellerlist";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    //console.log(data);
    res.render("items", { layout: "dashboard", data: data });
  });
};
