var MongoClient = require('mongodb').MongoClient,
  f = require('util').format;

// LDAP Server
var server = "192.168.14.101";
var user = "dbmaster";
var pass = "adminPa55wd123";
// Url
var url = f('mongodb://%s:%s@%s/?authMechanism=PLAIN&maxPoolSize=1', user, pass, server);
console.log('hello ' + user + ' server: ' + url)

// Let's write the actual connection code
MongoClient.connect(url, function(err, db) {
  console.log('you successfully connected using ldap: ' + user);
  db.close();
});
