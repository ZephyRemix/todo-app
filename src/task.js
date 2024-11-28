import button from './button.js'

const task = (function() {

    function createTask(name, dueDate, priority) {

        const taskWrapper = document.querySelector(".task__wrapper");
        const taskItem = document.createElement("div");
        const taskDetails = document.createElement("div");
        const taskLabel = document.createElement("label");
        const radioInput = document.createElement("input");
        const checkmarkSpan = document.createElement("span");
        const dueDateSpan = document.createElement("span");

        const buttonGroup = button.createButton();

        taskItem.classList.add("task__item");
        taskDetails.classList.add("task__item--details");

        taskLabel.classList.add("container");
        taskLabel.textContent = name;

        radioInput.setAttribute("type", "radio");
        radioInput.setAttribute("name", "task_completion_checkbox");

        checkmarkSpan.classList.add("checkmark");

        dueDateSpan.classList.add("task__due-date");
        dueDateSpan.textContent = dueDate;

        taskLabel.appendChild(radioInput);
        taskLabel.appendChild(checkmarkSpan);

        taskDetails.appendChild(taskLabel);
        taskDetails.appendChild(dueDateSpan);
        taskDetails.appendChild(buttonGroup);
        taskDetails.addEventListener("click", function(e) {
            addButtonFunctionality(e);
        });

        taskItem.appendChild(taskDetails);

        taskWrapper.appendChild(taskItem);
    }
    
    function addButtonFunctionality(event) {
        // Check if the clicked element is a button
        if (event.target.tagName === "BUTTON") {
            const button = event.target;

            // Find the parent container of the task details
            const taskItem = button.closest(".task__item--details");

            // Get a reference to the input element
            const taskName = taskItem.querySelector("label");

            // Get a reference to the due date span element
            const dueDateSpan = taskItem.querySelector(".task__due-date");

            // Check which button was clicked and log the corresponding details
            if (button.textContent === "Edit") {
                console.log("Edit button clicked");
                console.log("Input element:", taskName.textContent);
                console.log("Due date span:", dueDateSpan.textContent);
                // generate a copy of the edit modal
                // request taskModal class to querySelect the #addTaskButton element and change it to #editTaskButton instead
            } else if (button.textContent === "Delete") {
                taskWrapper.remove();
            }   
        }
    }

    return {createTask};
})();

export default task;