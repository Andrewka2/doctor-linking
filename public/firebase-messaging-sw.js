importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyB76_-Sd5NFUWFH2YF8vgrkGstoCxGfm0M",
  authDomain: "doctor-linking.firebaseapp.com",
  projectId: "doctor-linking",
  storageBucket: "doctor-linking.appspot.com",
  messagingSenderId: "883757734887",
  appId: "1:883757734887:web:51081fa68aa0bc74e23b42",
  measurementId: "G-NYRE0E4KX0"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});