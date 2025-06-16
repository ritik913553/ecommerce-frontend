// importScripts(
//   "https://www.gstatic.com/firebasejs/11.9.1/firebase-app-compat.js"
// );
// importScripts(
//   "https://www.gstatic.com/firebasejs/11.9.1/firebase-messaging-compat.js"
// );

// const firebaseConfig = {
//   apiKey: "AIzaSyC2UCFbLt3I2mGk9FLpyZBT7jQ9a02WeLI",
//   authDomain: "t-shirt-a8ffd.firebaseapp.com",
//   projectId: "t-shirt-a8ffd",
//   storageBucket: "t-shirt-a8ffd.firebasestorage.app",
//   messagingSenderId: "134509126011",
//   appId: "1:134509126011:web:cbfdabdf76021d9c62ddde",
//   measurementId: "G-83Z7QFYCZC",
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// // messaging.onBackgroundMessage(function (payload){
// //     console.log('Received background message ',payload)
// // })

// messaging.onBackgroundMessage(function (payload) {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message: ",
//     payload
//   );

//   const notificationTitle = payload.notification?.title || "New Notification";
//   const notificationOptions = {
//     body: payload.notification?.body || "",
//     icon: "/logo192.png", // Add this icon to your public folder
//     data: {
//       click_action: payload.fcmOptions?.link || "http://localhost:5173",
//     },
//   };
//   console.log("Received background message ", payload);
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });




// self.addEventListener("notificationclick", function (event) {
//   event.notification.close();

//   const clickAction = event.notification?.data?.click_action || "http://localhost:5173";

//   event.waitUntil(
//     clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
//       for (const client of clientList) {
//         if (client.url === clickAction && "focus" in client) {
//           return client.focus();
//         }
//       }
//       if (clients.openWindow) {
//         return clients.openWindow(clickAction);
//       }
//     })
//   );
// });





importScripts('https://www.gstatic.com/firebasejs/11.9.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.9.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyC2UCFbLt3I2mGk9FLpyZBT7jQ9a02WeLI",
  authDomain: "t-shirt-a8ffd.firebaseapp.com",
  projectId: "t-shirt-a8ffd",
  storageBucket: "t-shirt-a8ffd.firebasestorage.app",
  messagingSenderId: "134509126011",
  appId: "1:134509126011:web:cbfdabdf76021d9c62ddde",
  measurementId: "G-83Z7QFYCZC"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Received background message', payload);

  // Prefer notification object, fallback to data
  const notificationTitle = payload.notification?.title || payload.data?.title || 'New Notification';
  const notificationBody = payload.notification?.body || payload.data?.body || 'You have a new notification';
  const notificationIcon = payload.notification?.icon || '/logo192.png';
  const clickAction = payload.data?.click_action || 'http://localhost:5173';

  const notificationOptions = {
    body: notificationBody,
    icon: notificationIcon,
    data: {
      click_action: clickAction
    }
  };

  console.log("Title:", notificationTitle);
  console.log("Options:", notificationOptions);

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.click_action || 'http://localhost:5173';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});