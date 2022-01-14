import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCSWHwEHA6_2TPblLC5I7KDfXeaXKO4gsY",
    authDomain: "weather-station-iot-63b35.firebaseapp.com",
    databaseURL: "https://weather-station-iot-63b35-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "weather-station-iot-63b35",
    storageBucket: "weather-station-iot-63b35.appspot.com",
    messagingSenderId: "1037624595088",
    appId: "1:1037624595088:web:cb5bcd6e50f0a3d85f7e15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);