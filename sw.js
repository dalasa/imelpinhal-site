/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, serviceworker, es6 */

self.addEventListener('push', function(event) {
  "use strict";
  console.log('[Service Worker] Push Received.');
  console.log('[Service Worker] Push had this data: '+event.data.text());

  var notification = {};
  if (event.data) {
    notification = event.data.json();
  }
  console.log(notification);

  event.waitUntil(self.registration.showNotification(notification.title, notification.options));
});

self.addEventListener('notificationclick', function(event) {
  "use strict";
  // console.log('On notification click: ', event.notification.data);
  event.notification.close();

  // event.waitUntil(
  //   clients.openWindow('programacoes')
  // );
});


// event.waitUntil(
//   clients.openWindow('programacoes')
// );
// This looks to see if the current is already open and
// focuses if it is
// event.waitUntil(clients.matchAll({
//   type: "window"
// }).then(function(clientList) {
//   for (var i = 0; i < clientList.length; i++) {
//     var client = clientList[i];
//     if (client.url.includes('programacoes') && 'focus' in client)
//       return client.focus();
//   }
//   if (clients.openWindow)
//     return clients.openWindow('programacoes');
// }));
