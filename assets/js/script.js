// GLOBAL VARIABLES
// Assign form element object representation to a variable. Not: (El identifies DOM elements)
var formEl = document.querySelector("#task-form");
// Assign task list element (li) object representation to a variable
var tasksToDoEl = document.querySelector("#tasks-to-do");

// FUNCTIONS
var taskFormHandler = function(event) {
    // preventing the browser from using its default behavior
    event.preventDefault();
    // assign variables for the task name and the task type
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    // reset the form
    formEl.reset();
    
    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

// Function to create a new task HTML Element
var createTaskEl = function(taskDataObj) {
    // create new list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give div a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // append (add) the child element (li) to the end of the parent element (ul)
    tasksToDoEl.appendChild(listItemEl);
}

// Event Listener for list item DOM
formEl.addEventListener("submit", taskFormHandler);