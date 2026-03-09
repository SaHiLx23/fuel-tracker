import { auth } from "./firebase.js";
import { state } from "./state.js";

import {
GoogleAuthProvider,
signInWithRedirect,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginBtn=document.getElementById("loginBtn");
const logoutBtn=document.getElementById("logoutBtn");

loginBtn.onclick=()=>{

const provider=new GoogleAuthProvider();
signInWithRedirect(auth,provider);

};

logoutBtn.onclick=()=>{

signOut(auth);

};

onAuthStateChanged(auth,(user)=>{

state.user=user;

if(user){

loginBtn.style.display="none";
logoutBtn.style.display="inline-block";

document.getElementById("userInfo").innerText="Logged in: "+user.email;

loadVehicles();

}else{

loginBtn.style.display="inline-block";
logoutBtn.style.display="none";

}

});
