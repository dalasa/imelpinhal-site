const loki = require("lokijs");
const util = require('util');
var db = new loki('quickstart.db', {
    autoload: true,
    autoloadCallback : databaseInitialize,
    autosave: true,
    autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
  var subscriptions = db.getCollection("subscriptions");
  if (subscriptions === null) {
    subscriptions = db.addCollection("subscriptions");
  }

  // kick off any program logic or start listening to external events
  // runProgramLogic();
}

// example method with any bootstrap logic to run after database initialized
// function runProgramLogic() {
//   var entryCount = db.getCollection("subscriptions").count();
//   console.log("number of subscriptions in database : " + entryCount);
// }

exports.insertSubscription = function(subscription) {
  // subscription = {
  //   "endpoint": endpoint,
  //   "expirationTime": expirationTime,
  //   "keys": {
  //     "p256dh": hashKey,
  //     "auth": authKey
  //   }
  // };
  console.log("inserting subscription: "+util.inspect(subscription))
  db.getCollection("subscriptions").insert(subscription);
}

exports.getAllSubscriptions = function(){
  return db.getCollection("subscriptions").chain().data();
}

exports.getSubscriptionByKey = function(key){
  console.log("Getting subscription: "+key);
  return db.getCollection("subscriptions").find({"keys.p256dh": key});
}

exports.removeSubscritpionByEndpoint = function(endpoint){
  console.log("Removing subscription with endpoint: "+endpoint);
  db.getCollection("subscriptions").findAndRemove({"endpoint": endpoint});
}
