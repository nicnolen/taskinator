// GLOBAL VARIABLES
// Assign form element object representation to a variable. Not: (El identifies DOM elements)
var formEl = document.querySelector("#task-form");
// Assign task list element (li) object representation to a variable
var tasksToDoEl = document.querySelector("#tasks-to-do");

// FUNCTIONS
// Dynamically create the task item
var createTaskHandler = function(event) {
    // preventing the browser from using its default behavior
    event.preventDefault();
    
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create new list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // giv div a class name
    taskInfoEl.className = "task-info";
    
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // append (add) the child element (li) to the end of the parent element (ul)
    tasksToDoEl.appendChild(listItemEl);
}

// Event Listener for list item DOM
formEl.addEventListener("submit", createTaskHandler);