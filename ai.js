function calculateRisk(pain,sleep,weather){

let score=0

score+=parseInt(pain)

if(sleep<5){

score+=2

}

if(weather=="Cold"||weather=="Rainy"){

score+=2

}

return Math.min(score,10)

}

function saveHistory(pain){

let history=JSON.parse(localStorage.getItem("painData"))||[]

history.push(pain)

localStorage.setItem("painData",JSON.stringify(history))

drawChart(history)

}

function drawChart(data){

let ctx=document.getElementById("chart")

new Chart(ctx,{

type:"line",

data:{

labels:data.map((_,i)=>"Day "+(i+1)),

datasets:[{

label:"Pain Level",

data:data

}]

}

})

}

let existing=JSON.parse(localStorage.getItem("painData"))

if(existing){

drawChart(existing)

}