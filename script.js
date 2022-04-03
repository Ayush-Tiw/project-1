// Hackathon problem-Nationalize API 

//creation of element dynamically

let div1=document.createElement("div");
div1.id="header";
document.body.appendChild(div1);

let h1=document.createElement("h1");
h1.id="main_heading";
h1.innerHTML="Hackathon Project";
div1.appendChild(h1);

let h2=document.createElement("h2");
h2.id="topic";
h2.innerHTML="TOPIC-Implement the Nationalize API using async/await with fetch";
div1.appendChild(h2);

let div2=document.createElement("div");
div2.id="search_content";
document.body.appendChild(div2);

let h3=document.createElement("h3");
h3.id="side-heading"
h3.innerHTML="Search for data here ";
div2.appendChild(h3);

//creating inut element for taking input
let input=document.createElement("input");
input.type="text";
input.id="text";
div2.appendChild(input);

let btn=document.createElement("button");
btn.id="btn1";
btn.innerHTML="Search";
div2.appendChild(btn);


let first_name=document.getElementById("text").value;
const url=`https://api.nationalize.io/?name=${first_name}`

//creating an event listner
document.getElementById("btn1").addEventListener("click",async function(){
    let div3=document.createElement("div");
    div3.id="received-_content";
    document.body.appendChild(div3);
    
    let table=document.createElement("table");
    table.id="table";
    div3.appendChild(table);
    
    let tableHead=document.createElement("thead");
    table.appendChild(tableHead);
    

    
    let th2=document.createElement("th");
    th2.id="th2";
    th2.innerHTML="Country"
    tableHead.appendChild(th2);
    
    let th3=document.createElement("th");
    th3.id="th3";
    th3.innerHTML="Probablity"
    tableHead.appendChild(th3);
    
    let tableBody=document.createElement("tbody");
    table.appendChild(tableBody);
    
    let tr1=document.createElement("tr");
    tr1.id="tr1";
    tableBody.appendChild(tr1);
    
  
    
    let td12=document.createElement("td");
    td12.id="td12";
    td12.class="td"
    tr1.appendChild(td12);

    let td13=document.createElement("td");
    td13.id="td13";
    td13.class="td"
    tr1.appendChild(td13);
    
    let tr2=document.createElement("tr");
    tr2.id="tr2";
    tableBody.appendChild(tr2);
    
    let td21=document.createElement("td");
    td21.id="td21";
    td21.class="td"
    tr2.appendChild(td21);
    
    let td22=document.createElement("td");
    td22.id="td22";
    td22.class="td"
    tr2.appendChild(td22);
    
    let get_td12=document.getElementById("td12");
    get_td13=document.getElementById("td13");
    
    let get_td21=document.getElementById("td21");
    let get_td22=document.getElementById("td22");
    

    let first_name=document.getElementById("text").value;
const url=`https://api.nationalize.io/?name=${first_name}`

  await  fetch(url)
   .then((response)=>response.json())
   .then((data)=>{console.log(data);
get_td12.innerHTML=JSON.stringify(data.country[0].country_id);
get_td13.innerHTML=JSON.stringify(data.country[0].probability);

get_td21.innerHTML=JSON.stringify(data.country[1].country_id);
get_td22.innerHTML=JSON.stringify(data.country[1].probability);


})
})
