import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {

apiKey:"AIzaSyDQu-PP2tRX1q8LQLx_HmiK6P53S7hQJhU",
authDomain:"fuel-tracker-2baaf.firebaseapp.com",
projectId:"fuel-tracker-2baaf",
storageBucket:"fuel-tracker-2baaf.firebasestorage.app",
messagingSenderId:"403213454298",
appId:"1:403213454298:web:852d44e8febb4a975ecee3"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
