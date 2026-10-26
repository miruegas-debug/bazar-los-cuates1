importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyClr4Ij1fzQ7-5zgPtzkQkhB1VsfD5zBm4",
  authDomain: "bazar-los-cuates.firebaseapp.com",
  projectId: "bazar-los-cuates",
  storageBucket: "bazar-los-cuates.firebasestorage.app",
  messagingSenderId: "908351301550",
  appId: "1:908351301550:web:3ae25892920ce8dda24a3f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: './icon-192.png'
  };
  self.registration.showNotification(title, options);
});
