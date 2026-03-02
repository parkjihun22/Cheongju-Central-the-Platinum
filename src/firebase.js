// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth }     from "firebase/auth";
import { getStorage }  from "firebase/storage";
// (측정이 필요 없다면 analytics 생략하셔도 됩니다)
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyACc2I8N05qo8U1Pm9kzLNSBvRIMBdeXLc",
    authDomain: "jihun-3a99d.firebaseapp.com",
    projectId: "jihun-3a99d",
    storageBucket: "jihun-3a99d.firebasestorage.app",
    messagingSenderId: "45822960520",
    appId: "1:45822960520:web:7964a176760be653ff103d",
    measurementId: "G-FW"
};

const app = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
// export const analytics = getAnalytics(app); // 측정 안 쓰시면 주석 처리

