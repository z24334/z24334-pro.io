
const db = require('./db.js')
const mysql = require('mysql')
const express = require('express')
const app = express()
app.use(express.static('../dist'))
var server = require('http').createServer(app)

var conn = mysql.createConnection(db.mysql)
app.post('/add', function (req, res) {
  var addSql = `select * from test_data`
  conn.query(addSql, function(err, results) {
    console.log(results)
  })
})
