import { auth } from "./firebase.js";

import {
GoogleAuthProvider,
signInWithRedirect,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

loginBtn.onclick = () => {

const provider = new GoogleAuthProvider();

signInWithRedirect(auth, provider);

};

logoutBtn.onclick = () => {

signOut(auth);

};

onAuthStateChanged(auth,(user)=>{

if(user){

loginBtn.style.display="none";
logoutBtn.style.display="inline-block";

document.getElementById("userInfo").innerText =
"Logged in: "+user.email;

window.currentUser=user;
loadVehicles();

}
else{

loginBtn.style.display="inline-block";
logoutBtn.style.display="none";

}

});