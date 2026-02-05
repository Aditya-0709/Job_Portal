let addBtn = document.querySelector("#addJobBtn");

let title = document.querySelector("#title");
let company = document.querySelector("#company");
let locInput = document.querySelector("#location");

let container = document.querySelector(".job-container");
let jobCount = document.querySelector("#jobCount");

function updateCount(){
    jobCount.innerText = document.querySelectorAll(".job-card").length;
}

addBtn.addEventListener("click", function(){

    if(title.value=="" || company.value=="" || locInput.value==""){
        alert("Fill all fields");
        return;
    }

    let div = document.createElement("div");
    div.className="job-card";

    div.innerHTML = `
        <h3>${title.value}</h3>
        <p>Company: ${company.value}</p>
        <p>Location: ${locInput.value}</p>
        <button class="apply-btn">Apply Now</button>
        <button class="delete-btn">Delete</button>
    `;

    container.appendChild(div);

    title.value="";
    company.value="";
    locInput.value="";

    updateCount();
});

document.addEventListener("click", function(e){

    if(e.target.className=="apply-btn"){
        e.target.innerText="Applied";
    }

    if(e.target.className=="delete-btn"){
        e.target.parentElement.remove();
        updateCount();
    }

});

updateCount();
