import { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addVehicle = async function(){

let name=document.getElementById("vehicleName").value;

await addDoc(
collection(db,"users",currentUser.uid,"vehicles"),
{name}
);

loadVehicles();

};

window.loadVehicles = async function(){

const snapshot=await getDocs(
collection(db,"users",currentUser.uid,"vehicles")
);

let select=document.getElementById("vehicleSelect");

select.innerHTML="";

snapshot.forEach(doc=>{

let opt=document.createElement("option");

opt.value=doc.id;
opt.text=doc.data().name;

select.appendChild(opt);

});

};