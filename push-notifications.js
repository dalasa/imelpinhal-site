/*
=======================================

Public Key:
BAXfB2qWUaKbBeHi5mJtZvKtgyK-oqSQPxvwZvMNYTYWHb557oc1ycseOwzN-W6ukChSVwS79njjJVlAS354-vk

Private Key:
BgW6RQAacHhqnq6giW5OSy5CM3kD_fjJY_L9liGj7uc

=======================================
*/

const webpush = require('web-push');

const publicVapidKey = "BOS9kPZJKn3KweVvVlfommxX4jllQ5FvPj6xpUcF8lkPjt6Uh9W8MyoxVBzsp-rMHkZJvAj2TMe_1OFtstJ8COA";
//process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = "_LRV9aZ4ij4rD4ZXAGn5hfcWSRV9GxorWjJAvwC5aTY";
//process.env.PRIVATE_VAPID_KEY;

// Replace with your email
webpush.setVapidDetails('mailto:dalasa.pifio@gmail.com', publicVapidKey, privateVapidKey);


exports.sendNotification = function(subscription, payload){
  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
}
