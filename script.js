let addBtn = document.querySelector("#addJobBtn");
let title = document.querySelector("#title");
let company = document.querySelector("#company");
let locInput = document.querySelector("#location");
let container = document.querySelector(".job-container");
let jobCount = document.querySelector("#jobCount");

let searchBtn = document.querySelector("#searchBtn");
let searchTitle = document.querySelector("#searchTitle");
let searchLocation = document.querySelector("#searchLocation");
let resetBtn = document.querySelector("#resetBtn");

function updateCount() {
    jobCount.innerText = document.querySelectorAll(".job-card").length;
}

addBtn.addEventListener("click", function () {

    if (title.value.trim() === "" || company.value.trim() === "" || locInput.value.trim() === "") {
        alert("Fill all fields");
        return;
    }

    let div = document.createElement("div");
    div.className = "job-card";

    div.innerHTML = `
        <h3>${title.value}</h3>
        <p>Company: ${company.value}</p>
        <p>Location: ${locInput.value}</p>
        <button class="apply-btn">Apply Now</button>
        <button class="delete-btn">Delete</button>
    `;

    container.appendChild(div);

    title.value = "";
    company.value = "";
    locInput.value = "";

    updateCount();
});

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("apply-btn")) {
        e.target.innerText = "Applied";
        e.target.disabled = true;
    }

    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        updateCount();
    }
});

searchBtn.addEventListener("click", function () {

    let titleValue = searchTitle.value.toLowerCase().trim();
    let locationValue = searchLocation.value.toLowerCase().trim();

    let jobs = document.querySelectorAll(".job-card");

    jobs.forEach(function (job) {

        let jobTitle = job.querySelector("h3").innerText.toLowerCase();
        let jobLocation = job.querySelectorAll("p")[1].innerText.toLowerCase();

        if (titleValue === "" && locationValue === "") {
            job.style.display = "block";
        }
       
        else if (jobTitle.includes(titleValue) && jobLocation.includes(locationValue)) {
            job.style.display = "block";
        } 
        else {
            job.style.display = "none";
        }

    });
});
resetBtn.addEventListener("click", function () {

    searchTitle.value = "";
    searchLocation.value = "";

    let jobs = document.querySelectorAll(".job-card");

    jobs.forEach(function (job) {
        job.style.display = "block";
    });

});
updateCount();