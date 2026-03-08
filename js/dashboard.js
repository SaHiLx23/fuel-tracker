import { db } from "./firebase.js";

import {
collection,
addDoc,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let chart;

window.addFuel = async function(){

let vehicle=document.getElementById("vehicleSelect").value;

let date=document.getElementById("date").value;
let km=document.getElementById("km").value;
let liters=document.getElementById("liters").value;
let price=document.getElementById("price").value;

await addDoc(
collection(db,"users",currentUser.uid,"vehicles",vehicle,"fuel_logs"),
{
date,
km:Number(km),
liters:Number(liters),
price:Number(price)
});

};

window.loadHistory=function(){

let vehicle=document.getElementById("vehicleSelect").value;

const q=query(
collection(db,"users",currentUser.uid,"vehicles",vehicle,"fuel_logs"),
orderBy("km")
);

onSnapshot(q,(snapshot)=>{

let prevKM=null;
let html="";
let labels=[];
let costs=[];

snapshot.forEach(doc=>{

let d=doc.data();

let mileage="-";

if(prevKM!==null){

let distance=d.km-prevKM;

mileage=(distance/d.liters).toFixed(2);

}

prevKM=d.km;

labels.push(d.date);
costs.push(d.price);

html+=`
<tr>
<td>${d.date}</td>
<td>${d.km}</td>
<td>${d.liters}</td>
<td>${d.price}</td>
<td>${mileage}</td>
</tr>
`;

});

document.getElementById("history").innerHTML=html;

if(chart) chart.destroy();

chart=new Chart(document.getElementById("fuelChart"),{
type:"bar",
data:{
labels:labels,
datasets:[{label:"Fuel Cost",data:costs}]
}
});

});

};