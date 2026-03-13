function analyzePain(){

let pain=document.getElementById("pain").value
let sleep=document.getElementById("sleep").value
let weather=document.getElementById("weather").value

let risk=calculateRisk(pain,sleep,weather)

let message=""

if(risk>7){

message="⚠️ High flare risk tomorrow. Rest joints and apply heat therapy."

}

else if(risk>4){

message="Moderate risk. Do gentle stretching."

}

else{

message="Low flare risk. Maintain mobility."

}

document.getElementById("result").innerHTML=

"Flare Risk Score: "+risk+"<br>"+message

saveHistory(pain)

}