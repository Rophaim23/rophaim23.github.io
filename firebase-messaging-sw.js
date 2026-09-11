// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/main/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js"); 

// self.onnotificationclick = (event) => {
//   console.log("On notification click: ", event.notification.tag);
//   event.notification.close();

//   // This looks to see if the current is already open and
//   // focuses if it is
//   event.waitUntil(
//     clients
//       .matchAll({
//         type: "window",
//       })
//       .then((clientList) => {
//         for (const client of clientList) {
//           if (client.url === "/" && "focus" in client) return client.focus();
//         }
//         if (clients.openWindow) return clients.openWindow("/");
//       }),
//   );
// };


firebase.initializeApp({
    apiKey: "AIzaSyDb9XXnDzvUG6tLlECza-k7v6RTodIwGdA",
      authDomain: "ulum-4b431.firebaseapp.com",
      projectId: "ulum-4b431",
      storageBucket: "ulum-4b431.firebasestorage.app",
      messagingSenderId: "1073219074624",
      appId: "1:1073219074624:web:6d7113e7e0f3b3329cfda5",
      measurementId: "G-5SJPSKQDGM"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});