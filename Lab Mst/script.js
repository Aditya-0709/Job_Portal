let tasks = [];

let addBtn = document.getElementById("addTaskBtn");
let taskName = document.getElementById("taskName");
let priority = document.getElementById("priority");
let taskList = document.getElementById("taskList");

let showAll = document.getElementById("showAll");
let showCompleted = document.getElementById("showCompleted");
let showPending = document.getElementById("showPending");

addBtn.addEventListener("click", addTask);
showAll.addEventListener("click", showAllTasks);
showCompleted.addEventListener("click", showCompletedTasks);
showPending.addEventListener("click", showPendingTasks);

function addTask() {

    let name = taskName.value;
    let pr = priority.value;

    let task = {
        name: name,
        priority: pr,
        completed: false
    };

    tasks.push(task);

    showTasks(tasks);

    taskName.value = "";
}

function showTasks(list) {

    for (let i = 0; i < list.length; i++) {

        let li = document.createElement("li");

        li.innerText = list[i].name + " (" + list[i].priority + ") ";

        let completeBtn = document.createElement("button");
        completeBtn.innerText = "Complete";

        completeBtn.addEventListener("click", function () {

            tasks[i].completed = true;

            showTasks(tasks);

        });

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function () {

            tasks.splice(i, 1);

            showTasks(tasks);

        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }
}

function showAllTasks() {

    showTasks(tasks);
}

function showCompletedTasks() {

    let completed = [];

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].completed === true) {
            completed.push(tasks[i]);
        }
    }

    showTasks(completed);
}

function showPendingTasks() {

    let pending = [];

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].completed === false) {
            pending.push(tasks[i]);
        }
    }

    showTasks(pending);
}