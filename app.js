'use strict';

const util = require('util');
const express = require('express');
const app = express();
const db = require('./database.js');
const webpush = require('./push-notifications.js')
const skipMap = require('skip-map')
const bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/json' }));
app.use(skipMap());
app.use(express.static('public', {"extensions": ['html']}));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.post('/notifications', function (req, res) {
  console.log("Solicitacao de envio de mensagem recebida. Titulo: "+req.body.title+" Mensagem: "+req.body.message)

  if(req.body.access_key != 'O!IhKfNMafj0wj3'){
    res.status(403).send('Não autorizado. Código de acesso não reconhecido')
    return
  }

  var notification = {
    "title": req.body.title,
    "options": {
      "body": req.body.message,
      //"icon": "assets/images/icon.png",
      "badge": "assets/images/FMCLogo_bw_2011_5.png"
      // "data": {
      //   "info": "nesse programa tem informação"
      // }
    }
  }

  var subscriptions = db.getAllSubscriptions();
  for (var i = 0, len = subscriptions.length; i < len; i++) {
    webpush.sendNotification(subscriptions[i], JSON.stringify(notification))
    console.log(subscriptions[i]);
  }
  res.statusCode = 201;
  res.json({});
});

app.post('/subscriptions', function (req, res) {
  console.log(util.inspect(req.body));
  db.insertSubscription(req.body)
  res.statusCode = 201;
  res.json({});
});

app.delete('/subscriptions', function(req,res){
  console.log("removing subscription: "+req.body.endpoint);
  db.removeSubscritpionByEndpoint(req.body.endpoint);
  res.json({});
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
