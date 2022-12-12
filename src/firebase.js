import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { setNotificationKey } from './http';

const firebaseConfig = {
    apiKey: "AIzaSyB76_-Sd5NFUWFH2YF8vgrkGstoCxGfm0M",
    authDomain: "doctor-linking.firebaseapp.com",
    projectId: "doctor-linking",
    storageBucket: "doctor-linking.appspot.com",
    messagingSenderId: "883757734887",
    appId: "1:883757734887:web:51081fa68aa0bc74e23b42",
    measurementId: "G-NYRE0E4KX0"
};
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
initializeApp(firebaseConfig);

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

export const getVerifyToken = (setTokenFound) => {
    return getToken(messaging, {vapidKey: 'BBlkLma9W7wNniBzw3xgIY9c8b7Xzqd2Vf7lnuJTw_QvpioV8GWQQyPo-wY9zoPlJg0SUV-YXNvUkkiy58kmEX8'}).then( async (currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        await setNotificationKey(currentToken)
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
}