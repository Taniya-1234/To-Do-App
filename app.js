let inp = document.querySelector("#input");
let btn = document.querySelector("#add");
let ul = document.querySelector("ul");

// Store tasks as objects: { text: "Task name", completed: false }
let tasks = [];

// Load tasks from localStorage on page load
window.onload = function () {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => addTaskToDOM(task));
    }
};

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add new task
btn.addEventListener("click", () => {
    let text = inp.value.trim();
    if (text === "") {
        alert("Please enter a task before adding!");
        return;
    }

    let task = { text: text, completed: false };
    tasks.push(task);
    addTaskToDOM(task);
    saveTasks();

    inp.value = "";
});

// Add task to DOM
function addTaskToDOM(task) {
    let li = document.createElement("li");
    li.innerText = task.text;

    // Apply completed style if task.completed is true
    if (task.completed) {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
    }

    // Toggle completed on click
    li.addEventListener("click", function () {
        task.completed = !task.completed;
        if (task.completed) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
        } else {
            li.style.textDecoration = "none";
            li.style.color = "black";
        }
        saveTasks();
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Task";
    deleteBtn.classList.add("delete");
    deleteBtn.style.backgroundColor = "rgb(250, 163, 163)";
    deleteBtn.style.marginLeft = "40px";
    li.append(deleteBtn);

    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // prevent strike toggle
        ul.removeChild(li);
        tasks = tasks.filter(t => t !== task);
        saveTasks();
    });

    ul.append(li);
}
