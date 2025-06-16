import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { saveFCMtoken } from "../http/index";

const firebaseConfig = {
  apiKey: "AIzaSyC2UCFbLt3I2mGk9FLpyZBT7jQ9a02WeLI",
  authDomain: "t-shirt-a8ffd.firebaseapp.com",
  projectId: "t-shirt-a8ffd",
  storageBucket: "t-shirt-a8ffd.firebasestorage.app",
  messagingSenderId: "134509126011",
  appId: "1:134509126011:web:cbfdabdf76021d9c62ddde",
  measurementId: "G-83Z7QFYCZC"
};


const vapidKey = "BLXDcdZs9AZeQN-HOl9V_m4RAhNCqfbnkLsYkGbO-ThH-UcbGBpvmk0-o-7spybJ80QXnls9BBV_KpQZYTrbwsY"

const app = initializeApp(firebaseConfig)

const messaging = getMessaging(app)



export const requestFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey });
      if (token) {
        // Save the token to your backend
       const response =  await saveFCMtoken(token)

        console.log("Frontend me token save karne ke baad response ka value : ",response)
        return token;
      } else {
        console.warn("No token received from FCM");
      }
    } else {
      console.warn("Permission not granted for notifications");
    }
  } catch (err) {
    console.error("Error getting the FCM token: ", err);
  }
};


// export const onMessageListener = () =>{
//    return new Promise((resolve) =>{
//         onMessage(messaging,(payload)=>{
//             resolve(payload)
//         })
//     })
// }


export const onMessageListener = (callback) => {
  onMessage(messaging, callback);
};