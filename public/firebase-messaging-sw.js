// const { default: firebase } = require("firebase/compat/app");



importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')


const firebaseConfig = {
  apiKey: "AIzaSyC2UCFbLt3I2mGk9FLpyZBT7jQ9a02WeLI",
  authDomain: "t-shirt-a8ffd.firebaseapp.com",
  projectId: "t-shirt-a8ffd",
  storageBucket: "t-shirt-a8ffd.firebasestorage.app",
  messagingSenderId: "134509126011",
  appId: "1:134509126011:web:cbfdabdf76021d9c62ddde",
  measurementId: "G-83Z7QFYCZC"
};


firebase.initializeApp(firebaseConfig)

const messaging= firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log("Received background message : ",payload)
})

