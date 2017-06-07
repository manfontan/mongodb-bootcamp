var MongoClient = require('mongodb').MongoClient,
  f = require('util').format,
  assert = require('assert'),
  fs = require('fs');

// LDAP Server
var server = "192.168.14.101";
var user = "dbmaster";
var pass = "adminPa55wd123";
var dbname = "maindata"
var colname = "people"
var certspath = "/certs/mongodbca.pem"

// Read the certificates
var ca = [fs.readFileSync(__dirname + certspath)];
// var cert = fs.readFileSync(__dirname + "/ssl/client.pem");
// var key = fs.readFileSync(__dirname + "/ssl/client.pem");

// Url
var url = f('mongodb://%s:%s@%s/%s?authMechanism=PLAIN&maxPoolSize=1&ssl=true', user, pass, server, dbname);

// Let's write the actual connection code
MongoClient.connect(url, {
  sslCA: ca,
  sslValidate: false,
  checkServerIdentity: true
}, function(err, db) {
  assert.equal(null, err);
  console.log('you successfully connected using ssl and ldap: ' + user);
  var col = db.collection(colname);
  col.find({
    'name': 'Alice'
  }).toArray(function(error, doc) {
    if (doc) {
      assert(null, err);
      console.log(doc);
      db.close();
    } else {
      console.log('nothing found: ');
      db.close();
      return false;
    }
  });
});
