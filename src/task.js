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

        dueDateSpan.textContent = dueDate;

        taskLabel.appendChild(radioInput);
        taskLabel.appendChild(checkmarkSpan);

        taskDetails.appendChild(taskLabel);
        taskDetails.appendChild(dueDateSpan);
        taskDetails.appendChild(buttonGroup);

        taskItem.appendChild(taskDetails);

        taskWrapper.appendChild(taskItem);
    }
    

    return {createTask};
})();

export default task;