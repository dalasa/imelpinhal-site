// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');
 
// Your Google Cloud Platform project ID
const projectId = 'imelpinhal-website';
 
// Creates a client
const datastore = new Datastore({
  projectId: projectId,
});
 
// The kind for the new entity
const kind = 'Subscription';


//simulating a subscription
endpoint = 'endpoint'
expirationTime = 'some time'
hashKey = 'hashKey'
auth = 'auth'


// The Cloud Datastore key for the new entity
const subscriptionKey = datastore.key([kind, hashKey]);
 
// Prepares the new entity
const subscription = {
  key: subscriptionKey,
  data: {
    endpoint: endpoint,
    expirationTime: expirationTime,
    keys: {
      p256dh: hashKey,
      auth: auth
    },
    creationDate: new Date().toJSON()
  },
};
 
// Saves the entity
datastore
  .save(subscription)
  .then(() => {
    console.log(`Saved ${task.key.name}: ${task.data.description}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });