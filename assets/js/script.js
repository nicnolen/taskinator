// GLOBAL VARIABLES
// Assign form element object representation to a variable. Not: (El identifies DOM elements)
var formEl = document.querySelector("#task-form");
// Assign task list element (li) object representation to a variable
var tasksToDoEl = document.querySelector("#tasks-to-do");

// FUNCTIONS
// Dynamically create the task item
var createTaskHandler = function(event) {
    
    // Preventing the browser from using its default behavior
    event.preventDefault();

    // create new task item
    var listItemEl = document.createElement("li");
    // style
    listItemEl.className = "task-item";
    // add text
    listItemEl.textContent = "This is a new task.";
    // append (add) the child element (li) to the end of the parent element (ul)
    tasksToDoEl.appendChild(listItemEl);
}

// Event Listener for list item DOM
formEl.addEventListener("submit", createTaskHandler);