import { db } from "./firebase.js";
import { state } from "./state.js";

import {
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addVehicle=async()=>{

let name=document.getElementById("vehicleName").value;

await addDoc(
collection(db,"users",state.user.uid,"vehicles"),
{name}
);

loadVehicles();

};

window.loadVehicles=async()=>{

const snapshot=await getDocs(
collection(db,"users",state.user.uid,"vehicles")
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
